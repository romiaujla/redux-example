import React, { Component } from 'react';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        // Gets 100 posts from the jsonplaceholder to set as state
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then((data) => {
                this.setState({posts: data})
            })
    }

    renderPosts = () => {
        return this.state.posts.map((post) => 
            <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr></hr>
            </div>
        )
    }

    render() { 
        return (
            <div className='Posts'>
                <h1>Posts</h1>
                {this.renderPosts()}
            </div>
        );
    }
}
 
export default Posts;