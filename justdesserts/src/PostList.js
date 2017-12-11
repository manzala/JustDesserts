import React, { Component } from 'react';

const Post = (props) => {
  return (
    <div>
      <h2>Title: {props.data.title}</h2>
      <p>Description: {props.data.description}</p>
      <p>Zip: {props.data.zip}</p>
      <p>Tag: {props.data.tag}</p>
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