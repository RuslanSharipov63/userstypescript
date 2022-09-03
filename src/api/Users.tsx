import { UserAction, IUser } from './../types/users';
/* import axios from 'axios'; */
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RootState } from '../store/store';
import { addAllUsersCreator, addUserActionCreator, deleteUserAction, updateUserCreator, searchAddUserAction } from '../store/reducer';

const _baseURL = 'https://jsonplaceholder.typicode.com/users/';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserAction>


export const FetchUsers = (): ThunkType  => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await fetch(_baseURL)
        const resJson = await response.json();
        dispatch(addAllUsersCreator(resJson))

    }
}

export const FetchAddUser = (counter: number, name: string, username: string): ThunkType => {
    let newUser: IUser = {
        id: counter,
        name: name,
        username: username,
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                ing: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
    return async (dispatch: Dispatch<UserAction>) => {
        await fetch(_baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json charset=UTF-8'
            },
            body: JSON.stringify(newUser)
        })
        dispatch(addUserActionCreator(newUser))
    }
}

export const FetchDeleteUser = (id: number): ThunkType => {
    return async (dispatch: Dispatch<UserAction>) => {
        await fetch(`${_baseURL}${id}`, {
            method: 'DELETE',
        })
        dispatch(deleteUserAction(id))
    }
}

export const FetchUpdateUser = (id: number, name: string, username: string): ThunkType => {

    let updateUser: IUser = {
        id: id,
        name: name,
        username: username,
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "ing": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }

    }

    return async (dispatch: Dispatch<UserAction>) => {
        const response = await fetch(`${_baseURL}${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        await response.json()
        dispatch(updateUserCreator(updateUser))
    }
}  

export const FetchSearchUsers = (searchStr: string): ThunkType  => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await fetch(_baseURL)
        const resJson = await response.json();

        const stateSearch: IUser[] = resJson.filter((item: { name: string; }) => item.name.toLowerCase().includes(searchStr.toLowerCase()))
        dispatch(searchAddUserAction(stateSearch))

    }
}