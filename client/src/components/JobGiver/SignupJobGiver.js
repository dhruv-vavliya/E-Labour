import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import alertContext from '../../context/alert/alertContext';
import '../../CSS/signup.css'

export default function SignupJobGiver() {
    //getting host address from environment variable
    const host = process.env.REACT_APP_HOST
    const navigate = useNavigate();

    const alertcontext = useContext(alertContext);
    const {showAlert,alertClose} = alertcontext;

    const [credential, setCredential] = useState({ email: "", fname: "", lname: "", phone: "", address:"", password: ""});
    // const [ischeck, setIscheck] = useState(false);

    const onChangeHandler = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
        // setIscheck(e.target.checked)
    }

    const { email, fname, lname, phone, address, password } = credential;
    
    const handleSubmit = async (e) => {
        showAlert();
        e.preventDefault();
        // if (credential.password !== credential.cpassword) {
        //     // alertClose("Password and Confirm password does not match!", "danger");
        //     return;
        // }
        const response = await fetch(`${host}/api/auth/createjobgiver`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, fname, lname, phone, address, password })
        });
        const json = await response.json();
        if (json.success) {
            //Save authtoken and redirect
            // if (ischeck) document.cookie = json.authtoken;
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('user', "jobgiver");
            alertClose("Account created successfully", "success");
            navigate("/dashboard");
        }
        else {
            alertClose(json.error, "danger");
            console.log(json.error);
        }
    }
    return (
        <>
            <div className="container">
                <div className="signupform text-center mt-3 col-sm-12 col-md-6 ">
                    <h2>Join E-Labour as A Job Giver</h2><br />
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" placeholder='Enter Your Email Address' onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Set Your Password' name="password" onChange={onChangeHandler} />
                        </div>
                        <div className="row mb-3 g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" name="fname" placeholder='First Name' onChange={onChangeHandler} id="fName" aria-describedby="fNameHelp" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" name="lname" placeholder='Last Name' onChange={onChangeHandler} id="lName" aria-describedby="lNameHelp" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="phone" placeholder='Enter Your Mobile Number' onChange={onChangeHandler} id="phone" aria-describedby="phoneHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="address" placeholder='Enter Your Current Address' onChange={onChangeHandler} id="address" aria-describedby="addressHelp" />
                        </div>
                        <button type="button" onClick={handleSubmit} className="snbtn btn btn-primary">SignUp</button>
                    </form>
                </div>
            </div>

        </>
    )
}
