import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsGoogle,
  BsLinkedin,
} from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlinePrinter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: 'rgb(6,57,112)'}} className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-white" >
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset text-white">
            <BsFacebook />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <BsTwitter />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <BsGoogle />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <BsInstagram />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <BsLinkedin />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <BsGithub />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Your Store</h6>
              <p className="text-white">
                Experience hassle-free shopping at its best with Your Store - Your
                trusted destination for all your online retail needs, providing
                conveniece, variety and unbeatable deals!
              </p>
            </MDBCol>
            {/* 
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Categories</h6>
              <p>
                <a href="#!" className="text-reset text-white">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">
                  Jewellery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-white">
                  Men's Clothing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">
                  Women's Clothing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <p className="text-white">
                <AiOutlineHome className="me-2 text-white" />
                Lorem Ipsum, LI 10012, World
              </p>
              <p  className="text-white">
                <AiOutlineMail className="me-3 text-white" />
                info@yourstore.com
              </p>
              <p  className="text-white">
                <AiOutlinePhone className="me-3 text-white" /> + 011 25252525
              </p>
              <p  className="text-white">
                <AiOutlinePrinter className="me-3- text-white" /> + 011 25252525
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold text-white" href="https://mdbootstrap.com/">
          &nbsp;Your Store
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
