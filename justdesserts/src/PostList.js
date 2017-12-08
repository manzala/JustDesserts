import React, { Component } from 'react';

const Post = (props) => {
  return (
    <div>
      {props.data}
    </div>
  );
}

class PostList extends Component{
    constructor(props){
      super(props);

      console.log('in PostList constructor')
      console.log(props)

      this.state={
        posts: props.posts
      };
     
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, fieldName){
    this.setState({[fieldName]:value});

  }

  render(){
      console.log(this.state);
      return (
        <div className="list-group">
        <div>Test</div>
        {
          this.state.posts.map((post, index) => {
            return <Post data={post}  key={index} /> 
          })
        }
      </div>


      )
  }

  }

export default PostList;


// posts = [{ a: 34 }, { a: 45 }, { a: 56 }, ....]

// posts.map( (post) => {
//   console.log(post);
// })