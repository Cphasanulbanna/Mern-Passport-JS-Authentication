import React from "react";

import "./post-singlepage.scss";

import { posts } from "../../data";
import { useLocation } from "react-router-dom";

const PostSinglepage = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const post = posts.find((post) => post.id.toString() === path);
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
