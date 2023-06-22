import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostSinglepage from "./pages/post-singlepage/PostSinglepage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/post/:id"
                    element={<PostSinglepage />}
                />
            </Routes>
        </>
    );
};

export default App;
