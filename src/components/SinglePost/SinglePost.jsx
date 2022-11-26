import React from 'react';
import './SinglePost.css';
import Post from './post.jpg';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';

const SinglePost = () => {
    return (
        <div className='SinglePost'>
            <div className="wrapper">

                <img src={Post} alt="" className="postimage" />

                <h1 className="postTitle">
                    Lorem ipsum dolor sit.
                    <div className="edit">
                        <BiEdit className="editicon" />
                        <FaTrash className="deleteicon" />
                    </div>
                </h1>

                <div className="postInfo">
                    <span>Author: <b className="postAuthor">John Doe</b></span>
                    <span>1 hour ago</span>
                    <br />
                </div>
                <p className="postdesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, recusandae repellat. Iure quae soluta porro commodi ut a dolores praesentium odio non ratione quos hic possimus, nihil omnis magnam earum autem nisi magni adipisci. Non aliquid blanditiis praesentium tenetur quis obcaecati totam exercitationem, vel corrupti eligendi maiores quo earum expedita ipsa asperiores debitis veritatis facilis quam minima. Aperiam illo reiciendis beatae molestias, minus atque minima, quia rem sequi consectetur nisi consequatur eum ut perferendis, at dolorum cumque debitis ex expedita doloribus est tempore incidunt autem. Consectetur vero molestias suscipit quam! Illum, impedit velit. Incidunt repellendus a maiores repellat ducimus in iusto mollitia inventore rem amet possimus nisi nemo unde voluptate distinctio repudiandae non sit cum nobis, facilis placeat quia pariatur? In quisquam optio beatae dolore vitae, asperiores facilis laborum voluptatem ipsa rerum iste consequatur maxime amet rem provident odio nesciunt doloribus libero voluptatum pariatur ipsum atque sequi odit? Eos, officiis.
                </p>

            </div>
        </div>
    );
}

export default SinglePost;