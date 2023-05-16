import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import { useLocation } from "react-router-dom";
import { LargeSuitcase, Send } from "iconoir-react";
// import "./layout.css";

const login = ["/", "/registro", "/codigo", "/password"];

const links = [
    { text: "Trabajos", url: "/works", icon: <LargeSuitcase /> },
    { text: "Publicar", url: "/publish", icon: <Send /> },
    { text: "Unirse", url: "/sign-in", border: true },
    { text: "Registrarse", url: "/log-in", border: true },
];

function Layout() {
    const location = useLocation();
    return (
        <main className="App">
            <div className="layout">
                <Navbar
                    links={login.includes(location.pathname) ? [] : links}
                />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;
