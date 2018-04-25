import React, { Component } from 'react';
import './PostList.css'
import './blog.css';


const Post = (props) => {
  return (
    <div id="post">
    <div className="displayBox col-lg-6 col-md-offset-3" >
      <div className="form-group">
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
      <p>Zip: {props.data.zip}</p>
      <p>Tag: {props.data.tag}</p>
      <button type="button"> Like</button>
      <button type="button">Comment</button>
      </div>
      </div>
    </div>
  );
}


const PostList = (props) => {
  console.log('in functional proplist for PostList')
  console.log(props);
  return (
    <div className="list-group">
     
      { props.posts.map(p => <Post data={p} /> ) }
    </div>
  );
}



export default PostList;


// posts = [{ a: 34 }, { a: 45 }, { a: 56 }, ....]

// posts.map( (post) => {
//   console.log(post);
// })