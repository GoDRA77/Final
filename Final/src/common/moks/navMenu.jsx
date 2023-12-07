import {
    HomeOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
} from '@mui/icons-material';

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
        id: 1
    },
    {
        name: 'Создать',
        icon: <AutoGraphOutlined />,
        path: '/contact',
        id: 2
    },
    {
        name: 'O нас',
        icon: <MenuBookOutlined />,
        path: '/about',
        id: 3
    },
    {
        name: 'Настройки',
        icon: <SettingsOutlined />,
        path: '/settings',
        id: 4
    },
]