import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    });
    setTitle('');
  };

  return <div>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        {/* <div><label>Title</label></div> */}
        <input type="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title.'
        />

      </div>
      <button className='btn btn-primary mt-2'>Submit</button>
    </form>
  </div>;
}
