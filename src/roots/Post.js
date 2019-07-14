import React, { useEffect, useState } from 'react';

const fetchPost = (id, setPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then((post) => {
        setPost(post);
    }).catch((error) => {
        console.error(error);
    });
};

const Post = (props) => {
    const id = props.match.params.id;
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetchPost(id, setPost);
    }, [id]);

    return post ? (
        <div>
            <h2>{post.title}</h2>
            <span>{post.body}</span>
        </div>
    ) : <div>Loading</div>
}

export default Post;