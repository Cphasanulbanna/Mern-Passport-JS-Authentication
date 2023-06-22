import React from "react";

import "./post.scss";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Link
            to={`/post/${post.id}`}
            id="post"
        >
            <span className="title">{post.title}</span>
            <div className="image">
                <img
                    src={post.image}
                    alt="post-image"
                />
            </div>
            <p>{post.description}</p>
            <button>Read More</button>
        </Link>
    );
};

export default Post;
