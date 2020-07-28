import React from "react";
import Button from "../Button";
// import ButtonLink from "../ButtonLink/";

import logo from "../../assets/img/logo.png";

import "./styles.css";

function Menu() {
  return (
    <nav className='menu'>
      <a href=''>
        <img src={logo} className='logo' alt='GeraldoFlix logo' />
      </a>
      <Button as='a' href='/' className='buttonLink'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
