
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
const Privetroute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};



export default Privetroute;