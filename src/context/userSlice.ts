import type { IState, IUser, IUserLoginResponse, IUserMeResponse, IUserRegisterResponse } from '../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiUrl } from '../constants';
import type { RootState } from '../app/store';

interface IUserState extends IState {
    user?: IUser;
    isLoggedIn: boolean;
    token: string;
}

export interface IUserNew {
    email: string;
    password: string;
    name: string;
}

const initialState: IUserState = {
    user: undefined,
    isLoggedIn: false,
    token: localStorage.getItem('token') || '',
    status: 'idle'
};

export const userRegisterAsync = createAsyncThunk('user/register', async (newUser: IUserNew): Promise<IUserRegisterResponse> => {
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
});

export const userLoginAsync = createAsyncThunk('user/login', async (newUser: IUserNew, thunkAPI): Promise<IUserLoginResponse> => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = (await response.json()) as IUserLoginResponse;
    if (result.successful) {
        setTimeout(() => {
            thunkAPI.dispatch(userMeAsync());
        });
    }

    return result;
});

export const userMeAsync = createAsyncThunk('user/me', async (): Promise<IUserMeResponse> => {
    const response = await fetch(`${apiUrl}/users/me`, {
        headers: { Authorization: localStorage.getItem('token') || '' }
    });
    return await response.json();
});
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = undefined;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterAsync.pending, (state) => {
                state.status = 'loading';
                state.errors = [];
            })
            .addCase(userRegisterAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.successful && action.payload.result) {
                    console.log(action.payload, 'register payload');
                    // localStorage.setItem('token', action.payload.result);
                } else {
                    // show errors
                    if (action.payload.errors) {
                        state.errors = action.payload.errors;
                    } else {
                        state.errors = ['@todo: unknown error'];
                    }
                }
                console.log(action.payload);
            })
            .addCase(userRegisterAsync.rejected, (state) => {
                state.status = 'failed';
                state.errors = ['@todo: unknown error'];
            })

            .addCase(userLoginAsync.pending, (state) => {
                state.status = 'loading';
                state.errors = [];
            })
            .addCase(userLoginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.successful && action.payload.result) {
                    localStorage.setItem('token', action.payload.result);
                } else {
                    // show errors
                    if (action.payload.errors) {
                        state.errors = action.payload.errors;
                    } else {
                        state.errors = ['Make sure the name, email and password fields match the ones used while registering'];
                    }
                }
                console.log(action.payload);
            })
            .addCase(userLoginAsync.rejected, (state) => {
                state.status = 'failed';
                state.errors = ['@todo: Fetch failed'];
            })

            .addCase(userMeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userMeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.successful && action.payload.result) {
                    state.isLoggedIn = true;
                    state.user = action.payload.result;
                }
            })
            .addCase(userMeAsync.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const userIsLoggedIn = (state: RootState) => {
    return state.user.isLoggedIn;
};
export const userGetUser = (state: RootState) => state.user.user;

export const { addUser, logout } = userSlice.actions;

export default userSlice.reducer;
