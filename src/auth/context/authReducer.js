import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    
    // NO LLAMAR OTRAS FUNCIONES DENTRO DEL REDUCER
    // LOS REDUCERS ESTAN DESTINADOS A HACER FUNCIONES PURAS
    // QUE NO LLAMAN RECURSOS EXTERNOS, UNICAMENTE TIENEN
    // QUE RESOLVERSE CON EL STATE QUE RECIBEN Y LA ACTION
    // EL PROVIDER PUEDE SERVIR PARA ESO
    
    switch(action.type){
        case types.login:
            return {
                // Desestructuracion del state
                // para reemplazar lo que nos interesa
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
    
}