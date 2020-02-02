import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../Actions/postsActions';
import PropTypes from 'prop-types';

class Posts extends Component {

    static defaultProps = {
        posts: [],
        fetchPosts: () => {},
        newPost: {}
    }

    constructor(props){
        super(props);
        this.props.fetchPosts();
        this.state = {
            posts: [],
            newPost: {}
        }
    }

    static getDerivedStateFromProps(nextProps){
        if(nextProps.newPost){
            return {newPost: nextProps.newPost}
        }
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
    newPost: PropTypes.object,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})
 
export default connect(mapStateToProps, { fetchPosts })(Posts);