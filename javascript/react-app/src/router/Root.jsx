import homeImage from '../assets/accueil.jpeg'
const Root = () => {
  return (
    <>
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
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <h6 className="sidebar-heading">
                <span>Menu</span>
              </h6>

              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="/categories_list.html"
                  >
                    <i className="fa fa-tachometer"></i>Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/produits_list.html">
                    <i className="fa fa-pencil-square-o"></i> Produits
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">
                <i className="fa fa-tachometer"></i> Accueil
              </h1>
            </div>
            <div className="row">
                 <div className="col-lg-12 col-md-12 col-sm-12 pr-0 mb-3 home_content_img">
                    <img src={homeImage} alt="meetup-affiche" height="800px" className="img_accueil"/>
                </div>
          
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Root;
