import React, { Component } from 'react';



const Search = (props) => {
  return (
    <div>
     <h2>Title: {props.data.title}</h2>
      <p>Description: {props.data.description}</p>
      <p>Zip: {props.data.zip}</p>
      <p>Tag: {props.data.tag}</p>
      
    </div>
  );
}

const SearchList = (props) => {
  console.log('in functional proplist for SearchList')
  console.log(props);
  <p>Tag: {props.tag}</p>
  return (
    <div className="list-group">
     
      { props.posts.map(p => <Search data={p} /> ) }
    </div>

  );
}



export default SearchList;