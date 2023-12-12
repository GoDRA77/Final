import React, {useState} from 'react';
import TopBarComponent from "../topbar/TopBar.jsx";

import {useLocation} from "react-router-dom";
import SideBarComponent from "../sidebar/SideBar.jsx";
import {Box, useMediaQuery} from "@mui/material";


const LayoutComponent = ({children}) => {
    const [isOpen, SetIsOpen] = useState(true)
    const  location = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
        location.pathname === '/login' || location.pathname ==='/register'
            ? (
                <>
                    {children}
                </>
            ) : (
                <>
                   <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%' >

                       <Box>
                           <TopBarComponent
                               isOpen={isOpen}
                               SetIsOpen={SetIsOpen}

                           />
                           <div >
                           < SideBarComponent
                               isNonMobile={isNonMobile}
                               drawerWidth='250'
                               isOpen={isOpen}
                               SetIsOpen={SetIsOpen}
                           />

                           {children}
                           </div>

                       </Box>
                   </Box>
                </>
            )

    )

};

export default LayoutComponent;