<div>

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="css/blog.css" />
  {/*-NAVBAR !*/}
  <nav className="navbar fixed-top navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <img src="images/cupcake.png" width={30} height={30} className="d-inline-block align-top" alt />
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Profile</a></li>
        <li className="active"><a href="#">Blog</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" name="search" onChange={(e) => this.handleSearchChange(e.target.value)}/>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit" onClick={(e)=> this.handleSearchClick(e)}>
              <i className="glyphicon glyphicon-search" />
            </button>
             <SearchList posts={this.state.searchList} />
          </div>
        </div>
      </form>
    </div>
  </nav>
  <div className="container">

    {/*-LEFT SIDE CONTENT */}
    <div className="form-row">
      <div className="col-sm-4 col-md-3">
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
        <fieldset disabled>
          <div className="form-group">
            <input type="text" id="post" className="form-control" placeholder="Post Below" />
          </div>
        </fieldset>
        <div className="form-row"> 
          <div className="form-group">
            <input type="text" name="title" className="form-control" placeholder="Title" onChange={(e) => this.handleChange(e.target.value, 'title')} />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Description" rows={5} id="Description" defaultValue={""} onChange={(e) => this.handleChange(e.target.value, 'description')}/>
          </div>
          <div className="form-row">  
            <div className="form-group col-md-6">
              <input type="text" name="zipcode" maxLength={5} className="form-control" placeholder="Zipcode" onChange={(e) => this.handleChange(e.target.value, 'zipcode')} onChange={(e) => this.handleChange(e.target.value, 'tag')}/>
            </div>
            <div className="form-group col-md-6">
              <input type="text" name="tag" className="form-control" placeholder="Tag" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-default" onClick={(e)=> this.handleClick(e)}>Post</button>
      </div>
    </form>
  </div>
  {/*-POST SECTION !*/}
  <div className="content">
    <div className="form-row ">  
      <div className="form-group col-lg-6 col-md-offset-3">
        {/*-PUT POSTS LIST OVER HERE !*/}
         <PostList posts={this.state.postList} />
      </div>
    </div>
  </div>
</div>
