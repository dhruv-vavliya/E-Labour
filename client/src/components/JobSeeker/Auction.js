import React, { useContext, useEffect, useState } from 'react'
import '../../CSS/auction.css'
import NumericInput from 'react-numeric-input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import jobsContext from '../../context/jobs/jobsContext';
import AuctionItem from './AuctionItem';
import loggedinContext from '../../context/login/loggedinContext';

export default function Auction() {

    const jobscontext = useContext(jobsContext);
    const { auction, getAuction } = jobscontext;

    const loggedincontext = useContext(loggedinContext);
    const { user } = loggedincontext;
    const navigate = useNavigate();

    useEffect(() => {
        getAuction();
    }, [])
    useEffect(() => {
        if (user.role === "jobgiver") {
            navigate('/');
        }
    }, [user])

    // useEffect(() => {
    //     const interval = () => {
    //         setInterval(() => {
    //             console.log("getAuction in auction");
    //             getAuction();
    //         }, 10000);
    //     }
    //     interval();
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])



    return (
        <>
            <div className="container d-flex col-9">
                <h1 className="auctionTitle mt-5">Auction</h1>
                <Link to="/favourite" className="goToFav ms-auto mt-auto">Go to Favourites</Link>
            </div>

            <div className="container mt-4">
                <div className="row">
                    {auction.map((item) => {
                        const { job, jobGiver } = item;
                        return <AuctionItem key={job._id} job={job} jobGiver={jobGiver} />
                    })}
                </div>
            </div>
        </>
    )
}
