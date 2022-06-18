import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <nav>
            <ul className="footer__ul">
              <a className="footer__ul__a" href="">
                Calculadora
              </a>
              <a className="footer__ul__a" href="/sobreNosotros" target="_blank">
                Sobre Nosotros
              </a>
            </ul>
          </nav>
          <div className="copyright-text-container">
            <span>© 2022 No Country Devs - Equipo S2-02-T</span>
          </div>
        </div>
      </footer>
    </>
  );
}
