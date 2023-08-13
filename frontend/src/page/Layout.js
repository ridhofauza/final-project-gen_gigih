/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  className='btn btn-outline-success rounded-pill mx-1 my-2 my-lg-0 px-4'
                  to='/'
                >
                  Live
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='btn btn-outline-secondary rounded-pill mx-1 my-2 my-lg-0 px-4'
                  to='/'
                >
                  Explore
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='btn btn-outline-secondary rounded-pill mx-1 my-2 my-lg-0 px-4'
                  to='/'
                >
                  Official Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
