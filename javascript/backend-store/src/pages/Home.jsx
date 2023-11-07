import homeImage from '../assets/accueil.jpeg'

export const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="fa fa-tachometer"></i> Accueil
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 pr-0 mb-3 home_content_img">
          <img
            src={homeImage}
            alt="meetup-affiche"
            height="800px"
            className="img_accueil"
          />
        </div>
      </div>
    </>
  );
};