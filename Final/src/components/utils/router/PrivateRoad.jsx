import {Navigate, Outlet} from "react-router-dom";
//import {useAuth} from "../hook/hook.jsx";
const PrivateRoad = () => {
    const auth = true  //useAuth()
    return (
        auth ? <Outlet/> : <Navigate to="login" />
    );
};

export default PrivateRoad;