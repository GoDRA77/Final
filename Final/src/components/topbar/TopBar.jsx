import React, {useContext,} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme/Theme.jsx";
import { ChevronRightOutlined} from "@mui/icons-material";



const TopBarComponent = (props) => {
    const theme = useTheme()
    // const [isOpen, SetIsOpen] = useState(true)
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display='flex' justifyContent='space-between' px="32px" py="24px">
            <Grid>Welcome client</Grid>
            <IconButton onClick={() => props.SetIsOpen(!props.isOpen)}>
                <ChevronRightOutlined/>
            </IconButton>
            <Box display='flex'>
                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton>
                        {theme.palette.mode === 'dark' ? (<LightModeIcon />) : (<DarkModeIcon />)}
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton>
                        <NotificationsNoneIcon />
                    </IconButton>
                </Grid>
                <Grid
                  sx = {{
                      display:'flex' ,
                      backgroundColor: `${colors.primary[600]}` ,
                      borderRadius: '8px'
                  }}

                >
                    <IconButton sx={{'&:hover':{background:'transparent'}}}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase sx={{px:'18px', py:'12px', '&:hover':{background:'transparent'}}} placeholder='Поиск' />
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;