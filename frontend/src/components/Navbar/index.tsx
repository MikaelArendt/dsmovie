import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css'

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href="/">
            <h1>MikaelPlex</h1>
          </a>
          <a href="https://github.com/Mikazer0">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Mikazer0</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
