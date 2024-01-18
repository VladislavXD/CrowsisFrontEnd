import { React, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const [isLoginFormVisivle, setIsLoginFormVisivle] = useState(true);

    const isAuts = useSelector(selectIsAuth);

    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        setError,
        formState: { errors, isValid } } =
        useForm({

            defaultValues: {
                email: 'vladgamer1175@gmail.com',
                password: '12345',
            },

            mode: 'onChange',
        });

    const onSubmit = (value) => {
        dispatch(fetchAuth(value));
    }
    console.log("isAuth", isAuts);






    if (isAuts) {
        return <Navigate to="/" /> 
    }


    return (
        <div>
            
            <a href="" className='headerLogin ' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                <FaUser className='fav_log' />
                <span className='log_text'>Войти</span>
            </a>
            <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" onClick={() => { setIsLoginFormVisivle(true) }} class={`${isLoginFormVisivle ? 'btn btn-primary w-50 mx-4' : 'btn btn-secondary w-50 mx-4'}`}>Авторизация</button>
                            <button type="button" onClick={() => { setIsLoginFormVisivle(false) }} class={`${isLoginFormVisivle ? 'btn btn-secondary w-50 mx-4' : 'btn btn-primary w-50 mx-4'}`}>Регистрация</button>

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                isLoginFormVisivle ?
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-floating mb-3">
                                            <TextField
                                                className='field'
                                                label='Почта'
                                                error={Boolean(errors.email?.message)}
                                                {...register('email', { required: 'Укажите почту' })}
                                                helpersText={errors.email?.message}
                                                fullWidth
                                                type='email'
                                            />

                                        </div>


                                        <div class="form-floating">
                                            <TextField
                                                className='field'
                                                label='Пароль'
                                                {...register('password', { required: 'Укажите пароль' })}
                                                error={Boolean(errors.password?.message)}
                                                helpersText={errors.password?.message}
                                                fullWidth
                                            />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Войти</button>
                                        </div>

                                    </form> :
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input name='fullName' type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput" style={{ opacity: '.7' }}>Имя</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input name='emial' type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput" style={{ opacity: '.7' }}>Почта</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input name='password' type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput" style={{ opacity: '.7' }}>Пароль</label>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary">Зарегестрироваться</button>
                                        </div>
                                    </form>
                            }
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login