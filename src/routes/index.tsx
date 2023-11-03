
import ImgMigrate from '~/media/assets/img/migrate.png?jsx';
import ImgTechnology from '~/media/assets/img/technology.png?jsx';
import ImgBackup from '~/media/assets/img/backup.png?jsx';
import ImgCpanel from '~/media/assets/img/cpanel.png?jsx';
import ImgFeatureImg from '~/media/assets/img/feature-img.png?jsx';
import ImgConsultMan from '~/media/assets/img/consult-man.png?jsx';
import ImgStamps from '~/media/assets/img/brands/stamps.png?jsx';
import ImgBlog2 from '~/media/assets/img/blog-2.jpg?jsx';
import ImgBlog1 from '~/media/assets/img/blog-1.jpg?jsx';
import ImgAuthor2 from '~/media/assets/img/author-2.png?jsx';
import ImgBlog3 from '~/media/assets/img/blog-3.jpg?jsx';
import ImgAuthor1 from '~/media/assets/img/author-1.png?jsx';
import ImgAuthor3 from '~/media/assets/img/author-3.png?jsx';
import ImgAuthor4 from '~/media/assets/img/author-4.png?jsx';
import ImgBlog4 from '~/media/assets/img/blog-4.jpg?jsx';
import ImgJoomla from '~/media/assets/img/brands/joomla.png?jsx';
import ImgApp2 from '~/media/assets/img/brands/app-2.png?jsx';
import ImgOsticker from '~/media/assets/img/brands/osticker.png?jsx';
import ImgMobile from '~/media/assets/img/brands/mobile.png?jsx';
import ImgWordpress from '~/media/assets/img/brands/wordpress.png?jsx';
import ImgZencart from '~/media/assets/img/brands/zencart.png?jsx';
import ImgApp3 from '~/media/assets/img/brands/app-3.png?jsx';import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/*mobile menu start*/}
      <div class="mobile-menu position-fixed bg-white deep-shadow">
        <button class="close-menu position-absolute">
          <i class="fa-solid fa-xmark" />
        </button>
        <a href="index.html" class="logo-wrapper">
          <img src="assets/img/logo.png" alt="logo"  class="logo logo-black" />
        </a>
        <a href="index.html" class="logo-wrapper">
          <img
            src="assets/img/logo-white.png"
            alt="logo"
            class="logo logo-white"
          />
        </a>
        <nav class="mobile-menu-wrapper mt-40">
          <ul>
            <li class="has-submenu">
              <a href="javascript:void(0)">Home</a>
              <ul>
                <li>
                  <a href="index.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Web Hosting</h6>
                        <span>Powerful bare metal server</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server-1.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Hosting Services</h6>
                        <span>Flexible virtual machine</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-3.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/laptop.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Game Server</h6>
                        <span>Super fast game server</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-4.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/globe.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Application Hosting</h6>
                        <span>Flexible Application Hosting</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-5.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server-2.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Hosting Solution</h6>
                        <span>Powerful Hosting Solutions</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-6.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server-1.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>
                          Minimal Hosting
                          <span class="badge bg-danger ms-3">New</span>
                        </h6>
                        <span>Minimal Web Hosting</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-7.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/laptop.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Slider Home</h6>
                        <span>Web Hosting Services</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-8.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/globe.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>
                          Dedicated Server
                          <span class="badge bg-danger ms-3">New</span>
                        </h6>
                        <span>Dedicated Server Hosting</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-9.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server-1.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>
                          Hosting Provider
                          <span class="badge bg-danger ms-3">New</span>
                        </h6>
                        <span>Web Hosting Provider</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-10.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/laptop.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>
                          Web Hosting
                          <span class="badge bg-danger ms-3">New</span>
                        </h6>
                        <span>Web Hosting Server</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="index-11.html">
                    <div class="menu-list-wrapper d-flex align-items-center">
                      <img
                        src="assets/img/server.svg"
                        alt="server"
                        class="list-logo"
                      />
                      <div class="menu-list-content-right ms-3">
                        <h6>Promotional Hosting</h6>
                        <span>Web Hosting Server</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="domain.html">Domain</a>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Hosting</a>
              <ul>
                <li>
                  <a href="shared-hosting.html">Shared Hosting</a>
                </li>
                <li>
                  <a href="wp-hosting.html">WordPress Hosting</a>
                </li>
                <li>
                  <a href="vps-hosting.html">VPS Hosting</a>
                </li>
                <li>
                  <a href="dedicated-server.html">Dedicated Server</a>
                </li>
                <li>
                  <a href="reseller-hosting.html">Reseller Hosting</a>
                </li>
                <li>
                  <a href="game-hosting.html">Game Hosting</a>
                </li>
                <li>
                  <a href="cloud-hosting.html">Cloud Hosting</a>
                </li>
                <li>
                  <a href="email-hosting.html">Email Hosting</a>
                </li>
                <li>
                  <a href="black-friday.html">Black Friday</a>
                </li>
              </ul>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Pages</a>
              <ul class="submenu-wrapper">
                <li>
                  <a href="service.html">Services</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <a href="blog-grids.html">Blog Grid</a>
                </li>
                <li>
                  <a href="blog-list.html">Blog List</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="terms.html">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="pricing-2.html">Pricing V2</a>
                </li>
                <li>
                  <a href="affiliate.html">Affiliate</a>
                </li>
                <li>
                  <a href="status.html">Status</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
                <li>
                  <a href="data-center.html">
                    Data Center<span class="badge bg-danger ms-3">New</span>
                  </a>
                </li>
                <li>
                  <a href="compare-pricing.html">
                    Compare<span class="badge bg-danger ms-3">New</span>
                  </a>
                </li>
                <li>
                  <a href="career.html">
                    Career<span class="badge bg-danger ms-3">New</span>
                  </a>
                </li>
                <li>
                  <a href="career-details.html">
                    Career Details<span class="badge bg-danger ms-3">New</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="signup.html">Signup</a>
            </li>
          </ul>
        </nav>
        <div class="contact-info mt-60">
          <h4 class="mb-20">Contact Info</h4>
          <p>Chicago 12, Melborne City, USA</p>
          <p>+88 01682648101</p>
          <p>info@example.com</p>
          <div class="contact-social">
            <a href="#">
              <i class="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i class="fab fa-twitter" />
            </a>
            <a href="#">
              <i class="fab fa-instagram" />
            </a>
            <a href="#">
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      {/*mobile menu end*/}
      {/*offcanvus area start*/}
      <div class="ofcanvus-menu">
        <button class="close-canvus">
          <i class="fa-solid fa-xmark" />
        </button>
        <div class="megamenu">
          <h6 class="mb-20">Recommended Services</h6>
          <div class="row g-3">
            <div class="col-lg-6">
              <a href="shared-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-server" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Shared Web Hosting</h6>
                    <span>Flexible virtual machines</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="email-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-envelope" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Email Hosting</h6>
                    <span>Flexible virtual machines</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="vps-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-box" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">VPS Hosting</h6>
                    <span>Start your host business</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="shared-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-brands fa-windows" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Windows Hosting</h6>
                    <span>Powerful bare metal servers</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="vps-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-cloud" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Cloud Hosting</h6>
                    <span>Powerful bare metal servers</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="vps-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-database" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Dedicated Server Hosting</h6>
                    <span>Keep your date safe</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="wp-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-globe" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Web Hosting</h6>
                    <span>Start hosting your website</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="shared-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-box" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Virtual Private Server</h6>
                    <span>Flexible virtual machine</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="vps-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-globe" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Cloud Hosting</h6>
                    <span>Powerful bare metal servers</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6">
              <a href="shared-hosting.html" class="mg-item">
                <div class="mg-item-wrapper d-flex align-items-center">
                  <span class="icon-wrapper">
                    <i class="fa-solid fa-shield" />
                  </span>
                  <div class="mg-item-content-right ms-2">
                    <h6 class="mb-0">Data Security</h6>
                    <span>Keep your data safe</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <h6 class="mb-20 mt-50">Supported Scripts</h6>
          <div class="row g-3">
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-wordpress" />
                  </span>
                  <h6>WordPress</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-hubspot" />
                  </span>
                  <h6>Hubspot</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-joomla" />
                  </span>
                  <h6>Joomla</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-drupal" />
                  </span>
                  <h6>Drupal</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-wix" />
                  </span>
                  <h6>Wix</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-shopify" />
                  </span>
                  <h6>Shopify</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-magento" />
                  </span>
                  <h6>Magento</h6>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="#">
                <div class="script-icon">
                  <span class="script-icon-wrapper">
                    <i class="fa-brands fa-typo3" />
                  </span>
                  <h6>Typeo3</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*offcanvus area end*/}
      {/*hero section start*/}
      <section class="hero-style-1">
        <div class="hero-area overflow-hidden position-relative zindex-1 bg-primary-gradient pt-110">
          <img
            src="assets/img/shapes/circle.svg"
            alt="circle shape"
            class="circle-shape position-absolute"
          />
          <img
            src="assets/img/shapes/hero-circle-left.png"
            alt="circle"
            class="left-bottom-circle position-absolute"
          />
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="hero1-content-wrap">
                  <div class="review-area">
                    <img
                      srcSet="assets/img/brands/trust-pilot.svg"
                      class="brand-logo"
                      alt="trust pilot"
                    />
                    <img
                      src="assets/img/star-5.svg"
                      alt="star"
                      class="star-rating mt-3 d-block"
                    />
                  </div>
                  <h1 class="display-font mt-4">
                    Fastest <mark class="position-relative">Performance</mark>{" "}
                    Web Hosting.
                  </h1>
                  <p class="lead mt-4">
                    Touch the success! Domain and Secure Web Hosting{" "}
                    <br class="d-none d-sm-inline-block" /> from{" "}
                    <mark class="text-warning">$4.99 per month</mark>
                  </p>
                  <div class="hero-btns mt-5">
                    <a
                      href="pricing.html"
                      class="template-btn primary-btn me-4"
                    >
                      Get Started
                    </a>
                    <a href="service.html" class="template-btn outline-btn">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-right">
                  <img width="702" height="626" srcSet="assets/img/hero-img.png"  alt="hero image" />
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/shapes/hero-right-top.png"
            alt="rectangle shape"
            class="right-top position-absolute"
          />
          <img
            src="assets/img/shapes/hero-right-bottom.svg"
            alt="rectangle shape"
            class="right-bottom position-absolute"
          />
        </div>
        <div class="promo-area light-bg">
          <div class="container">
            <div class="row g-4 justify-content-center">
              <div class="col-lg-4 col-md-6">
                <div class="promo-item bg-white rounded primary-shadow">
                  <div class="promo-top d-flex align-items-center mb-3">
                    <img
                      src="assets/img/clock.png"
                      alt="clock"
                      class="img-fluid"
                    />
                    <h5 class="ms-3 mb-0">Professional Support 24/7</h5>
                  </div>
                  <p class="mb-0">
                    Expert technical support available all day everyday by phone or
                    live chat.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="promo-item bg-white rounded primary-shadow">
                  <div class="promo-top d-flex align-items-center mb-3">
                    <img
                      src="assets/img/perform.png"
                      alt="perform"
                      class="img-fluid"
                    />
                    <h5 class="ms-3 mb-0">Free Site Builder</h5>
                  </div>
                  <p class="mb-0">
                    Moving to eukhost is easy, we'll take care of the migration for
                    you for FREE
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="promo-item bg-white rounded primary-shadow">
                  <div class="promo-top d-flex align-items-center mb-3">
                    <img
                      src="assets/img/30-day.png"
                      alt="30 Day"
                      class="img-fluid"
                    />
                    <h5 class="ms-3 mb-0">30 Day Money Back</h5>
                  </div>
                  <p class="mb-0">
                    Your money back if you change your mind. No quibble, just simple
                    and fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*hero section end*/}
      {/*pricing section*/}
      <section class="pricing-tab-section light-bg pb-120 position-relative zindex-1 overflow-hidden">
        <img
          src="assets/img/shapes/line-red-top.png"
          alt="line shape"
          class="position-absolute right-top d-none d-lg-block"
        />
        <img
          src="assets/img/shapes/line-red.svg"
          alt="line shape"
          class="position-absolute left-bottom"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-heading text-center">
                <h2>We Have Perfect Web Hosting Package for You</h2>
                <div class="tab-switch-btn d-inline-flex align-items-center justify-content-center position-relative mt-4">
                  <span class="monthly fw-bold">Monthly Plan</span>
                  <input
                    type="checkbox"
                    class="switch-input position-absolute"
                  />
                  <span class="toggle-switch-btn rounded-pill position-relative" />
                  <span class="yearly fw-bold">Yearly Plan</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pricing-wrapper position-relative zindex-1">
            <img
              src="assets/img/shapes/frame.svg"
              alt="frame"
              class="position-absolute frame-shape"
            />
            <div class="row g-4 justify-content-center mt-4">
              <div class="col-lg-4 col-md-6">
                <div class="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
                  <h3 class="h5">
                    Premium <br />
                    Web Hosting
                  </h3>
                  <span class="pricing-badge position-absolute rounded">
                    <span class="gradient-txt">Save 40%</span>
                  </span>
                  <span class="pricing-label d-block mt-4">Form only</span>
                  <h4 class="h2 mt-2 monthly-price">
                    $4.25<span>/mo</span>
                  </h4>
                  <h4 class="h2 mt-2 yearly-price">
                    $30<span>/yr</span>
                  </h4>
                  <p class="mt-4">
                    Packed with great features, such as oneclick software
                    installs,24/7 support
                  </p>
                  <ul class="feature-list mt-4">
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-rocket" />
                      </span>
                      10 GB SSD Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-database" />
                      </span>
                      10 MySQL Database
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-globe" />
                      </span>
                      Unlimited Website
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-gears" />
                      </span>
                      cPanel Control Panel
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-briefcase" />
                      </span>
                      Auto Backup &amp; Cloud Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-network-wired" />
                      </span>
                      Free Supersonic CDN
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-window-maximize" />
                      </span>
                      24 Hours Website Migration
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-lock" />
                      </span>
                      Automatic SSL installation
                    </li>
                  </ul>
                  <button class="expand-btn mt-4">
                    <i class="fa-solid fa-angle-down" />
                    Expand Feature
                  </button>
                  <a
                    href="#"
                    class="template-btn secondary-btn w-100 text-center mt-40"
                  >
                    Purchase Plan
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
                  <h3 class="h5">
                    VPS <br />
                    Web Hosting
                  </h3>
                  <span class="popular-badge position-absolute text-center fw-bold">
                    Most Popular
                  </span>
                  <span class="pricing-label d-block mt-4">Form only</span>
                  <h4 class="h2 mt-2 monthly-price">
                    $5.25<span>/mo</span>
                  </h4>
                  <h4 class="h2 mt-2 yearly-price">
                    $35<span>/yr</span>
                  </h4>
                  <p class="mt-4">
                    Packed with great features, such as oneclick software
                    installs,24/7 support
                  </p>
                  <ul class="feature-list mt-4">
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-rocket" />
                      </span>
                      10 GB SSD Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-database" />
                      </span>
                      10 MySQL Database
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-globe" />
                      </span>
                      Unlimited Website
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-gears" />
                      </span>
                      cPanel Control Panel
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-briefcase" />
                      </span>
                      Auto Backup &amp; Cloud Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-network-wired" />
                      </span>
                      Free Supersonic CDN
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-window-maximize" />
                      </span>
                      24 Hours Website Migration
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-lock" />
                      </span>
                      Automatic SSL installation
                    </li>
                  </ul>
                  <button class="expand-btn mt-4">
                    <i class="fa-solid fa-angle-down" />
                    Expand Feature
                  </button>
                  <a
                    href="#"
                    class="template-btn primary-btn w-100 mt-40 text-center"
                  >
                    Purchase Plan
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
                  <h3 class="h5">
                    Manage <br />
                    Dedicated Server
                  </h3>
                  <span class="pricing-badge position-absolute rounded">
                    <span class="gradient-txt">Save 60%</span>
                  </span>
                  <span class="pricing-label d-block mt-4">Form only</span>
                  <h4 class="h2 mt-2 monthly-price">
                    $7.25<span>/mo</span>
                  </h4>
                  <h4 class="h2 mt-2 yearly-price">
                    $46<span>/yr</span>
                  </h4>
                  <p class="mt-4">
                    Packed with great features, such as oneclick software
                    installs,24/7 support
                  </p>
                  <ul class="feature-list mt-4">
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-rocket" />
                      </span>
                      10 GB SSD Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-database" />
                      </span>
                      10 MySQL Database
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-globe" />
                      </span>
                      Unlimited Website
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-gears" />
                      </span>
                      cPanel Control Panel
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-briefcase" />
                      </span>
                      Auto Backup &amp; Cloud Storage
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-network-wired" />
                      </span>
                      Free Supersonic CDN
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-window-maximize" />
                      </span>
                      24 Hours Website Migration
                    </li>
                    <li>
                      <span class="me-2">
                        <i class="fa-solid fa-lock" />
                      </span>
                      Automatic SSL installation
                    </li>
                  </ul>
                  <button class="expand-btn mt-4">
                    <i class="fa-solid fa-angle-down" />
                    Expand Feature
                  </button>
                  <a
                    href="#"
                    class="template-btn secondary-btn w-100 mt-40 text-center"
                  >
                    Purchase Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="money-back-area text-center bg-white rounded-10 mt-4 position-relative zindex-1 overflow-hidden">
            <img
              src="assets/img/shapes/mb-circle-left.png"
              class="position-absolute left-top"
              alt="circle"
            />
            <img
              src="assets/img/shapes/mb-circle-right.png"
              class="position-absolute right-bottom"
              alt="circle"
            />
            <h3>30 day Money-back Guarantee.</h3>
            <p>
              Packed with great features, such as one-click software installs,24/7
              support .
            </p>
            <ul class="money-back_ft-list d-flex align-items-center justify-content-start justify-content-md-center mt-30">
              <li>
                <i class="fa-solid fa-down-left-and-up-right-to-center" />
                <span class="ms-2">Easily Upgrade or Downgrade</span>
              </li>
              <li>
                <i class="fa-solid fa-calendar-check" />
                <span class="ms-2">2 months free if paid yearly</span>
              </li>
              <li>
                <i class="fa-solid fa-clock-rotate-left" />
                <span class="ms-2">Instant prorated refund</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*pricing section end*/}
      {/*migrate hosting start*/}
      <section class="migrate-hosting bg-primary-gradient position-relative zindex-1">
        <img
          src="assets/img/shapes/migrate-shape-1.svg"
          alt="circle"
          class="position-absolute left-bottom soft-light"
        />
        <img
          src="assets/img/shapes/plus-rounded.svg"
          alt="plus"
          class="position-absolute rounded-plus"
        />
        <img
          src="assets/img/shapes/migrate-frame.svg"
          alt="frame"
          class="position-absolute migrate-frame"
        />
        <img
          src="assets/img/shapes/line-wave.svg"
          alt="frame"
          class="position-absolute line-wave soft-light"
        />
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-5 col-lg-6 order-2 order-lg-1">
              <div class="migrate-content">
                <h2 class="mb-4">Migrating from another web hosting?</h2>
                <p class="mb-50">
                  Compare our plans and find the right solution for your company. Or
                  get in touch for a custom solution. Whatever you need, we can
                  tailor your infrastructure and service based on your needs.
                </p>
                <div class="migrate-btns">
                  <a href="pricing.html" class="template-btn primary-btn me-4">
                    Book a Demo
                  </a>
                  <a href="contact.html" class="template-btn outline-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 order-1 order-lg-2">
              <div class="migrate-feature-img mb-5 mb-lg-0">
                <ImgMigrate
                  alt="migrate"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*migrate hosting end*/}
      {/*feature section start*/}
      <section
        class="feature-area pt-120 pb-80"
        data-background="assets/img/bg-shape-1.jpg"
      >
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="feature-left">
                <h2>
                  World Class Best Hosting <br />
                  Feature For You.
                </h2>
                <ImgFeatureImg
                  alt="feature image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feature-right">
                <div class="feature-item d-flex align-items-center bg-white rounded-2 deep-shadow">
                  <div class="promo-top flex-shrink-0">
                    <ImgCpanel
                      alt="capnel"
                      class="img-fluid"
                    />
                  </div>
                  <div class="promo-right ms-4">
                    <h4>cPanel Control Panel</h4>
                    <p class="mb-0">
                      We strive to provide top rare reliability and affordability
                      that most shared hosting will bring quality.
                    </p>
                  </div>
                </div>
                <div class="feature-item d-flex align-items-center bg-white rounded-2 deep-shadow">
                  <div class="promo-top flex-shrink-0">
                    <ImgBackup
                      alt="backup"
                      class="img-fluid"
                    />
                  </div>
                  <div class="promo-right ms-4">
                    <h4>Daily Offsite Backups</h4>
                    <p class="mb-0">
                      We strive to provide top rare reliability and affordability
                      that most shared hosting will bring quality.
                    </p>
                  </div>
                </div>
                <div class="feature-item d-flex align-items-center bg-white rounded-2 deep-shadow">
                  <div class="promo-top flex-shrink-0">
                    <ImgTechnology
                      alt="technology"
                      class="img-fluid"
                    />
                  </div>
                  <div class="promo-right ms-4">
                    <h4>Latest Technology</h4>
                    <p class="mb-0">
                      We strive to provide top rare reliability and affordability
                      that most shared hosting will bring quality.
                    </p>
                  </div>
                </div>
                <div class="feature-bottom mt-5">
                  <img
                    src="assets/img/shapes/arrow.svg"
                    class="img-fluid"
                    alt="arrow"
                  />
                  <a href="features.html" class="template-btn primary-btn ms-3">
                    More Featured
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*feature section end*/}
      {/*consult section start*/}
      <section
        class="consult-area position-relative zindex-1 overflow-hidden"
        data-background="assets/img/consult-bg.png"
      >
        <img
          src="assets/img/shapes/section-curve.png"
          alt="curve"
          class="position-absolute curve w-100"
        />
        <div class="consult-overlay bg-secondary-gradient pt-120">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-7 col-xl-6">
                <div class="consult-left">
                  <h2>Reason For Choosing Our Strike Hosting Consultancy.</h2>
                  <ul class="consult-list mt-5">
                    <li class="d-flex">
                      <span class="icon-box position-relative d-inline-flex align-items-center justify-content-center rounded-circle">
                        <i class="fa-solid fa-check" />
                      </span>
                      <div class="list-content ms-4">
                        <h4 class="mb-3 mt-1">15+ Years Web Hosting Company</h4>
                        <p>
                          Traditional WordPress, you get all the features, tools,
                          and guidance you need to build and launch.
                        </p>
                      </div>
                    </li>
                    <li class="d-flex">
                      <span class="icon-box position-relative d-inline-flex align-items-center justify-content-center rounded-circle">
                        <i class="fa-solid fa-check" />
                      </span>
                      <div class="list-content ms-4">
                        <h4 class="mb-3 mt-1">Safe and Secured</h4>
                        <p>
                          Worried you won't get help when you most need it? You
                          shouldn't be. Our professional and hands-on support
                        </p>
                      </div>
                    </li>
                    <li class="d-flex">
                      <span class="icon-box position-relative d-inline-flex align-items-center justify-content-center rounded-circle">
                        <i class="fa-solid fa-check" />
                      </span>
                      <div class="list-content ms-4">
                        <h4 class="mb-3 mt-1">24/7 Technical Support</h4>
                        <p>
                          Don't just take our word for it. We're the web hosting
                          provider of choice for thousands of happy customers.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-5 align-self-end">
                <div class="consult-right">
                  <ImgConsultMan
                    alt="man"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*consult section end*/}
      {/*domain search*/}
      <section class="domain-area light-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="domain-search-box bg-white position-relative zindex-2 primary-shadow rounded-10">
                <div class="row justify-content-center">
                  <div class="col-xl-7 col-lg-10">
                    <h2 class="h3 text-center">
                      Looking for a Perfect Domain Name?
                    </h2>
                    <form
                      action="#"
                      class="mt-4 domain-search-form position-relative d-flex align-items-center justify-content-between"
                    >
                      <input type="text" placeholder="Search Domain Name" />
                      <select class="form-select flex-shrink-0">
                        <option value={1}>.com</option>
                        <option value={1}>.info</option>
                        <option value={1}>.org</option>
                        <option value={1}>.biz</option>
                        <option value={1}>.xyz</option>
                      </select>
                      <button
                        type="submit"
                        class="template-btn primary-btn btn-small flex-shrink-0 border-0"
                      >
                        Search Now
                      </button>
                    </form>
                    <div class="domain-info mt-4 d-flex justify-content-center align-items-center">
                      <div class="info-box rounded-3 text-center">
                        <h5 class="primary-text mb-0">.com</h5>
                        <span>$2.44/Year</span>
                      </div>
                      <div class="info-box rounded-3 text-center">
                        <h5 class="danger-text mb-0">.info</h5>
                        <span>$3.44/Year</span>
                      </div>
                      <div class="info-box rounded-3 text-center">
                        <h5 class="success-text mb-0">.org</h5>
                        <span>$2.55/Year</span>
                      </div>
                      <div class="info-box rounded-3 text-center">
                        <h5 class="blue-text mb-0">.biz</h5>
                        <span>$1.90/Year</span>
                      </div>
                      <div class="info-box rounded-3 text-center">
                        <h5 class="info-text mb-0">.xyz</h5>
                        <span>$0.99/Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*domain search end*/}
      {/*services section start*/}
      <section class="service-section light-bg pt-120 pb-120 overflow-hidden position-relative zindex-1">
        <img
          src="assets/img/shapes/service-shape.png"
          alt="not found"
          class="position-absolute right-bottom"
        />
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-5 col-lg-6">
              <div class="section-title text-center text-lg-start">
                <h2>We Provide you World Hosting Services.</h2>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="explore-btn text-center text-lg-end mt-3 mt-lg-0">
                <a href="service.html" class="template-btn primary-btn">
                  All Service
                  <span>
                    <svg
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.24451 0.234639C8.39471 0.0844779 8.59841 0.00012207 8.8108 0.00012207C9.02319 0.00012207 9.22689 0.0844779 9.3771 0.234639L12.581 3.43857C12.7312 3.58877 12.8155 3.79247 12.8155 4.00486C12.8155 4.21725 12.7312 4.42095 12.581 4.57116L9.3771 7.77508C9.22603 7.92099 9.0237 8.00172 8.81368 7.9999C8.60367 7.99807 8.40277 7.91383 8.25426 7.76533C8.10576 7.61682 8.02152 7.41592 8.01969 7.20591C8.01787 6.99589 8.0986 6.79356 8.24451 6.64249L10.0812 4.80584H0.800982C0.588548 4.80584 0.384815 4.72145 0.234602 4.57124C0.0843889 4.42103 0 4.21729 0 4.00486C0 3.79243 0.0843889 3.58869 0.234602 3.43848C0.384815 3.28827 0.588548 3.20388 0.800982 3.20388H10.0812L8.24451 1.36723C8.09435 1.21702 8.00999 1.01332 8.00999 0.800933C8.00999 0.588541 8.09435 0.384845 8.24451 0.234639Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="services-bottom mt-40">
            <div class="row g-4 justify-content-center">
              <div class="col-lg-4 col-md-6">
                <div class="service-card bg-white deep-shadow rounded-2">
                  <div class="icon-wrapper">
                    <img
                      src="assets/img/wp-hosting.png"
                      alt="hosting"
                      class="img-fluid"
                    />
                  </div>
                  <div class="card-content">
                    <a href="wp-hosting.html">
                      <h3 class="h4 mb-4">WordPress Hosting</h3>
                    </a>
                    <p class="mb-4">
                      Seamlessly transform dynamic testing my procedures rather than
                      distributed process Compellingly myocardinate cost.
                    </p>
                    <a href="wp-hosting.html">
                      Starting at:$1.99/mo
                      <i class="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="service-card bg-white deep-shadow rounded-2">
                  <div class="icon-wrapper">
                    <img
                      src="assets/img/shared-hosting.png"
                      alt="hosting"
                      class="img-fluid"
                    />
                  </div>
                  <div class="card-content">
                    <a href="shared-hosting.html">
                      <h3 class="h4 mb-4">Shared Hosting</h3>
                    </a>
                    <p class="mb-4">
                      Collaboratively harness timely collaboration and idea-sharing
                      after collaborative services. maximizing Best service.
                    </p>
                    <a href="shared-hosting.html">
                      Starting at:$1.99/mo
                      <i class="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="service-card bg-white deep-shadow rounded-2">
                  <div class="icon-wrapper">
                    <img
                      src="assets/img/vps-hosting.png"
                      alt="hosting"
                      class="img-fluid"
                    />
                  </div>
                  <div class="card-content">
                    <a href="vps-hosting.html">
                      <h3 class="h4 mb-4">VPS Hosting</h3>
                    </a>
                    <p class="mb-4">
                      Seamlessly transform dynamic testing my procedures rather than
                      distributed process Compellingly myocardinate cost.
                    </p>
                    <a href="vps-hosting.html">
                      Starting at:$1.99/mo
                      <i class="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service-rating mt-4">
            <div class="row g-4 justify-content-center">
              <div class="col-lg-4 col-md-6">
                <div class="service-rating-box deep-shadow bg-white rounded-2 d-flex align-items-center justify-content-between">
                  <div class="box-left">
                    <img
                      src="assets/img/brands/google.png"
                      alt="google"
                      class="img-fluid d-block"
                    />
                    <img
                      src="assets/img/star-yellow.svg"
                      alt="rating"
                      class="img-fluid d-block mt-3"
                    />
                  </div>
                  <div class="box-right position-relative">
                    <h5 class="mb-0 h3">4.5/5</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="service-rating-box deep-shadow bg-white rounded-2 d-flex align-items-center justify-content-between">
                  <div class="box-left">
                    <img
                      src="assets/img/brands/trust-pilot-logo-black.png"
                      alt="google"
                      class="img-fluid d-block"
                    />
                    <img
                      src="assets/img/five-star.svg"
                      alt="rating"
                      class="img-fluid d-block mt-3"
                    />
                  </div>
                  <div class="box-right position-relative">
                    <h5 class="mb-0 h3">4.5/5</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="service-rating-box deep-shadow bg-white rounded-2 d-flex align-items-center justify-content-between">
                  <div class="box-left">
                    <img
                      src="assets/img/brands/google.png"
                      alt="google"
                      class="img-fluid d-block"
                    />
                    <img
                      src="assets/img/star-yellow.svg"
                      alt="rating"
                      class="img-fluid d-block mt-3"
                    />
                  </div>
                  <div class="box-right position-relative">
                    <h5 class="mb-0 h3">4.5/5</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*services section end*/}
      {/*feedback section start*/}
      <section class="feedback-section bg-primary-gradient pt-120 position-relative overflow-hidden">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="feedbackt-top text-center">
                <h2>Hundreds of five-star Ratings. Every day!</h2>
                <p>
                  We truly cannot say enough about the level of customer service
                  that Kinsta provides - it's always a great experience, with very
                  personable and helpful support.
                </p>
              </div>
            </div>
          </div>
          <div class="feedback-wrapper mt-30">
            <div class="row g-4 feedback-massonry">
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-1.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Floyd Miles</h5>
                      <img
                        src="assets/img/two-star.svg"
                        alt="3 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-2.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Herman Parks</h5>
                      <img
                        src="assets/img/three-star.svg"
                        alt="2 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "We unexpectedly lost login access problem ourselves. and
                    efficiency despite made it difficult to communicate details such
                    as IP addresses.”
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-3.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Darrel Steward</h5>
                      <img
                        src="assets/img/five-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    Appropriately target maintainable quality vectors via ethical
                    benefitsIntrinsiclyectors via ethical benefitsIntrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empo meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-4.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Albert Flores</h5>
                      <img
                        src="assets/img/two-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-5.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Leslie Alexander</h5>
                      <img
                        src="assets/img/three-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-6.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Herman Parks</h5>
                      <img
                        src="assets/img/two-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-1.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Albert Flores</h5>
                      <img
                        src="assets/img/five-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <img
                    src="assets/img/brands/stamps.png"
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="feedback-single bg-white rounded-2 position-relative">
                  <img
                    src="assets/img/shapes/quote-icon.svg"
                    alt="quote"
                    class="position-absolute quote-icon"
                  />
                  <div class="feedback-top d-flex align-items-center">
                    <img
                      src="assets/img/client-7.png"
                      alt="client"
                      class="img-fluid rounded-circle flex-shrink-0"
                    />
                    <div class="feedback-top-content ms-3">
                      <h5>Herman Parks</h5>
                      <img
                        src="assets/img/three-star.svg"
                        alt="1 star"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <p class="feedback-comment mt-30 mb-30">
                    "Appropriately target maintainable quality vectors via ethical
                    benefits. Globally empowered meta-services. Authoritatively
                    web-enabled functionalities and emerging results. Intrinsicly
                    incentivize models before stand-alone technologies top-line data
                    with empowered meservices."
                  </p>
                  <ImgStamps
                    alt="not found"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="explore-btn position-absolute">
          <a href="testimonials.html" class="template-btn hm2-primary-btn">
            More Feedback
          </a>
        </div>
      </section>
      {/*feedback section end*/}
      {/*blog section start*/}
      <section class="blog-section light-bg pt-120 pb-120 overflow-hidden">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xxl-5 col-xl-6 col-lg-9">
              <div class="section-title text-center text-xl-start">
                <h2>Our Latest News &amp; Blogs</h2>
                <p>
                  We are committed to offering customers the most professional and
                  reliable web on UK-based servers, at prices.
                </p>
              </div>
            </div>
            <div class="col-xxl-7 col-xl-6">
              <div class="explore-btn text-center text-xl-end mt-3 mt-xl-0">
                <a href="blog-grids.html" class="template-btn secondary-btn">
                  See All Stories
                </a>
              </div>
            </div>
          </div>
          <div class="blog-bottom mt-5 position-relative zindex-1">
            <img
              src="assets/img/shapes/circle-with-frame.png"
              alt="frame"
              class="position-absolute circle-frame"
            />
            <img
              src="assets/img/shapes/circle-blue.png"
              alt="frame"
              class="position-absolute circle-blue"
            />
            <div class="row g-4 justify-content-center">
              <div class="col-xl-6 col-lg-10">
                <div class="blog-card bg-white deep-shadow rounded">
                  <div class="feature-thumb rounded-2 overflow-hidden position-relative">
                    <a href="blog-details.html">
                      <ImgBlog1
                        alt="feature"
                        class="img-fluid"
                      />
                    </a>
                    <span class="position-absolute category-btn">
                      Shared Hosting
                    </span>
                  </div>
                  <div class="blog-content-wrapper mt-4">
                    <a href="blog-details.html">
                      <h3>
                        WordPress security in 2020 - what we do to protect our users
                      </h3>
                    </a>
                    <p class="mt-3">
                      Enthusiastically negotiate sticky intellectual capital through
                      integrated Professionally tactical alignments.{" "}
                    </p>
                    <div class="blog-author mt-4 d-flex align-items-start align-items-sm-center justify-content-between">
                      <div class="author-left d-flex align-items-center">
                        <ImgAuthor1
                          alt="author"
                          class="img-fluid rounded-circle flex-shrink-0"
                        />
                        <div class="author-info ms-3">
                          <h6 class="mb-0">Raymond Harris</h6>
                          <span>03 May 2022</span>
                        </div>
                      </div>
                      <div class="blog-meta">
                        <a href="#">
                          <i class="fa-solid fa-heart" />
                          4.6k likes
                        </a>
                        <a href="#">
                          <i class="fa-solid fa-comment" />
                          19 comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-10">
                <div class="row g-4">
                  <div class="col-xl-12">
                    <div class="blog-card d-flex align-items-center bg-white deep-shadow p-25 rounded-2">
                      <div class="feature-thumb position-relative">
                        <a href="blog-details.html">
                          <ImgBlog2
                            alt="feature"
                            class="img-fluid rounded-left"
                          />
                        </a>
                        <span class="position-absolute category-btn">
                          technology
                        </span>
                      </div>
                      <div class="blog-content ms-0 ms-sm-4 mt-3 mt-sm-0">
                        <a href="blog-details.html">
                          <h4>
                            WordPress 6.0 release candidate why you should test it
                          </h4>
                        </a>
                        <div class="blog-author mt-4 d-flex align-items-start align-items-sm-center justify-content-between">
                          <div class="author-left d-flex align-items-center">
                            <ImgAuthor2
                              alt="author"
                              class="img-fluid rounded-circle flex-shrink-0"
                            />
                            <div class="author-info ms-3">
                              <h6 class="mb-0">Mark Vasquez</h6>
                              <span>03 May 2022</span>
                            </div>
                          </div>
                          <div class="blog-meta">
                            <a href="#">
                              <i class="fa-solid fa-heart" />
                              4.6k likes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="blog-card d-flex align-items-center bg-white deep-shadow p-25 rounded-2">
                      <div class="feature-thumb position-relative">
                        <a href="blog-details.html">
                          <ImgBlog3
                            alt="feature"
                            class="img-fluid rounded-left"
                          />
                        </a>
                        <span class="position-absolute category-btn">
                          technology
                        </span>
                      </div>
                      <div class="blog-content ms-0 ms-sm-4 mt-3 mt-sm-0">
                        <a href="blog-details.html">
                          <h4>
                            WordPress 6.0 release candidate why you should test it
                          </h4>
                        </a>
                        <div class="blog-author mt-4 d-flex align-items-start align-items-sm-center justify-content-between">
                          <div class="author-left d-flex align-items-center">
                            <ImgAuthor3
                              alt="author"
                              class="img-fluid rounded-circle flex-shrink-0"
                            />
                            <div class="author-info ms-3">
                              <h6 class="mb-0">Francisco Murphy</h6>
                              <span>03 May 2022</span>
                            </div>
                          </div>
                          <div class="blog-meta">
                            <a href="#">
                              <i class="fa-solid fa-heart" />
                              4.6k likes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="blog-card d-flex align-items-center bg-white deep-shadow p-25 rounded-2">
                      <div class="feature-thumb position-relative">
                        <a href="blog-details.html">
                          <ImgBlog4
                            alt="feature"
                            class="img-fluid rounded-left"
                          />
                        </a>
                        <span class="position-absolute category-btn">
                          Technology
                        </span>
                      </div>
                      <div class="blog-content ms-0 ms-sm-4 mt-3 mt-sm-0">
                        <a href="blog-details.html">
                          <h4>
                            WordPress 6.0 release candidate why you should test it
                          </h4>
                        </a>
                        <div class="blog-author mt-4 d-flex align-items-start align-items-sm-center justify-content-between">
                          <div class="author-left d-flex align-items-center">
                            <ImgAuthor4
                              alt="author"
                              class="img-fluid rounded-circle flex-shrink-0"
                            />
                            <div class="author-info ms-3">
                              <h6 class="mb-0">Victor Sheridan</h6>
                              <span>03 May 2022</span>
                            </div>
                          </div>
                          <div class="blog-meta">
                            <a href="#">
                              <i class="fa-solid fa-heart" />
                              4.6k likes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*blog section end*/}
      {/*applications area start*/}
      <section class="application-area light-bg pb-120 position-relative zindex-1 overflow-hidden">
        <img
          src="assets/img/shapes/box-shape.png"
          alt="box-shape"
          class="position-absolute left-bottom"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="section-title text-center">
                <h2>Integrated with more than 100+ applications you love.</h2>
              </div>
            </div>
          </div>
          <div class="app_lists mt-5">
            <div class="row g-4 justify-content-center">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgJoomla
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Joomla Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgApp2
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Drupal Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgOsticker
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Osticker Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgZencart
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Zencart Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgMobile
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Mobile Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgWordpress
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">WordPress Hosting</h3>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div class="app_list_item bg-white deep-shadow rounded-2 d-flex align-items-center">
                  <ImgApp3
                    alt="joomla"
                    class="img-fluid flex-shrink-0 rounded-circle"
                  />
                  <h3 class="h6 ms-3 mb-0">Joomla Hosting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*applications area end*/}
    </>

  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
