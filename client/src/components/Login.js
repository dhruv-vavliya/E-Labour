import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import alertContext from '../context/alert/alertContext'
import loggedinContext from '../context/login/loggedinContext'
import "../CSS/login.css"

export default function Login() {

    //getting host address from environment variable
    const host = process.env.REACT_APP_HOST
    const navigate = useNavigate();

    const alertcontext = useContext(alertContext);
    const {showAlert,alertClose} = alertcontext;

    const [credential, setCredential] = useState({ email: "", password: "" });
    const [role, setRole] = useState("jobgiver");

    const context = useContext(loggedinContext);
    const { getLogin, user } = context;

    useEffect(() => {
        if (user.role === "jobgiver") {
            navigate('/dashboard');
        }
        else if (user.role === "jobseeker") {
            navigate('/favourite');
        }
    }, [user])

    const onChangeHandler = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const { email, password } = credential;

    const handleSubmit = async (e) => {
        showAlert();
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, role })
        });
        const json = await response.json();
        if (json.success) {
            //Save authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('user', role);
            alertClose("Account created successfully", "success");
            getLogin();

            if (role === "jobseeker")
                navigate("/favourite");
            if (role === "jobgiver")
                navigate("/dashboard");
        }
        else {
            alertClose(json.error, "danger");
            console.log(json.error);
        }
    }

    const roleChangeHandler = (event) => {
        setRole(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ "minHeight": "44.4vh" }}>
                <div className="loginform text-center mt-3 col-sm-12 col-md-6 ">
                    <h2>Login To E-Labour</h2><br />

                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" placeholder='Enter Your Email Address' onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' name="password" onChange={onChangeHandler} />
                        </div>
                        <div className="text-left" style={{ textAlign: "left" }}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="role" id="jobGiver" value="jobgiver" checked={role === "jobgiver"} onChange={roleChangeHandler} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Job Giver
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="role" id="jobSeeker" value="jobseeker" checked={role === "jobseeker"} onChange={roleChangeHandler} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Job Seeker
                                </label>
                            </div>
                        </div>
                        <button type="button" onClick={handleSubmit} className="lnbtn btn btn-primary">Login</button>
                    </form>

                    <Link className="reg" to="/" >New User? Regiser</Link>
                </div>
            </div>
        </>
    )
}
