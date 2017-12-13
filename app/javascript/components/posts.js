import * as React from "react";
import axios from 'axios';

import Comments from "./comments"
import Like from "./like"
import Api from './api'

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      page: 1,
      nextPage: 1
    }
  }

  componentDidMount() {
    let currentPage = this.state.page;
    this.getPosts(currentPage)

  }

  getPosts(pageNumber){
    let URL = Api.getPosts(pageNumber);
    let arr = this.state.posts;
    axios.get(URL)
      .then((response) => {

        this.setState({
          posts: [...arr, ...response.data.posts]
        })
      });
  }

  handleNextPage() {
    let nextPage = this.state.page + 1;
    let posts = this.state.posts;

    this.setState({
      page: nextPage,
      posts: posts
    })

    this.getPosts(nextPage);
  }

  getNextPageUrl() {
    return "http://" + window.location.hostname + ":" + window.location.port + Api.getPosts(this.state.page)
  }

  render() {
    return (
        <div className="posts" data-turbolinks="false">
          <div className="row">
            {
              this.state.posts.map((post) => {
                return (
                  <div key={post.id} className="post" >
                    <div className="avatar"> <img src="/boy.png" alt="avatar" className="img-circle" /> </div>
                    <div className="username" >
                      <a href={"users/" + post.user.id}>
                        {post.first_name + " " + post.last_name}
                      </a>
                    </div>
                    <div className="caption">{post.caption}</div>
                    <div className="image"> <img src= { post.image } alt="image" className="img-responsive"/> </div>
                    <Like post={post} />

                    <Comments key={post.id} post={post} />
                  </div>
                )
              })
            }
          </div>
          <button onClick={() => this.handleNextPage()} className="btn" >Load more...</button>
        </div>
    );
  }
}

export default Posts;
