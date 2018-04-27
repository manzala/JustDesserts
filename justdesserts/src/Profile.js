import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostList from './PostList';


import './Profile.css';
import './PostList.css'

class Profile extends Component {
  constructor(){
    super();
    this.state ={
      title: '',
      zipcode:'',
      tag:'',
      description:'',
      postList: []
    };

   
    this.handleChange = this.handleChange.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  componentDidMount() {
    this.getAllPosts();
  }


  handleChange(value, fieldName){
    this.setState({[fieldName]:value});
  }


  getAllPosts() {
    console.log('getting the posts....');
    fetch('/api/posts/profile',{
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
        postList: posts
      })
    })
  }

  

  render(){
    return (
     
      <div className="back">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      {/*-NAVBAR !*/}
  <nav className="navbar navbar-light navbar-fixed-top" style={{backgroundColor: '#6F42C1'}}>  
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <img src="/images/blog/dot.png" width={30} height={30} className="d-inline-block align-top" alt />
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="/Profile">Profile</a></li>
        <li className="active"><a href="/Blog">Blog</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        
      </form>
    </div>
  </nav>

        <div className="container">
          
          <div className="form-row">
             <div className="col-md-4 col-md-offset-4">
                <div className="middle">
                  <h1> JustDesserts</h1>
                    <h2>Profile</h2>
                 </div> 
               </div>
          </div>

                <PostList posts={this.state.postList}/>

           </div>
       </div>         
      );
    }

  }





export default Profile;