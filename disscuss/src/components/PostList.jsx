// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h2>Discussion Forum</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.User.username}</small>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default PostList;
