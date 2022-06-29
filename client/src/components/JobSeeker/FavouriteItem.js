import React, { useContext } from 'react'
import jobsContext from '../../context/jobs/jobsContext';

const FavouriteItem = ({ job, jobgiver, bidValue }) => {
    const jobscontext = useContext(jobsContext);
    const {deleteFav} = jobscontext;

    const { title,date } = job;
    const {phone} = jobgiver;
    const d = new Date(date);
    return (
        <div className="col-lg-3 col-md-6 mb-4 col-12">
            <div className="d-flex jcard">
                <div className="d-inline-flex flex-column left">
                    <span className="jobTitle mb-1">{title}</span>
                    <span className="mb-1">{d.toLocaleDateString()}</span>
                    <span className="mb-1">Contact : {phone}</span>
                    <span className="mb-1">Bid Value : {bidValue}</span>
                    <span className="text-success fw-bold">Status : Active</span>
                </div>
                <div className="d-inline-flex flex-column ms-auto right">
                    <span className="ms-auto">
                    <i onClick={()=>{deleteFav(job._id)}} className="fa-solid fa-trash-can"></i>
                    </span>

                    <button className="acceptbtn btn-primary mt-auto">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default FavouriteItem
