const Header = () => {
  return (
    <>
      <header class="header_area">
        <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <nav class="classy-navbar" id="essenceNav">
            <a class="nav-brand" href="#">
              Komorebi
            </a>

            <div class="classy-navbar-toggler">
              <span class="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div class="classy-menu">
              <div class="classycloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span>
                  <span class="bottom"></span>
                </div>
              </div>

              <div class="classynav">
                <ul>
                  <li>
                    <a href="#">Tienda</a>
                    <div class="megamenu">
                      <ul class="single-mega cn-col-4">
                        <li class="title">Coleccion para ellas</li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Blouses &amp; Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Rompers</a>
                        </li>
                        <li>
                          <a href="#">Bras &amp; Panties</a>
                        </li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Para ellos</li>
                        <li>
                          <a href="#">T-Shirts</a>
                        </li>
                        <li>
                          <a href="#">Polo</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Unisex</li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                      </ul>
                      <div class="single-mega cn-col-4">
                        <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Portada</a>
                      </li>
                      <li>
                        <a href="#">Tienda</a>
                      </li>
                      <li>
                        <a href="#">Detalles</a>
                      </li>
                      <li>
                        <a href="#">Pagar</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contacto</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="header-meta d-flex clearfix justify-content-end">
            <div class="search-area">
              <form action="#" method="post">
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Buscar..."
                />
                <button type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>

            <div class="favourite-area">
              <a href="#">
                <img src="assets/img/core-img/heart.svg" alt="" />
              </a>
            </div>

            <div class="user-login-info">
              <a href="#">
                <img src="assets/img/core-img/user.svg" alt="" />
              </a>
            </div>

            <div class="cart-area">
              <a href="#" id="essenceCartBtn">
                <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
