function Header() {
  return (
    <header className="navbar navbar-expand sticky-top bg-primary navbar-dark flex-column flex-md-row bd-navbar">
      <a className="navbar-brand mr-0 mr-md-2" href="#">
        ecommerce
      </a>

      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item px-2">
            <a className="nav-link active" href="accueil.html">
              Accueil
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header