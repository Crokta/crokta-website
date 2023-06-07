import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState('false');
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id='navbar' className='navbar-area'>
        <div className='main-nav'>
          <div className=''>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/' className='navbar-brand navbar-placeholder'>
                <img
                  src='/images/logo.png'
                  alt='Crokta'
                  style={{ height: 50 }}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={classOne} id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link
                      href='/'
                      className={`nav-link ${currentPath == '/' && 'active'}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/services/'
                      className={`nav-link ${
                        currentPath == '/services/' && 'active'
                      }`}
                    >
                      Services <i className='fas fa-chevron-down'></i>
                    </Link>

                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link
                          href='/services/'
                          className={`nav-link ${
                            currentPath == '/services/' && 'active'
                          }`}
                        >
                          IT Consulting
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/services-two/'
                          className={`nav-link ${
                            currentPath == '/services-two/' && 'active'
                          }`}
                        >
                          Software Development
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/services-three/'
                          className={`nav-link ${
                            currentPath == '/services-three/' && 'active'
                          }`}
                        >
                          Forensic Analysis
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/services-four/'
                          className={`nav-link ${
                            currentPath == '/services-four/' && 'active'
                          }`}
                        >
                          Service Optimization
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/service-details/'
                          className={`nav-link ${
                            currentPath == '/service-details/' && 'active'
                          }`}
                        >
                          Training
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/projects/'
                      className={`nav-link ${
                        currentPath == '/projects/' && 'active'
                      }`}
                    >
                      Projects <i className='fas fa-chevron-down'></i>
                    </Link>

                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link
                          href='/projects/'
                          className={`nav-link ${
                            currentPath == '/projects/' && 'active'
                          }`}
                        >
                          Projects
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/projects-details/'
                          className={`nav-link ${
                            currentPath == '/projects-details/' && 'active'
                          }`}
                        >
                          AgricTech
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/about-two/'
                      className={`nav-link ${
                        currentPath == '/about/' && 'active'
                      }`}
                      // onClick={(e) => e.preventDefault()}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/blog/'
                      className={`nav-link ${
                        currentPath == '/blog/' && 'active'
                      }`}
                    >
                      Resources <i className='fas fa-chevron-down'></i>
                    </Link>

                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link
                          href='/blog/'
                          className={`nav-link ${
                            currentPath == '/blog/' && 'active'
                          }`}
                        >
                          Blogs
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/blog2/'
                          className={`nav-link ${
                            currentPath == '/blog2/' && 'active'
                          }`}
                        >
                          Articles
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/blog-details/'
                          className={`nav-link ${
                            currentPath == '/blog-details/' && 'active'
                          }`}
                        >
                          Crokta in News
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/contact/'
                      className={`nav-link ${
                        currentPath == '/contact/' && 'active'
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* others-options */}
                <div className='others-options'>
                  <div className='option-item'>
                    <i
                      className='search-btn flaticon-search'
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div>

                  <Link href='/contact' className='btn btn-primary'>
                    Book a Call
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? '' : 'search-overlay-active'
        }`}
      >
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>

            <div
              className='search-overlay-close'
              onClick={handleToggleSearchModal}
            >
              <span className='search-overlay-close-line'></span>
              <span className='search-overlay-close-line'></span>
            </div>

            <div className='search-overlay-form'>
              <form>
                <input
                  type='text'
                  className='input-search'
                  placeholder='Search here...'
                />
                <button type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
