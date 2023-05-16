import React, { FC } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

type NavbarProps = {
  links: { text: string; url: string }[];
  activeLinkIndex?: number;
};

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
                color: index === activeLinkIndex ? "white" : "gray",
                backgroundColor:
                  index === activeLinkIndex ? "blue" : "transparent",
                border: "solid 1px gray",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
