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
            <div>
              <img src="dinero.png" alt="" />
            </div>
            <nav>
              <ul className="header__ul">
                <a className="header__ul__a" href="#calculadora">
                  Calculadora
                </a>
                <a className="header__ul__a" href="/sobreNosotros" target="_blank">
                  Sobre nosotros
                </a>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
