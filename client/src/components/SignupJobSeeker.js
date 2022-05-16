import React from 'react'
import { Link} from 'react-router-dom'
import '../CSS/signup.css'

export default function SignupJobSeeker() {
    return (
        <>
            <div className="container">
                <div className="signupform text-center mt-3 col-sm-12 col-md-6 ">
                    <h2>Join E-Labour as A Job Seeker</h2><br />

                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" placeholder='Enter Your Email Address' onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Set Your Password' name="password" onChange={onchange} />
                        </div>
                        <div className="row mb-3 g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" name="fName" placeholder='First Name' onChange={onchange} id="fName" aria-describedby="fNameHelp" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" name="lName" placeholder='Last Name' onChange={onchange} id="lName" aria-describedby="lNameHelp" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="phone" placeholder='Enter Your Mobile Number' onChange={onchange} id="phone" aria-describedby="phoneHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="address" placeholder='Enter Your Current Address' onChange={onchange} id="address" aria-describedby="addressHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="skill" placeholder='Enter Your Skills' onChange={onchange} id="skill" aria-describedby="skillHelp" />
                        </div>
                        <button type="submit" className="snbtn btn btn-primary"><Link className="snbtnLogin" to='/login'>SignUp</Link></button>
                    </form>
                </div>
            </div>

        </>
    )
}
