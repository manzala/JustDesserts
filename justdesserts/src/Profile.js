import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostList from './PostList';


//import './Profile.css';

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
                <button className="w3-button w3-block w3-theme-l1 w3-left-align"><a href="./Blog"><i className="fa fa-users fa-fw w3-margin-right" /> Blog Posts </a></button>
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
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <div className = "Tags">
                      <h6 className="w3-opacity">Just Desserts Posts</h6>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ><br />

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





export default Profile;