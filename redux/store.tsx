import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { UserActionTypes, UserState } from "./types";
import { userReducer } from "./reducers";
import { combineReducers } from "redux";
import { User } from "../interfaces/interfaces";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    userState: userReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const initialState: AppState = {
    userState: {
        users: [] as User[],
        user: {} as User
    }
}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<AppState, UserActionTypes>)
    )
)