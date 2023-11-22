import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const Register = (props) => {
    const {setEmail, setPassword, setRepeatPassword, setUsername, setFirstName} = props
    return (
        <Fragment>
            <Typography variant="h2"  fontFamily='Poppins' textAlign='center' >Регистрация</Typography>
            <Typography variant="body1" marginBottom={3}  fontFamily='Poppins' textAlign='center' >Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Имя" variant="outlined" placeholder="Введите ваще имя" onChange={() => setFirstName(event.target.value)}/>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Username" variant="outlined" placeholder="Введите ващ Username" onChange={() => setUsername(event.target.value)}/>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ващ E-mail" onChange={() => setEmail(event.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ващ пароль" onChange={() => setPassword(event.target.value)}/>
            <TextField type='password'  fullWidth={true} margin='normal' id="outlined-basic" label="Password Verify" variant="outlined" placeholder="Повторите ващ пароль" onChange={() => setRepeatPassword(event.target.value)}/>
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop:2,marginBottom:2,width:'60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1"   fontFamily='Poppins' >У вас есть аккаунт<span className="incitingText">Авторизация</span></Typography>
        </Fragment>
    );
};

export default Register;