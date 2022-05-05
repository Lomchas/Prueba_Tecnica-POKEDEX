import '@testing-library/jest-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import { cardsReducer } from '../../Redux/Reducers/listarReducer';
import { userReducers } from '../../Redux/Reducers/userReducers';
import { typesCards } from '../../Redux/Types/typesCards';
import { typesUsers } from '../../Redux/Types/typesUsers';

describe('Pruebas unitarias a los reducers de redux - verificar manejo de datos enviados', () => {

    //   ------------------------------ users - Reducers --------------------------------//

    test('Reducers de usuarios - Login', () => {

        const initialState = {
            users: []
        }
        const action = {
            type: typesUsers.login,
            payload: {
                email: 'daniellosada17@gmail.com',
                password: '1234567'
            }
        }
        const state = userReducers(initialState, action)
        expect(state).toEqual({ users: [{ email: 'daniellosada17@gmail.com', password: '1234567' }] })
    })

    test('Reducer de usuarios - Logout', () => {
        const initialState = {
            users: []
        }
        const action = {
            type: typesUsers.logout,
            payload: {

            }
        }
        const state = userReducers(initialState, action)
        expect(state).toEqual({})
    })

    test('Activar el default-State del reducer', () => {
        const initialState = {
            users: []
        }
        const action = {
            type: typesUsers.nada
        }
        const state = userReducers(initialState, action)
        expect(state).toEqual(initialState)
    })

    test('Reducer de Registro de usuarios', () => {
        const initialState = {
            users: []
        }

        const action = {
            type: typesUsers.register,
            payload: {
                typeUser: 'USER',
                name: 'daniel losada',
                email: 'daniellosada17@gmail.com',
                password: '123456',
                image: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=200&quality=20'
            }
        }
        const state = userReducers(initialState, action)
        expect(state).toEqual({
            typeUser: 'USER',
            name: 'daniel losada',
            email: 'daniellosada17@gmail.com',
            password: '123456',
            image: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=200&quality=20'
        })
    })


    //   --------------------------- Data Pokemons - Reducers -------------------------------------//

    test('Reducers de Listar Datos', () => {
        const initialState = {
            results: '',
            numPage: 0,
            searchingBar: ''
        }

        const action = {
            type: typesCards.listar,
            payload: {
                name: 'pokemon prueba',
                tipo: 'pokemon de prueba'
            }
        }
        const state = cardsReducer(initialState, action)
        expect(state).toEqual({
            name: 'pokemon prueba',
            tipo: 'pokemon de prueba'
        })
    })
})