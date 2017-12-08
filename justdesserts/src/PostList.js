import React, { Component } from 'react';

const Post = (props) => {
  return (
    <div>
      <p>Title: {props.data.title}</p>
      <p>description: {props.data.description}</p>
      <p>zip: {props.data.zip}</p>
      <p>tag: {props.data.tag}</p>
    </div>
  );
}


const PostList = (props) => {
  console.log('in functional proplist')
  console.log(props);
  return (
    <div className="list-group">
      <div>Test</div>
      { props.posts.map(p => <Post data={p} /> ) }
    </div>
  );
}



export default PostList;


// posts = [{ a: 34 }, { a: 45 }, { a: 56 }, ....]

// posts.map( (post) => {
//   console.log(post);
// })