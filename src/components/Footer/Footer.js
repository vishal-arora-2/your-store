import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsFacebook, BsTwitter, BsGithub, BsInstagram, BsGoogle,BsLinkedin  } from 'react-icons/bs';
import {AiOutlineHome , AiOutlineMail, AiOutlinePhone ,AiOutlinePrinter} from 'react-icons/ai'
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
        <BsFacebook/>
        </a>
        <a href='' className='me-4 text-reset'>
        <BsTwitter/>
        </a>
        <a href='' className='me-4 text-reset'>
         <BsGoogle/>
        </a>
        <a href='' className='me-4 text-reset'>
        <BsInstagram/>
        </a>
        <a href='' className='me-4 text-reset'>
         <BsLinkedin/>
        </a>
        <a href='' className='me-4 text-reset'>
          <BsGithub/>
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Laravel
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Electronics
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Jewellery
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
               Men's Clothing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
               Women's Clothing
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <AiOutlineHome className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <AiOutlineMail className="me-3" />
              info@example.com
            </p>
            <p>
              <AiOutlinePhone className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <AiOutlinePrinter className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Cartit.com
      </a>
    </div>
  </MDBFooter>
);
}

export default Footer