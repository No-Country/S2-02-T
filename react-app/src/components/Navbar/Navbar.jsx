import React from "react";
import "./Navbar.css";
import menuImg from "../imgs/menu-hmbgs.svg";

export default class Navbar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <div className="cuadrado"></div>
            <nav>
              <ul className="header__ul">
                <a className="header__ul__a" href="">
                  Calculadora
                </a>
                <a className="header__ul__a" href="">
                  Algo más
                </a>
                <a className="header__ul__a" href="">
                  Sobre mi
                </a>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
