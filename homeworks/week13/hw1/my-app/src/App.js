import React, { Component } from 'react';
import './App.css';
import Post from "./Post";
import MyForm from "./GetPost";
import Header from "./Header";
import axios from "axios";
import Nav from "./Nav"
import Banner from "./Banner";
import PostBottom from "./PostBottom";
import AboutHeader from "./AboutHeader";
import AboutBanner from "./AboutBanner";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      posts: [],
      postId: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("http://45.55.26.18:3310/posts/").then(response => {
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
    console.log(posts);
    return (
      <div>
        {
          !postId &&
          <div className="mx-0 mt-3 row d-flex flex-wrap justify-content-between">
            {posts.map(post => {
              if (post.id < 4) {
                return (
                  <div key={post.id} className="col-lg-4 col-md-6 col-12">
                    <div className="post__image">
                      <img src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" className="img-fluid" alt="Responsive image"></img>
                    </div>
                    {/* 圖片 */}
                    {/* 標題 */}
                    <div className="post__title">

                      <Link to={`/posts/${post.id}`}>
                        {post.title}
                      </Link>
                    </div>
                    {/* 內文 */}
                    <div className="post__body">
                      <h4 className="card-title text-white">
                        <Link to={`/posts/${post.id}`}>
                          {post.body}
                        </Link></h4>
                      <p className="post__author">
                        <Link to={`/posts/${post.id}`}>
                          {post.author}
                        </Link></p>
                    </div>
                    {/* 作者 */}
                  </div>
                )


              }
            })}
          </div>


        }
        < Banner />
        < PostBottom posts={this} />
      </div>

    )

  }
}

const About = (props) => {
  return (
    <div>
      <AboutHeader />
      <AboutBanner />
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
    console.log(tab);
    return (
      <Router>
        <div>
          <Nav />
          <Header />



          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={Post} />
            <Route exact path="/posts" component={MyForm} />


          </div>
        </div>
      </Router>

    );
  }
}




export default App;
