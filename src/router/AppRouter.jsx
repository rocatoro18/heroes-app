import { Navigate, Route, Routes } from 'react-router-dom';
import {HeroesRoutes} from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// APPROUTER SE ENCARGA DE COLOCAR EL COMPONENTE EN PANTALLA COMO
// YO LO NECESITO
export const AppRouter = () => {
    return (
        <>
        <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                        {/*<LoginPage/>*/}
                        <Routes>
                            <Route path="/*" element={<LoginPage/>}/>
                        </Routes>
                    </PublicRoute>}
                />
                {/* Cualquier ruta que no sea el login pasara por este componente */}
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>}/>
                {/*<Route path="login" element={<LoginPage/>}/>*/}
                {/*<Route path="/*" element={<HeroesRoutes/>}></Route>*/}
        </Routes>
        </>
    )
}