export const Categories = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="fa fa-tachometer"></i> Categories
        </h1>
      </div>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Test</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
