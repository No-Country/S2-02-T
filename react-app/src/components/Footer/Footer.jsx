import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <nav>
            <ul className="footer__ul">
              <a className="footer__ul__a" href="">
                About
              </a>
              <a className="footer__ul__a" href="">
                Features
              </a>
              <a className="footer__ul__a" href="">
                Pricing
              </a>
              <a className="footer__ul__a" href="">
                Careers
              </a>
              <a className="footer__ul__a" href="">
                Help
              </a>
              <a className="footer__ul__a" href="">
                Privacy Policy
              </a>
            </ul>
          </nav>
          <div className="copyright-text-container">
            <span>© 2020 No Country Devs</span>
          </div>
        </div>
      </footer>
    </>
  );
}
