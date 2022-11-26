import React from 'react';
import './Post.css';
import Postimg from './post.jpg';

const Post = () => {
    return (
        <div className='Post'>
            <img className='Postimg' src={Postimg} alt="pimg" />

            <div className="PostDetail">
                <div className="PostCategories">
                    <span className="PostCategory">Music</span>
                    <span className="PostCategory">Art</span>
                </div>
                <span className="PostTitle">
                    Title
                </span>
                <hr />
                <span className="PostDate">10 minutes ago</span>
            </div>
            <p className="PostDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum assumenda ipsam, voluptatem veritatis autem unde atque officiis mollitia ducimus error praesentium tempora voluptatibus pariatur aliquam commodi ex fuga at repellat. Totam aut praesentium odit ratione!
            </p>
        </div>
    )
}

export default Post