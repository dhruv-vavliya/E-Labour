import React, { useContext, useState } from 'react'
import NumericInput from 'react-numeric-input';
import jobsContext from '../../context/jobs/jobsContext';

const AuctionItem = ({job,jobGiver}) => {

    const [bidvalue, setBidvalue] = useState(50);

    const jobscontext = useContext(jobsContext);
    const {OnBid} = jobscontext;

    const {title,date} = job;
    const {fname,lname} =jobGiver;
    const d= new Date(date);

    const bidChange = (val) => {
        setBidvalue(val);
    }

    const bidbtn = (id) => {
        if (bidvalue === null) {
            // error
            console.log("not valid");
        }
        //currently if bid exist it will terminate operation
        OnBid(id,bidvalue);
    }


  return (
    <div className="d-flex flex-md-row flex-column col-7 acard m-auto mb-3">
                        <div className="d-inline-flex flex-md-column flex-row bd-highlight mb-2 mb-md-0 leftbid">
                            <div className="bd-highlight bidTitle">{title}</div>
                            <div className="bd-highlight mt-auto mb-auto mb-md-0 ms-auto ms-md-0 mb-0 bidName">{fname} {lname}</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight mb-md-auto mb-2 pt-1 pb-1 midbid">
                            <div className="bd-highlight m-auto">Starting Price : 50$</div>
                            <div className="bd-highlight m-auto mt-auto mb-auto">Date : {d.toLocaleDateString()}</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight rightbid">
                            <div className="bd-highlight ms-0 ms-md-auto mt-auto mb-auto">
                                <NumericInput snap mobile className="bidValue" value={bidvalue} onChange={bidChange} min={100} type="number" step={50} />
                            </div>
                            <div className="bd-highlight ms-auto mt-auto mb-auto mb-md-0"><button className="bidButton btn-primary" onClick={()=>{bidbtn(job._id)}}>Bid</button></div>
                        </div>
                    </div>
  )
}

export default AuctionItem
