
import {Link} from "react-router-dom";

const Nav = ()=>{
    return (
        <aside className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <h6 className="sidebar-heading">
                <span>Menu</span>
              </h6>

              <ul className="nav flex-column">
                <li className="nav-item">
                 <Link to={'categories'}><i className="fa fa-tachometer"></i>Categories</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/produits_list.html">
                    <i className="fa fa-pencil-square-o"></i> Produits
                  </a>
                </li>
              </ul>
            </div>
          </aside>
    )
}
export default Nav