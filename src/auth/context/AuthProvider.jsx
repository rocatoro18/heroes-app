import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from '../types/types';

/*
const initialState = {
    logged: false,
}
*/

// FUNCION PARA INICIALIZAR EL ESTADO,
// ESTO NO SE DEBE COLOCAR EN EL AUTHREDUCER
// LECTURA LOCAL STORAGE
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // CARGA DE USUARIO EN CASO DE EXISTIR Y SE USA EN EL INITIAL STATE
    // Y CON ESTO YA NO SE OCUPA EL INITIAL STATE, PORQUE EL
    // INIT GUARDAR ESAS PROPIEDADES EN EL USEREDUCER
    return {
        // SI EL USER EXISTE ESTO ESTARA EN TRUE
        logged: !!user,
        user: user,
    }
}

// Provedor de informacion
export const AuthProvider = ({children}) => {
    // SI SE OCUPA MUCHO CONTROL SOBRE UN ESTADO, 
    // ES RECOMENDABLE UTILIZAR EL REDUCER

    // DESESTRUCTURACION DE UN ARREGLO
    const [authState, dispatch] = useReducer(authReducer,{}, init);

    const login = (name = '') => {

        const user = {id:'ABC',name};

        const action = {
            type:types.login,
            payload: user
        }
        // OBJETO QUE ESTOY MANDADO A MI REDUCER O STATE
        // EN EL LOCAL STORAGE SOLO SE PUEDEN GUARDAR STRINGS
        // POR ESO SE HACE EL JSON STRINGIFY
        // ESCRITURA DEL LOCAL STORAGE
        localStorage.setItem('user',JSON.stringify(user));


        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }

    return(
        // EXPONER FUNCION LOGIN Y LOGOUT
        <AuthContext.Provider value={{...authState,login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    );
}