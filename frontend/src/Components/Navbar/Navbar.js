// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isAuthenticated } from '../../utils/auths';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

 const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  
  const anonymousUserNavbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <button class="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="navbar-brand" href="#">BeBrain</a>
      <a class="nav-link active" id="navbarHome" aria-current="page" href="#" data-uri="/">Home</a>
      <a class="nav-link" href="#" data-uri="/login">Login</a>
      <a class="nav-link" href="#" data-uri="/register">Register</a>
      <a class="nav-link" href="#" data-uri="/game">GameOne</a>
    </div>
  </div>
  </nav>

  `;
  
  const navbarAuth = `
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Brainy</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/gameOne">GameOne</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/new">New Page</a>
              </li>                        
            </ul>
          </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth : anonymousUserNavbar;
};


export default Navbar;
