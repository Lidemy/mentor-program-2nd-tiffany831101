import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    }
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id).then(response => {
      this.setState({
        post: response.data,
      })
    })
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h3>{post.title}</h3>
        <div>id:{this.props.id}</div>
        <p>{post.body}</p>

      </div>
    )
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postId: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data,
      })
    })
  }

  handleClick() {
    this.setState({
      postId: null,
    })
  }


  render() {
    const { posts, postId } = this.state
    return (
      <div>
        <h2>
          {postId && <button type="button" className="btn btn-primary" onClick={this.handleClick}>Back</button>}
          Blog Posts</h2>
        {postId && <Post id={postId} />}
        {
          !postId &&
          <ul className="list-group">
            {posts.map(post => {
              return (
                <li key={post.id} className="list-group-item" onClick={() => {
                  this.setState({
                    postId: post.id,
                  })
                }}>{post.title}</li>
              )
            })}

          </ul>
        }

      </div>

    )
  }
}

const About = (props) => {
  return (
    <div>
      <h2>its me</h2>
      <h3>contact me</h3>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: "home",
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(e) {
    e.preventDefault();
    this.setState({
      tab: e.target.name,
    })
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Blog</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={"nav-item " + (tab === 'home' && 'active')}>
                <a className="nav-link" name="home" onClick={this.handleTabChange}>Home</a>
              </li>
              <li className={"nav-item " + (tab === 'about' && 'active')}>
                <a className="nav-link" name="about" onClick={this.handleTabChange}>About</a>
              </li>
            </ul>
          </div>
        </nav>


        <div className="container">
          {tab === 'home' && <Home />}
          {tab === 'about' && <About />}


        </div>
      </div>

    );
  }
}

export default App;
