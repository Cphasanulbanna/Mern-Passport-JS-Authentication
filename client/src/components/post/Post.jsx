import React from "react";

import "./post.scss";

const Post = ({ post }) => {
    return (
        <div id="post">
            <span className="title">{post.title}</span>
            <div className="image">
                <img
                    src={post.image}
                    alt="post-image"
                />
            </div>
            <p>{post.description}</p>
            <button>Read More</button>
        </div>
    );
};

export default Post;
