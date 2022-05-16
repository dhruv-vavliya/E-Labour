import React, { useEffect, useState } from 'react'
import '../CSS/dashboard.css'

export default function Dashboard() {
    return (
        <> 
        <div className="container d-flex">
            <h1 className="dashboardTitle mt-5">Dashboard</h1>
            <button className="addJobbtn btn btn-primary ms-auto mt-auto">Add a Job</button>
        </div>

            <div className="container mt-4 dashboard">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-danger fw-bold">Expired</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-danger fw-bold">Expired</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 col-12">
                        <div className="d-flex jcard">
                            <div className="d-inline-flex flex-column left">
                                <span className="jobTitle mb-1">Carpenter</span>
                                <span className="mb-1">22/09/2001</span>
                                <span className="mb-1">Expiring in 5 Days...</span>
                                <span className="text-success fw-bold">Active</span>
                            </div>
                            <div className="d-inline-flex flex-column ms-auto right">
                                <span className="ms-auto">
                                    <i className="fa fa-user mt-2" style={{"fontSize":"24px"}}></i>
                                    <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>

                                <button className="acceptbtn btn-primary mt-auto">Expire</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
