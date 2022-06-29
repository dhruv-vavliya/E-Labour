import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import loggedinContext from '../../context/login/loggedinContext'
import '../../CSS/dashboard.css'
import AddJob from './AddJob'
import Jobs from './Jobs'

export default function Dashboard() {

    const loggedincontext = useContext(loggedinContext);
    const {user} = loggedincontext; 
    const navigate = useNavigate();

    useEffect(()=>{
            console.log(user.role);
            if(user.role==="jobseeker")
            {
                navigate('/');
            }
    },[user])
    

    return (
        <> 
        {/* modal */}
        {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button> */}

        <AddJob/>
        <div className="container d-flex">
            <h1 className="dashboardTitle mt-5">Dashboard</h1>
            <button className="addJobbtn btn btn-primary ms-auto mt-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">Add a Job</button>
        </div>

            <div className="container mt-4 dashboard">
                <div className="row">
                    <Jobs/>
                </div>
            </div>
        </>
    )
}
