import { POST_USER, FETCH_USERS, CHANGE_TAB, NavBarActionTypes } from './types';
import { User, Response } from '../interfaces/interfaces';
import axios from 'axios'
import { Action } from 'redux';
import { AppState } from './store';
import { ThunkAction } from 'redux-thunk';

export const thunkFetchUsersAction = (

): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const response = await axios.get<Response>("https://reqres.in/api/users");
    dispatch(
        {
            type: FETCH_USERS,
            payload: response.data.data
        }
    );
};

export const thunkPostUsersAction = (
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

export const changeTabAction = (
    tab: number
):NavBarActionTypes => {
    return {
        type: CHANGE_TAB,
        payload: tab
    };
}