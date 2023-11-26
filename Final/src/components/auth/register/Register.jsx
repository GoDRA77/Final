import React, { Fragment } from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const { setEmail, setPassword, setRepeatPassword, setUsername, setFirstName } = props;
    const navigate = useNavigate(); // Import and use useNavigate

    return (
        <Fragment>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Имя" variant="outlined" placeholder="Введите ваше имя" onChange={(event) => setFirstName(event.target.value)} />
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Username" variant="outlined" placeholder="Введите ваш Username" onChange={(event) => setUsername(event.target.value)} />
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ваш E-mail" onChange={(event) => setEmail(event.target.value)} />
            <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(event) => setPassword(event.target.value)} />
            <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password Verify" variant="outlined" placeholder="Повторите ваш пароль" onChange={(event) => setRepeatPassword(event.target.value)} />
            <Button type='submit' sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Регистрация</Button>
            <Typography variant="body1" fontFamily='Poppins'>У вас есть аккаунт?<span className="incitingText" onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </Fragment>
    );
};

export default Register;
