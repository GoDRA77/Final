import React from 'react';
import Home from "./components/pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import PrivateRoad from "./components/utils/router/PrivateRoad.jsx";
import AuthRootComponent from "./components/auth/AuthRootComponent.jsx";



const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoad />}>
                    <Route path='/' element={<Home />}/>
                </Route>
                <Route path={'/login'} element={<AuthRootComponent/>}/>
                <Route path={'/register'} element={<AuthRootComponent/>}/>

            </Routes>

        </div>
    );
};

export default App;