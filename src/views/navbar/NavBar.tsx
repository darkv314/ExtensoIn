import React, { FC } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { LargeSuitcase } from "iconoir-react";
import { useNavigate } from "react-router";

type NavbarProps = {
  links: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    border?: boolean;
  }[];
  activeLinkIndex?: number;
};

const Navbar: FC<NavbarProps> = ({ links, activeLinkIndex = 0 }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div onClick={() => navigate("/")} className="navbar-logo">
          <img src={logo} width={70}></img>
          IN EXPERTO
        </div>
      </div>
      <ul className="navbar-nav">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a
              href={link.url}
              style={{
                border: link.border ? "solid 1px var(--textColor)" : "none",
                padding: "1em",
                borderRadius: "5px",
              }}
            >
              {link.icon ? link.icon : null}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
