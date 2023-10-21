import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}></Route>
                <Route path="dc" element={<DcPage/>}></Route>
                <Route path="hero" element={<HeroPage/>}></Route>
                <Route path="search" element={<SearchPage/>}></Route>
                {/* Search, HeroeById */}
                <Route path='/' element={<Navigate to={"/marvel"}/>}></Route>
            </Routes>
            </div>
        </>
    )
}