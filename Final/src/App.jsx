import React from 'react';
import Home from "./components/pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import PrivateRoad from "./components/utils/router/PrivateRoad.jsx";
import AuthRootComponent from "./components/auth/AuthRootComponent.jsx";
import {ColorModeContext, useMode} from './theme/Theme.jsx'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout/Layout.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";



function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                     <div className="App" style={{}}>
                   <LayoutComponent>
                         <Routes>
                            <Route element={<PrivateRoad/>}>
                                <Route path="/" element={<Home/>}/>

                            </Route>
                            <Route path="login" element={<AuthRootComponent/>}/>
                            <Route path="create" element={<Contact />}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="register" element={<AuthRootComponent/>}/>
                        </Routes>
                   </LayoutComponent>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;