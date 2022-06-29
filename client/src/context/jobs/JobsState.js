import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import alertContext from "../alert/alertContext";
import loggedinContext from "../login/loggedinContext";
import JobsContext from "./jobsContext";

const JobsState = (props) => {
    //getting host address from environment variable
    const host = process.env.REACT_APP_HOST

    const context = useContext(alertContext);
    const { showAlert, alertClose } = context;

    const loggedincontext = useContext(loggedinContext);
    const {user} = loggedincontext;
    
    const [jobs, setJobs] = useState([]);
    const [jobSeeker, setjobSeeker] = useState({favourites:[]});
    const [auction, setAuction] = useState([]);
    //Get all Jobs
    const getJobs = async () => {
        const response = await fetch(`${host}/api/jobs/fetchalljobs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            // body: JSON.stringify(data)
        });
        const data = await response.json();
        setJobs(data);
    }

    //Get all auction items
    const getAuction = async () => {
        const response = await fetch(`${host}/api/jobs/fetchalljobsauction`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            // body: JSON.stringify(data)
        });
        let data = await response.json();
        // const arr = await Promise.all(
        //     data.map(async (i) => {
        //         const res = await (await fetch(`http://localhost:5000/api/auth/auction/getuser/${i.user}`, {
        //             headers: {
        //                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNmEzNTU0Y2I4MzE3NzlkYzczZTZkIn0sImlhdCI6MTY1NjIzMTUwNn0.iSOHLL2hpSte70hufyusFK6jds6JUK1bjDUKkfY4qiw"
        //             }
        //         }))
                
        //         const json = await res.json();
        //         i["fname"] = await json.user.fname;
        //         i["lname"] = await json.user.lname;
        //         return await i;
        //     })
        //     )
        setAuction(data);
    }

    //Get Favourite Items
    const getFav = async () => {
        const response = await fetch(`${host}/api/jobs/fetchfavjob/${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        let data = await response.json();
        setjobSeeker(data);
    }

    //OnBid
    const OnBid = async(id,bidValue)=>{
        const response = await fetch(`${host}/api/jobs/addfav/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            
            body: JSON.stringify({id : id, bidValue})
        });
    }

    //Delete Fav Job deleteFav
    const deleteFav = async(id)=>{
        const response = await fetch(`${host}/api/jobs/deletefavjob/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({id : id})
        });
        getFav();
    }


    return (
        <JobsContext.Provider value={{ getJobs, jobs, auction, getAuction, OnBid, getFav, jobSeeker, deleteFav }}>
            {props.children}
        </JobsContext.Provider>
    )
}


export default JobsState;