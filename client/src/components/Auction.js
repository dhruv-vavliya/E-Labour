import React, { useEffect, useState } from 'react'
import '../CSS/auction.css'
import NumericInput from 'react-numeric-input';
import { Link, useLocation ,useNavigate } from 'react-router-dom';

export default function Auction() {

    const [bidvalue, setBidvalue] = useState(50);

    const bidChange = val => {
        setBidvalue(val);
    }

    const bidbtn = () => {
        if (bidvalue === null) {
            // error
            console.log("not valid");
        }
        console.log(bidvalue);
    }

    return (
        <>
            <div className="container d-flex col-9">
                        <h1 className="auctionTitle mt-5">Auction</h1>
                        <Link to="/favourite" className="goToFav ms-auto mt-auto">Go to Favourites</Link>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="d-flex flex-md-row flex-column col-7 acard m-auto mb-3">
                        <div className="d-inline-flex flex-md-column flex-row bd-highlight mb-2 mb-md-0 leftbid">
                            <div className="bd-highlight bidTitle">Carpenter</div>
                            <div className="bd-highlight mt-auto mb-auto mb-md-0 ms-auto ms-md-0 mb-0 bidName">John Due</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight mb-md-auto mb-2 pt-1 pb-1 midbid">
                            <div className="bd-highlight m-auto">Starting Price : 50$</div>
                            <div className="bd-highlight m-auto mt-auto mb-auto">Date : 12/12/2022</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight rightbid">
                            <div className="bd-highlight ms-0 ms-md-auto mt-auto mb-auto">
                                <NumericInput snap mobile className="bidValue" value={bidvalue} onChange={bidChange} min={100} type="number" step={50} />
                            </div>
                            <div className="bd-highlight ms-auto mt-auto mb-auto mb-md-0"><button className="bidButton btn-primary" onClick={bidbtn}>Bid</button></div>
                        </div>
                    </div>
                    <div className="d-flex flex-md-row flex-column col-7 acard m-auto mb-3">
                        <div className="d-inline-flex flex-md-column flex-row bd-highlight mb-2 mb-md-0 leftbid">
                            <div className="bd-highlight bidTitle">Carpenter</div>
                            <div className="bd-highlight mt-auto mb-auto mb-md-0 ms-auto ms-md-0 mb-0 bidName">John Due</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight mb-md-auto mb-2 pt-1 pb-1 midbid">
                            <div className="bd-highlight m-auto">Starting Price : 50$</div>
                            <div className="bd-highlight m-auto mt-auto mb-auto">Date : 12/12/2022</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight rightbid">
                            <div className="bd-highlight ms-0 ms-md-auto mt-auto mb-auto">
                                <NumericInput snap mobile className="bidValue" value={bidvalue} onChange={bidChange} min={100} type="number" step={50} />
                            </div>
                            <div className="bd-highlight ms-auto mt-auto mb-auto mb-md-0"><button className="bidButton btn-primary" onClick={bidbtn}>Bid</button></div>
                        </div>
                    </div>
                    <div className="d-flex flex-md-row flex-column col-7 acard m-auto mb-3">
                        <div className="d-inline-flex flex-md-column flex-row bd-highlight mb-2 mb-md-0 leftbid">
                            <div className="bd-highlight bidTitle">Carpenter</div>
                            <div className="bd-highlight mt-auto mb-auto mb-md-0 ms-auto ms-md-0 mb-0 bidName">John Due</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight mb-md-auto mb-2 pt-1 pb-1 midbid">
                            <div className="bd-highlight m-auto">Starting Price : 50$</div>
                            <div className="bd-highlight m-auto mt-auto mb-auto">Date : 12/12/2022</div>
                        </div>
                        <div className="d-inline-flex flex-md-column flex-row ms-md-auto bd-highlight rightbid">
                            <div className="bd-highlight ms-0 ms-md-auto mt-auto mb-auto">
                                <NumericInput snap mobile className="bidValue" value={bidvalue} onChange={bidChange} min={100} type="number" step={50} />
                            </div>
                            <div className="bd-highlight ms-auto mt-auto mb-auto mb-md-0"><button className="bidButton btn-primary" onClick={bidbtn}>Bid</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
