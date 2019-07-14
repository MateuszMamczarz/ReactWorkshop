import React, { PureComponent } from 'react';

class Post extends PureComponent {
    constructor(props) {
        super(props);
        this.fetchPost();
        this.state = {
            post: null,
        }
    }

    fetchPost = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        }).then((post) => {
            this.setState({ post });
            console.log(post);
            return post;
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const { post } = this.state;
        return post ? (
            <div>
                <h2>{post.title}</h2>
                <span>{post.body}</span>
            </div>
        ) : <div>Loading</div>
    }
}

export default Post;