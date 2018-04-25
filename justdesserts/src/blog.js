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

      
      <div className="back">

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />

  {/*-NAVBAR !*/}
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <img src="/images/blog/sweet.png" width={30} height={30} className="d-inline-block align-top" alt />
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="/Profile">Profile</a></li>
        <li className="active"><a href="/Blog">Blog</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" name="search" onChange={(e) => this.handleSearchChange(e.target.value)}/>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit" onClick={(e)=> this.handleSearchClick(e)}>
              <i className="glyphicon glyphicon-search" />
            </button>
             <SearchList posts={this.state.searchList}/>
          </div>
        </div>
      </form>
    </div>
  </nav>
  <div className="container">

    {/*-LEFT SIDE CONTENT */}
    <div className="form-row">
      <div className="col-sm-6 col-md-3">
        <div className="sidebar">
          <h1> JustDesserts</h1>
          <h2>Profile</h2>
        </div> 
      </div>
    </div>
    {/*-<form class="form col-md-4 col-md-offset-4" style="background-color:lavender;">!*/}
    {/*-POST BOX  !*/}
    <form className="form col-md-4 col-md-offset-1" onSubmit={this.handleClick}>
      <div className="inputBox-search">
        
        <div className="form-row"> 
          <div className="form-group">
            <input type="text" name="title" className="form-control" placeholder="Title" onChange={(e) => this.handleChange(e.target.value, 'title')} />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Description" rows={5} id="Description" onChange={(e) => this.handleChange(e.target.value, 'description')}/>
          </div>
          <div className="form-row">  
            <div className="form-group col-md-6">                                                                                                       
              <input type="text" name="zipcode" maxLength={5} className="form-control" placeholder="Zipcode" onChange={(e) => this.handleChange(e.target.value, 'zipcode')}/>
            </div>
            <div className="form-group col-md-6">
              <input type="text" name="tag" className="form-control" placeholder="Tag" onChange={(e) => this.handleChange(e.target.value,'tag')}/>
            </div>
          </div>
        </div>
        <button onClick={(e)=> this.handleClick(e)}>Post</button>
      </div>
      </form>
  </div>
  {/*-POST SECTION !*/}
  <div className="content">
    <div className="form-row ">  
      <div className="form-group">
        {/*-PUT POSTS LIST OVER HERE !*/}
         <PostList posts={this.state.postList} />

      </div>
    </div>
  </div>
</div>

      );
      }

   } 



 export default blog;