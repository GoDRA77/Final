import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";

const Log = (props) => {
    const { setPassword, setEmail } = props;
    const navigate = useNavigate();

    return (
        <Fragment>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите ваш E-mail и пароль</Typography>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ваш E-mail" onChange={(event) => setEmail(event.target.value)} />
            <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(event) => setPassword(event.target.value)} />
            <Button type='submit' sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Войти</Button>
            <Typography variant="body1" fontFamily='Poppins'>У вас нет аккаунта<span className="incitingText" onClick={() => navigate('/register')}>Регистрация</span></Typography>
        </Fragment>
    );
};

export default Log;
