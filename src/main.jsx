import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import "./styles/index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayouts from "./layoutes/pages/HomeLayouts.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayouts />} />
                {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
