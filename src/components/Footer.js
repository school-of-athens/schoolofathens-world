import classicalBuilding from "../assets/images/classical-building.png";

const Footer = () => {

    return (
        <div className="container footer mt-4" style={{scrollSnapAlign: "end"}}>
      <footer className="flex-wrap py-3" style={{borderTop: "medium solid #E2E8F0"}}>
        <div className="row">
          <div className="col-lg-4 col-md-2 col-sm-12 text-center text-md-start" style={{marginBottom: "0.5rem"}}>
            <a href="/">
              <img src={classicalBuilding} style={{width: "30px", height: "30px"}} />
            </a>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-12 text-center" style={{marginBottom: "0.5rem"}}>
            <p className="mb-0 text-muted">The School of Athens</p>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-12" style={{marginBottom: "0.5rem", lineHeight: "2"}}>
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item"><a href="index" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="contact" className="nav-link px-2 text-muted">Contact</a></li>
              <li className="nav-item"><a href="faq" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="about" className="nav-link px-2 text-muted">About</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    );
}

export default Footer;