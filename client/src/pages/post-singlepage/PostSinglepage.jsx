import React from "react";

import "./post-singlepage.scss";

import { posts } from "../../data";

const PostSinglepage = () => {
    const post = posts[2];
    return (
        <div className="post wrapper">
            <div className="image">
                <img
                    src={post.image}
                    alt="post-image"
                />
            </div>
            <h1 className="title">{post.title}</h1>
            <p className="description">{post.description}</p>
            <p className="long-description">{post.long_description}</p>
        </div>
    );
};

export default PostSinglepage;
