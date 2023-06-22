import React from "react";

import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
    return (
        <header className="wrapper">
            <Link
                to="/"
                className="logo"
            >
                HB
            </Link>
            {user ? (
                <div className="right">
                    <div className="profile">
                        <img
                            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                            alt="profile"
                        />
                    </div>
                    <h1>banna</h1>
                    <div className="button">Logout</div>
                </div>
            ) : (
                <Link
                    className="button"
                    to={"/login"}
                >
                    Login
                </Link>
            )}
        </header>
    );
};

export default Header;
