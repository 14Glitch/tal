import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import { autenticaUser } from 'service/neo';
import { registerUser, autenticaUserMediquo } from 'service/mediquo';

const user = JSON.parse(localStorage.getItem('user'));

export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
  try {
    const data = await registerUser(newUser);
    return { register: data, message: '' };
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const loginNeo = createAsyncThunk('auth/loginNeo', async ({ username, password }, thunkAPI) => {
  try {
    const data = await autenticaUser({ username, password });
    return { user: data };
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const loginMediquo = createAsyncThunk('auth/loginMediquo', async (data, thunkAPI) => {
  try {
    const ret = await autenticaUserMediquo({ code: data.code || '' });
    return { user: data, tk: ret };
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await AuthService.logout();
// });

const initialState = user
  ? { isLoggedIn: true, user, register: null, usermediquo: null, tk: null }
  : { isLoggedIn: false, user: null, register: null, usermediquo: null, tk: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.register = action.payload.register;
    },
    [register.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [loginNeo.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.user?.access ? true : false;
      state.tk = action.payload.user.data;
    },
    [loginNeo.rejected]: (state, action = null) => {
      state.isLoggedIn = false;
      state.user = action;
    },
    [loginMediquo.fulfilled]: (state, action) => {
      state.usermediquo = action.payload.user;
      state.tk = action.payload.tk;
    },
    [loginMediquo.rejected]: (state, action = null) => {
      state.usermediquo = null;
      state.tk = action;
    }
    // [logout.fulfilled]: (state) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  }
});

const { reducer } = authSlice;
export default reducer;
