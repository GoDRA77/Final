import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles.js";
import {Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import FlexBetween from "../flex-between/flex.jsx";

import {navMenu} from "../../common/moks/navMenu.jsx";
import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
const SideBarComponent = (props) => {

    const {isNonMobile, drawerWidth, isOpen, SetIsOpen} = props
    const  styles  = useStyles()
    const [active, setActive] = useState('')
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname]);
    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => SetIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper':{
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        }


                    }}
                >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>Новый день</Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => SetIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navMenu.map((element) => {
                                return(
                                    <ListItem onClick={() =>navigate('')}>
                                        <ListItemButton>
                                            <ListItemText>
                                                <Typography>{element.name}</Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                </ListItem>)

                            })}
                        </List>
                    </Box>

                </Drawer>
            )}
        </Box>

    );
};

export default SideBarComponent;