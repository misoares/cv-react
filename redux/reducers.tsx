
import { UserState, FETCH_USERS, POST_USER, UserActionTypes, NavBarActionTypes, NavBarState, CHANGE_TAB } from './types';
import { User } from '../interfaces/interfaces';

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

const navBarInitialState: NavBarState = {
    tab: 0
}

export function navbarReducer(
    state = navBarInitialState,
    action: NavBarActionTypes
): NavBarState {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload
            }
        default:
            return state
    }
}