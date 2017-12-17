import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchList from './SearchList';

class Search extends Component {
constructor() {
        super();
        this.state = {
            tag: '',
            searchList: [],
            isFound:false,
        };


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    }

getAllPosts() {
    console.log('getting the posts....');
    fetch('/api/posts/search',{
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    })
    .then(res => res.json())
    .then(posts => {
      console.log('GOT the posts....');
      console.log(posts);
      // console.log(this.setState)
      this.setState({
        searchList: posts,
      })
    })
  }
   
 handleChange(value, fieldName){
    this.setState({[fieldName]:value});
  }

  handleClick(event) {
    event.preventDefault();
    const{tag} = this.state

    console.log("in blog.js handleClick");

    fetch('/api/posts',{
      method: "POST",
      body: JSON.stringify({
        tag,
      }),
      headers: {
        "Content-Type":"application/json"
      },
      credentials: 'include',
    })
    .then((response) => {
      if(response.status >= 400) {
        console.log('ERROR NOT SEARCHED');
        return;
      }

      console.log('making next fetch')
      this.getAllPosts();
      this.setState({ isFound: true })
      return response.json();
    })
    .then(body => {
      console.log('the body: ')
      console.log(body);
    })
    .catch(err => console.log(err))


  }
    render() {
   
   if(this.state.isFound) {
           return <Redirect to="/Search" />;
         }

        return (
            <div>
               <form onSubmit={this.handleClick}>
               	 <div className = "inputBox">
          			 <input type="text" name="tag" placeholder="Search" onChange={(e) => this.handleChange(e.target.value, 'tag')} />
            		 <button type="submit" className="btn btn-secondary">Submit</button>
            		 <SearchList posts={this.state.searchList} />
    				     </div>
    				     <br/>
     		       </form>
             
            </div>
        )
    }
}

export default Search;



