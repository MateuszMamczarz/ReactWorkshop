import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        this.fetchPosts();
    }

    fetchPosts = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        }).then((posts) => {
            this.setState({ posts });
            return posts;
        }).catch((error) => {
            console.error(error);
        });
    }

    renderPosts = () => {
        const { posts } = this.state;
        let listOfPosts = [];
        console.log(posts);
        posts.forEach((post) => {
            listOfPosts.push(<div><Link to={`post/${post.id}`}>{post.title}</Link></div>);
        })
        return listOfPosts;
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h2>Posts</h2>
                {posts ? this.renderPosts() : <div></div>}
            </div>
        )
    }
}

export default Home;