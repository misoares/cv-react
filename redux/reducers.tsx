
import { UserState, FETCH_USERS, POST_USER, UserActionTypes } from './types';
import { User } from '../models/user';

const initialState: UserState = {
    users: [] as User[],
    user: {} as User
}

export function userReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case POST_USER:
            return {
                users: [action.payload, ...state.users],
                user: action.payload
            }
        default:
            return state
    }
}