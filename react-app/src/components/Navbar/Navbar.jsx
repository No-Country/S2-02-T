import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="cuadrado"></div>
          <nav>
            <ul className="header__ul">
              <a className="header__ul__a" href="">About</a>
              <a className="header__ul__a" href="">Services</a>
              <a className="header__ul__a" href="">Blog</a>
              <a className="header__ul__a" href="">Jobs</a>
              <a className="header__ul__a" href="">Contact</a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
