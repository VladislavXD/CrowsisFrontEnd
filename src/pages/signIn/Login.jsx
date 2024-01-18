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
import { fetchAuth, selectIsAuth, setUserName } from '../../redux/slices/authSlice';
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



const defaultTheme = createTheme();

export default function SignIn() {
    const isAuts = useSelector(selectIsAuth);

    const dispatch = useDispatch();
    const { register, handleSubmit, setError, formState: { errors, isValid } } =
        useForm({

            defaultValues: {
                email: 'vladgamer1175@gmail.com',
                password: '12345',
            },

            mode: 'onChange',
        });


    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));

        if (!data.payload) {
            return alert('Не удалось авторизоваться')
        }
        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
            dispatch(setUserName(data.payload.fullName));

            // console.log(dispatch(setUserName(data.payload.fullName)));
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
                        Вход
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label='Почта'
                                error={Boolean(errors.email?.message)}
                                helpersText={errors.email?.message}
                                {...register('email', { required: 'Укажите почту' })}
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                name="password"
                                label='Пароль'
                                error={Boolean(errors.password?.message)}
                                helpersText={errors.password?.message}
                                {...register('password', { required: 'Укажите пароль' })}
                                fullWidth
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Войти
                            </Button>
                        </form>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Запомнить меня" />

                        <Grid container>
                            <Grid item xs>
                                <Link  variant="body2">
                                    Забыл пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link variant="body2">
                                    <NavLink to='/Register'>
                                        {"Нет аккаунта? Зарегестрируйтесь"}
                                    </NavLink>

                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}