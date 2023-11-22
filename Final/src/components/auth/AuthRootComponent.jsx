import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Log from "./log/Log.jsx";
import Register from "./register/Register.jsx";
import './StyleAuth.scss'
import {Box} from "@mui/material";
import {instance} from "../utils/axios/Axios.jsx";
const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const location = useLocation()
    const handleSumbit = async (event)  => {
        event.preventDefault()
        console.log(event)
        if (location.pathname === '/login') {
            const userData = {
                "username" : email,
                "password" : password
            }
            const response = await instance.post('/auth/login/', userData)
            console.log(response.data)
        }else{
            const userData = {
                firstname,
                username,
                email,
                password,
                repeatPassword

            }
            const newUser = await instance.post('auth/register/', userData);
            console.log(newUser)
        }
    }

    return (
        <div className='root'>
           <form className="form" onSubmit={handleSumbit}>
               <Box
                   display='flex'
                   justifyContent='center'
                   alignItems='center'
                   flexDirection='column'
                   maxWidth={640}
                   margin='auto'
                   padding={5}
                   borderRadius={5}
                   boxShadow={'5px 5px 10px #ccc'}
               >
                   {location.pathname === '/login'
                       ? <Log setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/register'
                           ? <Register setEmail={setEmail}
                                       setPassword={setPassword}
                                       setRepeatPassword={setRepeatPassword}
                                       setFirstName={setFirstname}
                                       setUsername={setUsername}/>
                           : null}
               </Box>
           </form>
        </div>
    )

};

export default AuthRootComponent;