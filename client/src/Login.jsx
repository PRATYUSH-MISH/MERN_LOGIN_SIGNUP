import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" action="POST">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={submit}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                       Not Registered Yet click on <Link to="/signup">Signup Page</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;



// <div className="login">

//     <h1>Login</h1>

//     <form action="POST">
//         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
//         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//         <input type="submit" onClick={submit} />

//     </form>

//     <br />
//     <p>OR</p>
//     <br />

// <Link to="/signup">Signup Page</Link>

// </div>