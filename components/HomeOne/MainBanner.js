import React from 'react';
import Link from 'next/link';
import FeaturedServices from './FeaturedServices';

const MainBanner = () => {
  return (
    <>
      <div className='main-banner'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container-fluid'>
              <div className='main-banner-content'>
                <h1
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='100'
                >
                  World’s Leading Engineering Company
                </h1>

                <p
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  Crokta Engineering bring a fine print to engineering. ML today
                  are able to supply needful of help, information, and positive
                  experience of maintaining intimacy with customers. Eventually,
                  these qualities into the conversation.
                </p>

                <div
                  className='btn-box'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='300'
                >
                  <Link href='/contact' className='btn btn-primary'>
                    Book a Call
                  </Link>

                  <Link href='/contact' className='optional-btn'>
                    Leave us a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
