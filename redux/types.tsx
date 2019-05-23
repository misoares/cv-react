import { User } from "../interfaces/interfaces";

export interface UserState {
    users: User[]
    user: User
}

export const FETCH_USERS = 'FETCH_USERS'
export const POST_USER = 'POST_USER'

interface FetchUsersAction {
    type: typeof FETCH_USERS,
    payload: User[]
}

interface PostUserAction {
    type: typeof POST_USER,
    payload: User
}

export type UserActionTypes = FetchUsersAction | PostUserAction