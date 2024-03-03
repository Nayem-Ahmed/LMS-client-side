import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
const Privetroute = () => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

 

export default Privetroute;