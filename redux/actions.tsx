import { POST_USER, FETCH_USERS } from './types';
import { User } from '../models/user';
import axios from 'axios'
import { Response } from '../models/response'
import { Action } from 'redux';
import { AppState } from './store';
import { ThunkAction } from 'redux-thunk';

export const thunkFetchUsers = (

): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const response = await axios.get<Response>("https://reqres.in/api/users");
    dispatch(
        {
            type: FETCH_USERS,
            payload: response.data.data
        }
    );
};

export const thunkPostUsers = (
    user: User
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    axios.post<User>('https://reqres.in/api/users', user)
        .then((response) => {
            dispatch({
                type: POST_USER,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
}