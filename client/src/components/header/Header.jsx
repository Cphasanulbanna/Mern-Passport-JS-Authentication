import React from "react";

import "./header.scss";

const Header = () => {
    return (
        <header className="wrapper">
            <div className="logo">
                <img
                    src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="logo"
                />
            </div>
            <div className="right">
                <div className="profile">
                    <img
                        src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt="profile"
                    />
                </div>
                <h1>banna</h1>
                <div className="logout-button">Logout</div>
            </div>
        </header>
    );
};

export default Header;
