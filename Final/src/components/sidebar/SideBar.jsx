import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles.js";
import {
    Box, colors,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,

} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import FlexBetween from "../flex-between/flex.jsx";


import {navMenu} from "../../common/moks/navMenu.jsx";
import {
    ChevronLeftOutlined,

    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import logo from '../../assets/images/sidebar/logo.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideBarComponent = (props) => {

    const {isNonMobile, drawerWidth, isOpen, SetIsOpen} = props
    const styles = useStyles()
    const [active, setActive] = useState(false)
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
                        '& .MuiDrawer-paper': {
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
                                <Box display='flex' alignItems='center' gap='10px' padding='30px 15px'>
                                    <img src={logo} alt="logo"/>
                                    <Typography
                                        variant='h1'

                                    >Новый день</Typography>
                                </Box>
                                {!isNonMobile ?(
                                    <div></div>
                                ):(<IconButton onClick={() => SetIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined/>
                                </IconButton>)}
                            </FlexBetween>
                        </Box>
                        <List style={{borderBottom: `0.4px grey solid`}}>

                            {navMenu.map((element) => {
                                return (
                                    <div >
                                        <div >

                                        <ListItem key={element.id}>
                                            <ListItemButton onClick={() => navigate(`${element.path}`)}>
                                                <ListItemIcon>
                                                    {element.icon}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <Typography>{element.name}</Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        </div>


                                    </div>
                            )

                            })}

                        </List>
                        <Box style={{display:'flex',flexDirection:'column'}}>

                        <List >
                            <ListItem >
                                <ListItemButton onClick={() => navigate(`/user`)} >
                                    <ListItemIcon>
                                        <AccountCircleIcon/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>User</Typography>
                                    </ListItemText>
                                </ListItemButton>

                            </ListItem>
                            <ListItemButton onClick={() => navigate(`/logout`)}>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>LogOut</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                        </Box>
                    </Box>
                    <List></List>
                </Drawer>
            )}
        </Box>

    );
};

export default SideBarComponent;