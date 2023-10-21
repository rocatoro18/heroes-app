import { Navigate, Route, Routes } from 'react-router-dom';
import {HeroesRoutes} from '../heroes';
import { LoginPage } from '../auth';

// APPROUTER SE ENCARGA DE COLOCAR EL COMPONENTE EN PANTALLA COMO
// YO LO NECESITO
export const AppRouter = () => {
    return (
        <>
        <Routes>
                <Route path="login" element={<LoginPage/>}></Route>
                {/* Cualquier ruta que no sea el login pasara por este componente */}
                <Route path="/*" element={<HeroesRoutes/>}></Route>
        </Routes>
        </>
    )
}