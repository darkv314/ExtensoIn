import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import { useLocation } from "react-router-dom";
// import "./layout.css";

const login = ["/", "/registro", "/codigo", "/password"];

const links = [
    { text: "Trabajos", url: "/works" },
    { text: "Publicar", url: "/publish" },
    { text: "Unirse", url: "/sign-in" },
    { text: "Registrarse", url: "/log-in" },
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
