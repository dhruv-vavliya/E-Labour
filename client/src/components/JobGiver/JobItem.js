import React from 'react'

const JobItem = ({ job }) => {
    const jobDate = new Date(job.date);
    const currentDate = new Date();
    let days = parseInt((currentDate.getTime() - jobDate.getTime()) / (1000 * 3600 * 24))+15;
    days = (days === 0 || days < 0) ? 0 : days;
    return (
        <div className="col-lg-3 col-md-6 mb-4 col-12">
            <div className="d-flex jcard">
                <div className="d-inline-flex flex-column left">
                    <span className="jobTitle mb-1">{job.title}</span>
                    <span className="mb-1">{jobDate.toLocaleDateString()}</span>
                    <span className="mb-1">Expiring in {days} Days...</span>
                    <span className={`text-${days === 0 ? "danger" : "success"} fw-bold`}>{days === 0 ? "Expired" : "Active"}</span>
                </div>
                <div className="d-inline-flex flex-column ms-auto right">
                    <span className="ms-auto">
                        <i className="fa fa-user mt-2" style={{ "fontSize": "24px" }}></i>
                        <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                    </span>

                    <button className="acceptbtn btn-primary mt-auto">Expire</button>
                </div>
            </div>
        </div>
    )
}

export default JobItem
