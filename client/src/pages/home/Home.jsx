import React from "react";

import "./home.scss";

import { posts } from "../../data";
import Post from "../../components/post/Post";

const Home = () => {
    return (
        <section
            id="home"
            className="wrapper"
        >
            {posts?.map((post) => (
                <Post
                    post={post}
                    key={post.id}
                />
            ))}
        </section>
    );
};

export default Home;
