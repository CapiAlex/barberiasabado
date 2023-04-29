import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Menu } from "../Menu/Menu"
import { Services } from "../Services/Services"
export function Rutas() {

    return (
        <>
        <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </>
    )
}