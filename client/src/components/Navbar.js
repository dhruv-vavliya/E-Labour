import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import alertContext from '../context/alert/alertContext';
import loggedinContext from '../context/login/loggedinContext';
import '../CSS/navbar.css'

function Navbar(props) {
    // const location = useLocation();
    const navigate = useNavigate();
    const location = useLocation();

    const alertcontext = useContext(alertContext);
    const {showAlert,alertClose} = alertcontext;

    const context = useContext(loggedinContext);
    const { getLogin, user, loggedin, setloggedin } = context;
    useEffect(() => {
        getLogin();
        if (!loggedin) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate("/login");
        }
    }, [loggedin])
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid my-1">
                <Link className="navbar-brand" to="/"><img className="elogo" src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                        {!loggedin && <Link className={` nav-link ${location.pathname === "/" ? "active" : ""} `} to="/" >Home</Link>}
                        {user.role === "jobgiver" && <Link className={` nav-link ${location.pathname === "/dashboard" ? "active" : ""} `} to="/dashboard" >Dashboard</Link>}
                        {user.role === "jobseeker" && <Link className={` nav-link ${location.pathname === "/favourite" ? "active" : ""} `} to="/favourite" >Favourites</Link>}
                        {user.role === "jobseeker" && <Link className={` nav-link ${location.pathname === "/auction" ? "active" : ""} `} to="/auction" >Auction</Link>}
                        <Link className='nav-link' to="/" >Subscribe</Link>
                        <Link className='nav-link' to="/" >About</Link>

                        {/* <li className="nav-item">
                            <Link className={` nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={` nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        {!loggedin && <Link className="nav-lnbtn btn btn-primary mx-1" to="/login" role="button">Login <i className="fas fa-sign-in-alt"></i></Link>}
                        {loggedin && <button className="btn btn-primary mx-1" role="button" onClick={logout} ><i className="fas fa-sign-out-alt"></i> Logout </button>}
                        {/* { !loggedin && <Link className="btn btn-primary mx-2" to="/login" role="button">Login <i className="fas fa-sign-in-alt"></i></Link>} */}
                        {/* { !loggedin && <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup <i className="fas fa-user-plus"></i></Link>} */}
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
