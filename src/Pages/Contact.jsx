import React from 'react'

const Contact = () => {
  return (
    <div class="container mt-5 mb-5 shadow-lg ">
      <div class="row ">
        <div class="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
          <h2 className="display-6 nam">Let's get in touch</h2>
          <br></br>
          <p>We're open for any suggestion or just to have a chat...</p>
          <div class="d-flex mt-2">
            <i class="bi bi-geo-alt"></i>
            <p class="mt-3">
              Address : Oxygen Bussiness Park , Global Logic Hitachi
            </p>
          </div>
          <div class="d-flex mt-2">
            <i class="bi bi-telephone-forward"></i>
            <p class="mt-4">Phone : 8888888888</p>
          </div>
          <div class="d-flex mt-2">
            <i class="bi bi-envelope"></i>
            <p class="mt-4">Email : contactform@gmail.com</p>
          </div>
          <div class="d-flex mt-2">
            <i class="bi bi-youtube"></i>
            <p class="mt-4">Channel : www.contactform.com/</p>
          </div>
          <h6 className="display-6 nam">Just CARTit</h6>
        </div>
        <div class="col-md-8 p-5 ">
          <h2 className="display-6">Get Connected With Us</h2>
          <form class="row g-3 contactForm mt-4">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                First Name*
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                data-testid="inputfield1"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                data-testid="inputfield2"

                required 
                />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Query
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                data-testid="inputfield3"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Email Id*
              </label>
              <input
                type="email"
                class="form-control"
                id="inputAddress"
                data-testid="inputfield4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-6">
              <label for="inputCity"
              class="form-label">
                Contact Number*
               </label>
              <input
                type="number"
                class="form-control"
                id="inputCity"
                required
              />
            </div>
            <div class="col-12">
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
}

export default Contact