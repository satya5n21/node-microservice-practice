import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const resp = await axios.get('http://localhost:4000/posts');

    setPosts(resp.data);
  };

  const renderedPosts = Object.values(posts).map(post => {
    return <div
      className='card'
      style={{ width: '30%', marginBottom: '20px' }}
      key={post.id}
    >
      <div className='card-body'>
        <h3>{post.title}</h3>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    </div>;
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  )
}
