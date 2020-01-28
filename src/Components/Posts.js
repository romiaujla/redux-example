import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../Actions/postsActions';
import PropTypes from 'prop-types';

class Posts extends Component {

    constructor(props){
        super(props);
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return this.props.posts.map((post) => 
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    posts: state.posts.items
})
 
export default connect(mapStateToProps, { fetchPosts })(Posts);