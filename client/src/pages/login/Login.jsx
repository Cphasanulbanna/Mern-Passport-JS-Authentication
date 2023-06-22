import React from "react";

import "./login.scss";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import github from "../../assets/images/github.png";

const Login = () => {
    const googleLogin = () => {
        window.open("http://localhost:5500/auth/google", "_self");
    };
    return (
        <div className="login-container">
            <div className="wrapper">
                <h1>Choose a login method</h1>
                <div className="left">
                    <div
                        onClick={googleLogin}
                        className="login-button"
                    >
                        <div className="logo">
                            <img
                                src={google}
                                alt="google"
                            />
                        </div>
                        <h2>google</h2>
                    </div>
                    <div className="login-button">
                        <div className="logo">
                            <img
                                src={facebook}
                                alt="fb"
                            />
                        </div>
                        <h2>facebook</h2>{" "}
                    </div>
                    <div className="login-button">
                        <div className="logo">
                            <img
                                src={github}
                                alt="github"
                            />
                        </div>
                        <h2>github</h2>{" "}
                    </div>
                </div>
                <div className="middle">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <form action="">
                        <input
                            type="text"
                            placeholder="username"
                            value={""}
                        />
                        <input
                            type="text"
                            placeholder="password"
                            value={""}
                        />
                        <button type="sumbit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
