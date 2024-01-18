import { React, useState } from 'react'
import { FaUser } from 'react-icons/fa'
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { TextField } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAuth, selectIsAuth } from '../../../../redux/slices/authSlice';
// import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



const Login = () => {
    // const [isLoginFormVisivle, setIsLoginFormVisivle] = useState(true);

    // const isAuts = useSelector(selectIsAuth);

    // const dispatch = useDispatch();
    // const { register,
    //     handleSubmit,
    //     setError,
    //     formState: { errors, isValid } } =
    //     useForm({

    //         defaultValues: {
    //             email: 'vladgamer1175@gmail.com',
    //             password: '12345',
    //         },

    //         mode: 'onChange',
    //     });

    // const onSubmit = (value) => {
    //     dispatch(fetchAuth(value));
    // }
    // console.log("isAuth", isAuts);






    // if (isAuts) {
    //     return <Navigate to="/" /> 
    // }


    return (
        <div>
            
            <NavLink to="/singIn" className='headerLogin '>
                <FaUser className='fav_log' />
                <span className='log_text'>Войти</span>
            </NavLink>
            
        </div>
    )
}

export default Login