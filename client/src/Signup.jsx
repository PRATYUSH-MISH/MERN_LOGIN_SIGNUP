import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
            name,   
            email,
                password
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("Wrong details");
        }
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" action="POST">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary">
                            <Link to="/">Login Page</Link>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            onChange={(e) => { setName(e.target.value) }}  />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={submit}>
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;



                            // <div className="login">

                            //     <h1>Signup</h1>

                            //     <form action="POST">
                            //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            //         <input type="submit" onClick={submit} />

                            //     </form>

                            //     <br />
                            //     <p>OR</p>
                            //     <br />

                            //     <Link to="/">Login Page</Link>

                            // </div>