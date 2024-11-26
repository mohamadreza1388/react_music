
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<App />} />*/}
            {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
    </BrowserRouter>
)
