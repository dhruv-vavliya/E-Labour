import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import alertContext from "../alert/alertContext";
import LoggedinContext from "./loggedinContext";

const LoggedinState = (props) => {
    //getting host address from environment variable
    const host = process.env.REACT_APP_HOST

    const context = useContext(alertContext);
    const { showAlert, alertClose } = context;

    const [user, setUserState] = useState({ id:'', name: '', email: '',role:'' });

    const [loggedin, setLoggedin] = useState(true);
    //Get all notes
    const getLogin = async () => {
        let token = localStorage.getItem('token');
        let role = localStorage.getItem('user');
        if (!token) 
        {
            setLoggedin(false);
            return;
        }
        const response = await fetch(`${host}/api/auth/getuser/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token,
                'role': role
            }
        });
        const json = await response.json();
        if (!json.success) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setLoggedin(false);
            setUserState({});
            return;
        }
        setLoggedin(true);
        setUserState({ id: json.user._id, name: `${json.user.fname} ${json.user.lname}`, email: json.user.email, role:role });
    }


    return (
        <LoggedinContext.Provider value={{ getLogin, loggedin, setLoggedin, user, setUserState }}>
            {props.children}
        </LoggedinContext.Provider>
    )
}


export default LoggedinState;