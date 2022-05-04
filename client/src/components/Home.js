import React from 'react'
import "../CSS/home.css"

export default function () {
  return (
    <>
        <div className="container">
            <div className="logincard row p-3">
                
                <div className="sucontent col-md-6 col-sm-12 mt-sm-0 mt-md-5 mb-sm-4 ">
                    <h1 className='sutitle' >Let's Do a Job</h1>
                    Connecting Bridge b/w Jobgiver and Jobseeker.
                </div>

                <div className="suform text-center col-md-6 col-sm-12" > 
                    <div className='suaform' >
                        <h5 className='sutxt' >Sign up</h5><hr style={{ "width":"90%" ,"margin":"13px auto" }} />
                        <button type="button" className="subtn btn btn-primary">As a Job-Giver</button>
                        <button type="button" className="subtn btn btn-primary">As a Job-Seeker</button>
                        
                        <div className="separate" style={{ "margin":"auto" ,"width":"90%" }} >
                            <hr style={{ "display":"inline" ,"width":"43%"}} />
                            <span style={{ "margin":"auto" }} > or </span>
                            <hr style={{ "display":"inline" ,"width":"43%" }} />
                        </div>
                        
                        <button type="button" className="lnbtn btn btn-primary">Login</button>
                    </div>
                    <span className='learn' >Learn More</span>
                </div>

            </div>
        </div>
    </>
  )
}
