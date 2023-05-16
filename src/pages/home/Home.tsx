import Navbar from "../../views/navbar/NavBar";
import "./Home.css";
import { LargeSuitcase } from "iconoir-react";
import { Send } from "iconoir-react";

function Home() {
  const links = [
    { text: "Trabajos", url: "/works", icon: <LargeSuitcase /> },
    { text: "Publicar", url: "/publish", icon: <Send /> },
    { text: "Unirse", url: "/sign-in", border: true },
    { text: "Registrarse", url: "/log-in", border: true },
  ];
  return (
    <>
      <Navbar links={links} activeLinkIndex={0} />
    </>
  );
}

export default Home;
