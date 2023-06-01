import React from "react";
import { Link } from "react-router-dom";
import pd from "../assets/pd.png";
import ma from "../assets/ma.png";
import mz from "../assets/mz.png";
import pn from "../assets/pn.png";
import at from "../assets/at.png";
import va from "../assets/va.png";

const About = () => {
  return (
    <div>
      <div>
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-3">About the team</h1>
              <p className="lead text mb-0">
                We are a group of 5 interns and this is our demo project under
                our mentor.
              </p>
              <a href="#team">
                <button
                  className="btn btn-outline-dark mt-3"
                  data-testid="knowmore"
                >
                  Know more
                </button>
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
                data-testid="heropicture"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-3">
        <div className="container py-3">
          <div className="row mb-3">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light" id="team">
                Our team
              </h2>
              <p className="font-italic text-muted"></p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={pd}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  data-testid="avatarpic"
                />
                <h5 className="mb-0">Priyanshu Dabas</h5>
                <span className="small text-uppercase text-muted">
                  Team member
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={ma}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Mohd Amaan</h5>
                <span className="small text-uppercase text-muted">
                  Team member
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={mz}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Mouhimin Zehgeer</h5>
                <span className="small text-uppercase text-muted">
                  Team Member
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={pn}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Pratham Negi</h5>
                <span className="small text-uppercase text-muted">
                  Team member
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={at}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Aryan Tiwari</h5>
                <span className="small text-uppercase text-muted">
                  Team member
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow py-5 px-4">
                <img
                  src={va}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Vishal Arora</h5>
                <span className="small text-uppercase text-muted">Mentor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/50px-React-icon.svg.png"
                alt="react logo"
              />
              <h2 className="font-weight-light">ReactJs</h2>
              <p className="font-italic text-muted mb-4">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components. It is maintained
                by Meta and a community of individual developers and companies.
                React can be used to develop single-page, mobile, or
                server-rendered applications with frameworks like Next.js.
              </p>
              {/* <Link
                to="https://react.dev/"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                Learn More
              </Link> */}
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
