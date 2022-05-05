import '@testing-library/jest-dom';
import { actionSaveUser } from '../../Redux/Actions/actionUsers';
import { typesUsers } from '../../Redux/Types/typesUsers';


describe('Pruebas Unitarias a los actions de Redux - verificar funcionamiento Actions y su retorno', () => {
    test('Verificando action Login sincronico', () => {
        const email = 'daniellosada17@gmail.com'
        const pass = '123456'
        const login = actionSaveUser({ email, pass })
        expect(login).toEqual({
            type: typesUsers.users,
            payload: {
                email, 
                pass
            }
        })
    })
})