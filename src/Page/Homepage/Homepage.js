import { Link } from "react-router-dom";
import "./homepage.css";
import image1 from "../../Image/Image2.png";
import image2 from "../../Image/Image3.png";
import image3 from "../../Image/Image4.png";

const Homepage = () => {
  const user = false;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 Home">
            <nav className="navbar">
              <div className="topcenter">
                <ul className="toplist">
                  <li className="topListItem">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link style={{ textDecoration: "none", color: "inherit" }}>
                      About
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link style={{ textDecoration: "none", color: "inherit" }}>
                      Service
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link style={{ textDecoration: "none", color: "inherit" }}>
                      Contact
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link
                      to="/admindashboard"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us</h1>
            <p1>
              Pick&GO is a package delivery service provider establish in Sri
              Lanka where they provide goods delivery island wide.<br></br>They
              have several operational service centers at all districts and
              number of staff employed vary according to the general capacity of
              business operations.
            </p1>
          </div>
        </div>

        <div className="container-fluid Services">
          <div className="row">
            <div className="col-md-12">
              <h1>Services</h1>
              <div class="col-md-4">
                <img src={image1} alt="images1" />
                <p>Safe and Easy</p>
                <p3>No surge charges and easy to use</p3>
              </div>
              <br></br>
              <div class="col-md-4">
                <img src={image2} alt="images2" />
                <p>Experienced Drivers</p>
                <p3>
                  Our drivers have gone through proper screening <br></br>and
                  training
                </p3>
              </div>
              <br></br>
              <div class="col-md-4">
                <img src={image3} alt="images3" />
                <p>Remote Booking</p>
                <p3>
                  Customer can book a taxi on behalf of <br></br>someone
                </p3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid Contact">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact</h1>
              <h2>Hotline</h2>
              <br></br>
              <br></br>
              <p5>
                General Inquiries<br></br>
                +94117433433
              </p5>
              <br></br>
              <br></br>
              <p6>
                Business Inquiries<br></br>
                +94114507500
              </p6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
