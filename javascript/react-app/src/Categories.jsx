
import PropTypes from 'prop-types'

Categories.propTypes = {
    categories: PropTypes.array
}
function Categories(props) {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 pr-0 mb-3">
        <div className="card-collapsible card">
          <div className="card-header">Table</div>
          <div className="card-body">
            <table className="table">
              <thead className="thead bg-primary text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Libelle</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.categories.map((categorie) => (
                  <tr key={categorie.id}>
                    <th scope="row">{categorie.id}</th>
                    <td>{categorie.libelle}</td>
                    <td>
                      <a>
                        <i className="fa fa-eye"></i>
                      </a>
                      <a>
                        <i className="fa fa-edit"></i>
                      </a>
                      <a>
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
