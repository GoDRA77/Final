import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Log from "./log/Log.jsx";

import Register from "./register/Register.jsx";
import './StyleAuth.scss'
import {Box} from "@mui/material";
import {instance} from "../utils/axios/Axios.jsx";
import {useDispatch} from "react-redux";
import {login} from "../../store/slice/auth/index.jsx";
const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event)  => {
        event.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    "username" : email,
                    "password" : password
                }
                const user = await instance.post('/auth/login/', userData)
                await dispatch(login(user.data))
                navigate('/ ')
            } catch (error) {
                return error
            }


        }else{
            if (password === repeatPassword){
                try {
                    const userData = {
                        firstname,
                        username,
                        email,
                        password,
                        repeatPassword

                    }
                    const newUser = await instance.post('auth/register/', userData);
                    await dispatch(login(newUser.data))
                    navigate('/')
                }catch (error) {
                    return error
                }
            }else{
                throw new  Error('У вас не совпадают пароли')


            }
        }
    }

    return (
        <div className='root'>
           <form className="form" onSubmit={handleSubmit}>
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
                       ? <Log setEmail={setEmail}
                              setPassword={setPassword}/>

                              : location.pathname === '/register'
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