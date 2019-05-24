import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { UserActionTypes } from "./types";
import { userReducer, navbarReducer } from "./reducers";
import { combineReducers } from "redux";
import { User } from "../interfaces/interfaces";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    userState: userReducer,
    navbarState: navbarReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const initialState: AppState = {
    userState: {
        users: [] as User[],
        user: {} as User
    },
    navbarState: {
        tab: 0
    }
}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<AppState, UserActionTypes>)
    )
)