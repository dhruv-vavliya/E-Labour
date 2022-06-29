import React, { useContext, useEffect, useState } from 'react'
import jobsContext from '../../context/jobs/jobsContext';
import JobItem from './JobItem';

const Jobs = () => {
    const jobcontext = useContext(jobsContext);
    const {getJobs,jobs} = jobcontext;
    useEffect(()=>{
        getJobs();
    },[])
  return (
        jobs.map((elem) => {
            return <JobItem key={elem._id} job={elem}/>
        })
  )
}

export default Jobs
