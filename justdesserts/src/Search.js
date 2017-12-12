import React, { Component } from 'react';


const Search = (props) => {
  return (
    <div>
       {props.data.tag}
       {props.data.title}
 	   {props.data.description}
       {props.data.zip}

    </div>
  );
}


const SearchList = (props) => {
  return (
    <div className="search-list">
     
      { props.tags.map(tag => <Search data={tag} /> ) }
    </div>
  );
}


{/*****

class Search extends Component {
	constructor(){
		super();
		this.state={
			search = ''
		};

	}

	updateSearch(event){
		this.setState({search: event.target.value.substr(0,12)})
	}
	render(){
		let filteredSearch = this.props.posts.filter(
				(post) => {

					return post.tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; 
				}
			);

		return(
			<div className="Search">
				<ul>	
					{filteredSearch.map((tag => <Post data={tag} /> )))}

				</ul>
				<input type='text' 
					value={this.state.search}
					onChange={this.updateSearch.bind(this)}/>  

			</div>
			);
	}

}


****/}


export default Search;