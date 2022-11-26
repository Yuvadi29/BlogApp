import React from 'react';
import Bar from '../../Bar/Bar';
import SinglePost from '../../SinglePost/SinglePost';
import './PostDetail.css';

const PostDetail = () => {
    return (
        <div className='PostDetail'>
            <SinglePost />
            <Bar />
        </div>
    )
}

export default PostDetail