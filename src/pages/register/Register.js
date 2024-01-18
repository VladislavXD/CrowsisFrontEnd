import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';



import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchRegister, selectIsAuth, setUserName } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Crowsis
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
    const isAuts = useSelector(selectIsAuth);

    const dispatch = useDispatch();
    const { register, handleSubmit, setError, formState: { errors, isValid } } =
        useForm({
            defaultValues: {
                fullName: '',
                email: '',
                password: '',
            },

            
        });


    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));

        if (!data.payload) {
            return alert('Не удалось Зарегестрироваться')
        }
        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
            dispatch(setUserName(values.fullName));
        }


    }
    console.log("isAuth", isAuts);



    if (isAuts) {
        return <Navigate to="/" />
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <Box  noValidate sx={{ mt: 3 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        autoComplete="given-name"
                                        name="FullName"
                                        required
                                        label='Имя'
                                        error={Boolean(errors.fullName?.message)}
                                        helpersText={errors.fullName?.message}
                                        {...register('fullName', { required: 'Укажите Имя' })}
                                        fullWidth
                                        id="fullName"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        error={Boolean(errors.email?.message)}
                                        helpersText={errors.email?.message}
                                        {...register('email', { required: 'Укажите почту' })}
                                        name="email"
                                        fullWidth
                                        id="email"
                                        label="Почта"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        label='Пароль'
                                        error={Boolean(errors.password?.message)}

                                        helpersText={errors.password?.message}
                                        {...register('password', { required: 'Укажите пароль' })}
                                        fullWidth
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>

                            </Grid>
                            <Button
                            disabled={!isValid}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Зарегестрироваться
                            </Button>
                        </form>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link variant="body2">
                                    <NavLink to='/singIn'>Имеете аккаунт? Войти</NavLink>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}