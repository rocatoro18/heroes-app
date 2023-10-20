import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { LoginPage } from '../auth/pages/LoginPage';

// APPROUTER SE ENCARGA DE COLOCAR EL COMPONENTE EN PANTALLA COMO
// YO LO NECESITO
export const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}></Route>
            <Route path="dc" element={<DcPage/>}></Route>
            <Route path='login' element={<LoginPage/>}></Route>
            <Route path='/' element={<Navigate to={"/marvel"}/>}></Route>
        </Routes>
        </>
    )
}