"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-space"></div>
      <ul className="nav-links">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/sobre">SOBRE</Link></li>
        <li><Link href="/projetos">PROJETOS</Link></li>
        <li><Link href="/formulario">FORMULÁRIO</Link></li>
        <li><Link href="/parcerias">PARCERIAS</Link></li>
        <li><Link href="/calendly">CALENDÁRIO</Link></li>
      </ul>

      <div className="social-icons">
        <a href="https://www.instagram.com/lab_lita?igsh=a2Y1ZDcxMnh2NWEx" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Projeto-LITA" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
