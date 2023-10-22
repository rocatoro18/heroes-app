import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = () => {

        // RECORDAR ULTIMO PATH AL CERRAR SESIÓN
        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Roberto Torres');
        
        navigate(lastPath,{
            // REPLACE EN TRUE PARA REEMPLAZAR EL HISTORIAL, 
            // PARA QUE LA PERSONA NO PUEDA VOLVER AL LOGIN SI YA LO PASO
            replace:true
        });
    }

    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>

        </div>
    )
}