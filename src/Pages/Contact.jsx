import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 mb-5 shadow-lg ">
      <div className="row ">
        <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
          <h2 className="display-6 nam">Let's get in touch</h2>
          <br></br>
          <p>We're open for any suggestion or just to have a chat...</p>
          <div className="d-flex mt-2">
            <i className="bi bi-geo-alt"></i>
            <p className="mt-3">
              Address : Oxygen Bussiness Park , Global Logic Hitachi
            </p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-telephone-forward"></i>
            <p className="mt-4">Phone : 8888888888</p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-envelope"></i>
            <p className="mt-4">Email : contactform@gmail.com</p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-youtube"></i>
            <p className="mt-4">Channel : www.contactform.com/</p>
          </div>
          <h6 className="display-6 nam" style={{fontSize:"35px"}}>yourstore</h6>
        </div>
        <div className="col-md-8 p-5 ">
          <h2 className="display-6">Get Connected With Us</h2>
          <form className="row g-3 contactForm mt-4">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                First Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                data-testid="inputfield1"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                data-testid="inputfield2"
                required
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Query
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                data-testid="inputfield3"
                required
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Email Id*
              </label>
              <input
                type="email"
                className="form-control"
                id="inputAddress"
                data-testid="inputfield4"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Contact Number*
              </label>
              <input
                type="number"
                className="form-control"
                id="inputCity"
                required
              />
            </div>
            <div className="col-12">
              <br></br>
              <div className="wrap">
                <button className="buttonn" data-testid="submitbutton">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
