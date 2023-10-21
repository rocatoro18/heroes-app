import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/',{
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