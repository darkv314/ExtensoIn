import React, { FC } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
//import { LargeSuitcase } from "iconoir-react";

type NavbarProps = {
  links: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    border?: boolean;
  }[];
  activeLinkIndex?: number;
};
//@ts-ignore
const Navbar: FC<NavbarProps> = ({ links, activeLinkIndex = 0 }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} width={70}></img>
        </a>
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
