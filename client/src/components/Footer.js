import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/footer.css'

export default function Footer() {
    return (
        <>
            <div style={{"height" : "100px"}}></div>
            <div className="footer pt-3">
                <div className="container text-center text-lg-start">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 mb-3">
                            <div className="contact">
                                <span className="title mb-1">Contact Us</span>
                                <span className='details' >Name : E-Labour Team</span>
                                <span className='details' >Phone : xxxx-xxx-xxx</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-3">
                            <div className="follow">
                            <span className="title mb-1">Follow Us</span>
                            <span><Link to="/" ><i className="fab fa-instagram"></i> Instagram</Link></span>
                            <span><Link to="/" ><i className="fab fa-facebook"></i> Facebook</Link></span>
                            <span><Link to="/" ><i className="fab fa-whatsapp"></i> Whatsapp</Link></span>
                            <span><Link to="/" ><i className="fab fa-twitter"></i> Twitter</Link></span>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-3">
                            <div className="follow">
                            <span className="title mb-1">Quick Links</span>
                            <span><Link to="/dashboard" > <i className="fas fa-chevron-circle-right"></i> Dashboard</Link></span>
                            <span><Link to="/auction" > <i className="fas fa-chevron-circle-right"></i> Auction</Link></span>
                            <span><Link to="/" > <i className="fas fa-chevron-circle-right"></i> Subscribe</Link></span>
                            <span><Link to="/" > <i className="fas fa-chevron-circle-right"></i> About</Link></span>

                            {/* <hr className="p-0 mt-1 mb-1" /> */}
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 text-center  mb-3">
                            © 2022 Copyright: <Link to="/" >elabour.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}