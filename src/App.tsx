import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Layout from "./views/layout/Layout";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
