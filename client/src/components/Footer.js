import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/footer.css'

export default function Footer() {
    return (
        <>
            <div style={{"height" : "100px"}}></div>
            <div className="footer pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="contact">
                                <span className="title">Contact Us</span>
                                {/* <hr className="p-0 mt-1 mb-1" /> */}
                                <span className='details' >Name : XYZ</span>
                                <span className='details' >Phone : 112233445566</span>
                            </div>
                        </div>
                        {/* <div className="col-2"> <div className="verline m-auto"></div> </div> */}
                        <div className="col-lg-4 col-sm-12">
                            <div className="follow">
                            <span className="title">Quick Links</span>
                            <span><i className="fab fa-instagram"></i><Link to="/" > Instagram</Link></span>
                            <span><i className="fab fa-facebook"></i><Link to="/" > Facebook</Link></span>
                            <span><i className="fab fa-whatsapp"></i><Link to="/" > Whatsapp</Link></span>
                            <span><i className="fab fa-twitter"></i><Link to="/" > Twitter</Link></span>

                            {/* <hr className="p-0 mt-1 mb-1" /> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="follow">
                            <span className="title">Follow Us</span>
                            <span><i class="fas fa-chevron-circle-right"></i><Link to="/" > Dashboard</Link></span>
                            <span><i class="fas fa-chevron-circle-right"></i><Link to="/" > Auction</Link></span>
                            <span><i class="fas fa-chevron-circle-right"></i><Link to="/" > Subscribe</Link></span>
                            <span><i class="fas fa-chevron-circle-right"></i><Link to="/" > About</Link></span>

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