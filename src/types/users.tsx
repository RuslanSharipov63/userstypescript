export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            ing: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }

}
export interface UserState {
    users: IUser[]
}

export enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
    ADD_SEARCH_USER = 'ADD_SEARCH_USER',
    ADD_ALL_USERS = 'ADD_ALL_USERS',
    UPDATE_USER = 'UPDATE_USER',
}


 interface FetchAddAllUser {
    type: UserActionTypes.ADD_ALL_USERS;
    payload: IUser[]
}

interface FetchAddUser {
    type: UserActionTypes.ADD_USER;
    payload: IUser

}

interface FetchDeleteUser {
    type: UserActionTypes.DELETE_USER;
    id: number
}
interface FetchAddSearchUser {
    type: UserActionTypes.ADD_SEARCH_USER;
    payload: IUser[]
}


interface FetchUpdateUser {
    type: UserActionTypes.UPDATE_USER;
    payload: IUser
}

export type UserAction = FetchAddUser | FetchDeleteUser | FetchAddSearchUser | FetchAddAllUser | FetchUpdateUser;
