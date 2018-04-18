import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostList from './PostList';
import SearchList from './SearchList';

import './blog.css';

class blog extends Component {
  constructor(){
    super();
    this.state ={
      title: '',
      zipcode:'',
      tag:'',
      description:'',
      postList: [],
      searchList: [],
      isFound:false,

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.getAllPosts();
  }

  handleChange(value,fieldName){
    this.setState({[fieldName]:value});
  }
  handleSearchChange(value){
    this.setState({tag: value})
  }


  getAllPosts() {
    console.log('getting the posts....');
    fetch('/api/posts',{
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
        postList: posts,
      })
    })
  }

  handleClick(event){
    event.preventDefault();
    const{title, zipcode, tag, description} = this.state

    console.log("in blog.js handleClick");

    fetch('/api/posts',{
      method: "POST",
      body: JSON.stringify({
        title,
        zipcode,
        tag,
        description,
      }),
      headers: {
        "Content-Type":"application/json"
      },
      credentials: 'include',
    })
    .then((response) => {
      if(response.status >= 400) {
        console.log('ERROR NOT POSTED');
        return;
      }

      console.log('making next fetch')
      this.getAllPosts();
      return response.json();
    })
    .then(body => {
      console.log('the body: ')
      console.log(body);
    })
    .catch(err => console.log(err))


  }

  handleSearchClick(event){
    event.preventDefault();
    const{tag} = this.state

    console.log("Within the handleSearchClick function");

    fetch('/api/posts/search',{
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
        console.log('Got a status code of ' + response.status + " failed to handle search");
        return;
      } else {
      console.log('Received a status code lower than 400, Status: ' + response.status);
      return response.json();
    }})
    .then(filteredPosts => {
      console.log('Filtered Posts: ');
      console.log(filteredPosts);
      this.setState({
        postList: filteredPosts,
      })
    })
    .catch(err => console.log(err))


  }

  render(){

    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a href="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right" />Just Desserts</a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe" /></a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell" /></button>
              <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width: 300}}>

              </div>
            </div>
          </div>
        </div>
        {/* Page Container */}
        <div className="w3-container w3-content" style={{maxWidth: 1400, marginTop: 80}}>
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center"><img src="" className="w3-circle" style={{height:106, width:106}} alt="Avatar"/></p>
                  <hr />
                </div>
              </div>
              <br />
              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button className="w3-button w3-block w3-theme-l1 w3-left-align"><a href="./Profile"><i className="fa fa-users fa-fw w3-margin-right" /> My Profile </a></button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img src="" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />


              {/* End Left Column */}
            </div>
            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                    
                    
                <div>
               
               <form>
                  <div className = "inputBox-search">
                  <input type="text" name="search" placeholder="Search.." onChange={(e) => this.handleSearchChange(e.target.value)} />
                  {/*<input type="submit" name="" value="Search" onClick={(e)=> this.handleSearchClick(e)}/>*/}
                  <button onClick={(e)=> this.handleSearchClick(e)}>Search</button>
                  <SearchList posts={this.state.searchList} />
                </div>
                <br/>
              </form>
             
            </div>

                

                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <div className = "Tags">
                  {/*Post FieldName*/}
                   <form onSubmit={this.handleClick}>
                   <div className = "inputBox">
                      <input type="text" name="title" placeholder="Title" onChange={(e) => this.handleChange(e.target.value, 'title')} />
                   </div>
                    <br/>
                   <div className = "inputBox">   
                       <textarea type="text" name="description" placeholder="Description" onChange={(e) => this.handleChange(e.target.value, 'description')}/>
                     </div>
                     <br/>
                   <div className = "inputBox">   
                       <input type="text" name="zipcode" placeholder="Zipcode" maxLength="5" onChange={(e) => this.handleChange(e.target.value, 'zipcode')}/>
                       <input type="text" name="tag" placeholder="Tag ex: vegan, non-dairy, gluten-free, sugar-free" maxLength="12" onChange={(e) => this.handleChange(e.target.value, 'tag')}/>


                    </div>
                 

                        <input type="submit" className="w3-button w3-theme " name="" value="Post" onClick={(e)=> this.handleClick(e)}/>
                        {/*<button type="button" className="w3-button w3-theme"><i className="fa fa-pencil" /> Post</button> */}
                    </form>
                   {/*End of Post FieldName*/}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="posts-results"><br />
                
                <PostList posts={this.state.postList} />
                <div className="w3-row-padding" style={{margin: '0 -26px'}}>
                  <div className="w3-half">
                 
                    {/**<img src="" style={{width: '100%'}} alt="" className="w3-margin-bottom" />***/}
                  </div>
                  <div className="w3-half">
                    {/**<<img src="" style={{width: '100%'}} alt="" className="w3-margin-bottom" />***/}
                  </div>
                </div>
              </div>

              {/* End Middle Column */}
            </div>

            {/* End Grid */}
          </div>
        


          {/* End Page Container */}
        </div>

      </div>
      );
    }

  }



export default blog;