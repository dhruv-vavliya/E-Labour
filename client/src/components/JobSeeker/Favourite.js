import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import jobsContext from '../../context/jobs/jobsContext';
import loggedinContext from '../../context/login/loggedinContext';
import '../../CSS/favourite.css'
import FavouriteItem from './FavouriteItem';

export default function Favourite() {
    const loggedincontext = useContext(loggedinContext);
    const jobscontext = useContext(jobsContext);
    const { user } = loggedincontext;
    const { getFav, jobSeeker } = jobscontext;
    const navigate = useNavigate();
    useEffect(() => {
        if (user.role === "jobgiver") {
            navigate('/');
        }
        //load fav items if user id is available
        user.id && getFav();
    }, [user])

    //  useEffect(() => {
    //     const interval = () => {
    //         setInterval(() => {
    //             console.log("getFavourites");
    //     user.id && getFav();

    //         }, 10000);
    //     }
    //     interval();
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])


    return (
        <>
            <h1 className="auctionTitle mt-5">Favourites</h1>

            <div className="container mt-4 favourite">
                <div className="row">
                    {jobSeeker.favourites.map((item) => {
                        const {job,jobgiver,bidValue} = item;
                        return <FavouriteItem key={job._id} job={job} jobgiver={jobgiver} bidValue={bidValue} />
                    })}
                </div>
            </div>
        </>
    )
}
