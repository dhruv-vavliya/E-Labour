import React from 'react'
import "../CSS/login.css"

export default function Login() {
    return (
        <>
            {/* onSubmit */}

            <div className="container">
                <div className="loginform text-center mt-3 col-sm-12 col-md-6 ">
                    <h2>Login To E-Labour</h2><br />

                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" placeholder='Enter Your Email Address' onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' name="password" onChange={onchange} />
                        </div>
                        <button type="submit" className="lnbtn btn">Login</button>
                    </form>

                </div>
            </div>
        </>
    )
}
