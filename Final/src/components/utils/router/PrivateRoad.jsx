import {Navigate, Outlet} from "react-router-dom";
const PrivateRoad = () => {
    const auth = false
    return (
        auth ? <Outlet/> : <Navigate to="login" />
    );
};

export default PrivateRoad;