import { useContext } from 'react';
import {AuthContext} from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

// CHILDREN == HIGH ORDER COMPONENT
export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

    // OBTIENE PARAMETROS DE URL, ETC...
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;

    // SE PUEDE USAR USEMEMO O USEEFFECT PARA QUE NO SE LA LLEVE
    // CAMBIANDO DE MANERA CONTINUA
    localStorage.setItem('lastPath',lastPath);

    return (logged) ? children : <Navigate to={"/login"}/>
}