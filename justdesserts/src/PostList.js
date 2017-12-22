import React, { Component } from 'react';
import './PostList.css'

const Post = (props) => {
  return (
    <div id="post">
    <div className="displayBox">
      <h2>Title: {props.data.title}</h2>
      <p>Description: {props.data.description}</p>
      <p>Zip: {props.data.zip}</p>
      <p>Tag: {props.data.tag}</p>
      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> Like</button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> Comment</button>
      </div>
    </div>
  );
}


const PostList = (props) => {
  console.log('in functional proplist')
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