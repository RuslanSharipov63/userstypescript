
import { UserAction, UserActionTypes, UserState, IUser } from './../types/users';

const initialState: UserState = {
    users: []

}

export const reducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.ADD_ALL_USERS:
            return {
                ...state, users: [...state.users, ...action.payload]
            }
        case UserActionTypes.ADD_USER:
            return {
                ...state, users: [action.payload, ...state.users]
            }
        case UserActionTypes.DELETE_USER:
            return {
                ...state, users: state.users.filter(item => item.id !== action.id)
            }

        case UserActionTypes.ADD_SEARCH_USER:
            return {
                ...state, users: [...action.payload]
            }

        case UserActionTypes.UPDATE_USER:
            return {
                ...state, users: [...state.users.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item;
                    }
                })]
            }

        default:
            return state;
    }
}

export const addUserActionCreator = (user: IUser): UserAction => ({
    type: UserActionTypes.ADD_USER, payload: user
    
})

export const deleteUserAction = (id: number): UserAction => ({
    type: UserActionTypes.DELETE_USER, id
})
export const searchAddUserAction = (payload: IUser[]): UserAction => ({ type: UserActionTypes.ADD_SEARCH_USER, payload
})

export const addAllUsersCreator = (payload: IUser[]): UserAction => ({
    type: UserActionTypes.ADD_ALL_USERS, payload 
})
export const updateUserCreator = (users: IUser): UserAction => ({
    type: UserActionTypes.UPDATE_USER, payload: users
    
}) 