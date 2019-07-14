import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const fetchPosts = (setPosts) => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then((posts) => {
        setPosts(posts);
    }).catch((error) => {
        console.error(error);
    });
};

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts(setPosts);
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (<li key={post.id}><Link to={`/post/${post.id}`} > {post.title}</Link></li>))}
            </ul>
        </div>
    )
}

export default Home;