import React, { useContext, useState } from 'react'
import jobsContext from '../../context/jobs/jobsContext';

const AddJob = () => {

    //getting host address from environment variable
    const host = process.env.REACT_APP_HOST

    const [job,setJob] = useState({title:"", description: ""});

    const jobcontext = useContext(jobsContext);
    const {getJobs} = jobcontext;
    
    const onClickHandler = async () => {
            // showAlert();
            const response = await fetch(`${host}/api/jobs/addjob`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify(job)
            });
            getJobs();
            // alertClose("Edited Successfully","success");
    }

    const onChangeHandler = (e)=>{
        setJob({ ...job, [e.target.name]: e.target.value })
    }
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add a Job</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={job.title} aria-describedby="emailHelp" onChange={onChangeHandler} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={job.description} onChange={onChangeHandler} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                {/* <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button type="button" className="btn btn-primary" onClick={onClickHandler} data-bs-dismiss="modal">Add Job</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AddJob
