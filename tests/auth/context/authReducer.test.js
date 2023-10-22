import { authReducer, types } from '../../../src/auth';


describe('Pruebas en authReducer',()=>{
    test('debe de retornar el estado por defecto',()=>{
        // ESTUDIAR CREACION DE OBJETOS ANONIMOS
        const state = authReducer({logged:false},{});
        expect(state).toEqual({logged: false});
    });

    test('debe de (login) llamar el login autenticar y establecer el user',()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'Roberto',
                id: '18111999'
            }
        }

        const state = authReducer({logged:false},action);

        expect(state).toEqual({
                logged: true,
                user: action.payload
        });

    });

    test('debe de (logout) borrar el name del usuario y logged en false',()=>{
        const state = {
            logged: true,
            user: {id: '18111999',name:'Roberto'}
        }

        const action = {
            type: types.logout,
            //payload: state
        }

        const newState = authReducer(state,action);
        //console.log(newState);

        expect(newState).toEqual({logged:false});

    });

});