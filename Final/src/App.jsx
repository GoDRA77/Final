import React from 'react';
import Home from "./components/pages/Home.jsx";
import './App.css'
import {Route, Routes} from "react-router-dom";


import Log from "./components/log/Log.jsx";
import PrivateRoad from "./components/utils/router/PrivateRoad.jsx";



const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoad />}>
                    <Route path='/' element={<Home />}/>
                </Route>
                <Route path={'login'} element={<Log/>}/>

            </Routes>

        </div>
    );
};

export default App;