import { typesUsers } from "../Types/typesUsers";

const initialState = {
    users: ''
}

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesUsers.users:
            return {
                users: [...state.users, action.payload]
            }
        case typesUsers.login:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case typesUsers.logout:
            return {
                
            }
        case typesUsers.register:
            return {
                type: action.payload.type,
                nombre: action.payload.nombre,
                email: action.payload.email,
                password: action.payload.password,
                image: action.payload.image
            }
        default:
            return state
    }
} 