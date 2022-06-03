import React from "react";
import "./Navbar.css";
import { vaciarRoot } from "./Navbar-functions";
import menuImg from "../imgs/menu-hmbgs.svg";
export default class Navbar extends React.Component{
  constructor () {
    super();
  }
  componentDidMount() {
    const root = window.document.getElementById("root");
    root.querySelector(".header-menu-hmbgs").addEventListener("click", () => {
      const nav = root.querySelector(".header__ul");
      const clasedDelNav = [];

      nav.classList.forEach((clase => {
        clasedDelNav.push(clase == "header__ul--hamburguesa"); 
      }));
      const loTiene= clasedDelNav.includes(true);
      console.log(loTiene, "nose")
      if (loTiene) {
        //No se que tiene react que ejecuta 2 veces las cosas... Buscar razón
        // nav.classList.remove("header__ul--hamburguesa")
      } else {
        nav.classList.add("header__ul--hamburguesa")
      }
    });
  }
  render() {
    
    return (
      <>
        <header className="header">
          <div className="header__container">
            <div className="cuadrado"></div>
            <nav>
              <img src={ menuImg } alt="" className="header__close-menu"/>
              <ul className="header__ul">
                <a className="header__ul__a" href="">About</a>
                <a className="header__ul__a" href="">Services</a>
                <a className="header__ul__a" href="">Blog</a>
                <a className="header__ul__a" href="">Jobs</a>
                <a className="header__ul__a" href="">Contact</a>
              </ul>
            </nav>
            <img className="header-menu-hmbgs" src={ menuImg } alt="Menu" />
          </div>
        </header>
      </>
    );
  }
}
