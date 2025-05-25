import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(resp.data);
  };

  const renderComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  });

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    {renderComments}
  </div>;
}
