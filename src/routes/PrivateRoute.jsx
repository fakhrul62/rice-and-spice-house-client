import { useContext } from "react";
import { AuthContext } from "../AuthFiles/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="py-32 relative flex justify-center items-center"><span className='w-96 absolute '><Lottie animationData={loadingAnimation} loop={true} /></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;