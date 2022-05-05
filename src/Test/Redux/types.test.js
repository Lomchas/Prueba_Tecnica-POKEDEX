import { typesCards } from "../../Redux/Types/typesCards"
import { typesUsers } from "../../Redux/Types/typesUsers"
import '@testing-library/jest-dom';


describe('Pruebas Unitarias de types Redux - verifica el estado de los types [Manejadores de estado de Redux]', () => {
    test('Prueba a types Users', () => {
        const newType = {
            users: '[type:Users]users',
            login: '[type:login]login',
            logout: '[type:logout]logout',
            register: '[type:register]register'
        }
        expect(typesUsers).toEqual(newType)
    })

    test('Prueba a types Cards', () => {
        const newType = {
            listar: '[Show-Info]listar',
            numPage: '[change-page]numero-pagina',
            SearchingBar: '[SearchingBar]:busqueda'
        }
        expect(typesCards).toEqual(newType)
    })
})