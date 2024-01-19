import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async(params)=>{
    const {data} = await axios.post('/auth/login', params);
    return data;
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params)=>{
    const {data} = await axios.post('/auth/register', params);
    return data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchUserMe', async()=>{
    const {data} = await axios.get('/auth/me');
    return data;
})


// Функция для получения значения из localStorage
const getStoredUserName = () => localStorage.getItem('userName');

// Функция для установки значения в localStorage
const setStoredUserName = (userName) => localStorage.setItem('userName', userName);





const initialState = {
    data: null,
    status: 'loading',
    userName: getStoredUserName() || '', // Используем значение из localStorage
};



const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        logout: (state)=>{
            state.data = null;
            localStorage.removeItem('userName'); // Удаляем из localStorage при выходе
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
            setStoredUserName(action.payload); // Сохраняем в localStorage
        },
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading'; 
                state.data = null;
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = 'error';
                state.data = null;
            })

            //
            .addCase(fetchAuthMe.pending, (state) => {
                state.status = 'loading'; 
                state.data = null;
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.status = 'error';
                state.data = null;
            })

            //
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'loading'; 
                state.data = null;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.status = 'error';
                state.data = null;
            });
    }
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const {logout} = authSlice.actions;

export const {setUserName} = authSlice.actions;

export const authReducer = authSlice.reducer;