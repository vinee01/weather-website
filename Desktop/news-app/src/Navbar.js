import { Route, Routes, Link } from 'react-router-dom';
import App from './App';
import { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <section className="navbar-section">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            VNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">
                General
              </Link>
              <Link className="nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="/:category" element={App} />
        </Routes>
    </section>
    );
    
  }
}

export default Navbar;
