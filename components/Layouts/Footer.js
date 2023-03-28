import React, { Component } from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className='footer-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='single-footer-widget'
                data-aos='fade-in'
                data-aos-duration='1200'
                data-aos-delay='100'
              >
                <div className='logo'>
                  <Link href='/'>
                    <img src='/images/white-logo.png' alt='image' />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <ul className='social'>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <i className='flaticon-facebook-letter-logo'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/' target='_blank'>
                      <i className='flaticon-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' target='_blank'>
                      <i className='flaticon-instagram-logo'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/' target='_blank'>
                      <i className='flaticon-youtube-play-button'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='single-footer-widget'
                data-aos='fade-in'
                data-aos-duration='1200'
                data-aos-delay='200'
              >
                <h3>Services</h3>

                <ul className='footer-services-list'>
                  <li>
                    <Link href='/service-details'>Software Engineering</Link>
                  </li>
                  <li>
                    <Link href='/service-details'>IT Consultation</Link>
                  </li>
                  <li>
                    <Link href='/service-details'>Big Data Analysis</Link>
                  </li>
                  <li>
                    <Link href='/service-details'>Machine Learning</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='single-footer-widget'
                data-aos='fade-in'
                data-aos-duration='1200'
                data-aos-delay='300'
              >
                <h3>Quick Links</h3>

                <ul className='quick-links-list'>
                  <li>
                    <Link href='/about-two'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/services'>Services</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='single-footer-widget'
                data-aos='fade-in'
                data-aos-duration='1200'
                data-aos-delay='400'
              >
                <h3>Contacts</h3>

                <ul className='footer-contact-list'>
                  <li>
                    <span>Address:</span>
                    3 Ogundele Avenue <br /> Lagos, Nigeria
                  </li>
                  <li>
                    <span>Email:</span>
                    danielale9291@gmail.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +234 813 1890 341
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <p>
                  Copyright &copy;{currentYear} Bariton. All Rights Reserved{' '}
                  <a href='https://crokta.com' target='_blank'>
                    Crokta
                  </a>
                  .
                </p>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-6'>
                <ul>
                  <li>
                    <Link href='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href='/terms-conditions'>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='circle-map'>
          <img src='/images/circle-map.png' alt='image' />
        </div>

        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
