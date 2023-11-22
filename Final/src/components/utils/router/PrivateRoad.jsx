import {Navigate, Outlet} from "react-router-dom";
const PrivateRoad = () => {
    const auth = true
    return (
        auth ? <Outlet/> : <Navigate to="login" />
    );
};

export default PrivateRoad;