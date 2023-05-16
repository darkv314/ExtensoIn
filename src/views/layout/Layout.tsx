import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import { useLocation } from "react-router-dom";
import { LargeSuitcase, Send } from "iconoir-react";
import "./Layout.css";

const login = ["/sign-in", "/sign-up"];

const links = [
    { text: "Trabajos", url: "/works", icon: <LargeSuitcase /> },
    { text: "Publicar", url: "/publish", icon: <Send /> },
    { text: "Ingresar", url: "/sign-in", border: true },
    { text: "Registrarse", url: "/sign-up", border: true },
];

function Layout() {
    const location = useLocation();
    return (
        <main className="App" style={{overflow: 'hidden'}}>
            <div className="layout" style={{overflow: 'hidden'}}>
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
