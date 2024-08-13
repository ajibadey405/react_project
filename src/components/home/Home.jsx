// Home.jsx
import React from "react";
import Services from "./Services";
import AgentsSection from "./AgentsSection.jsx";
import Testimonials from "./Testimonials.jsx";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/main.css";

import heroCarousel1 from "./assets/img/hero-carousel/hero-carousel-1.jpg";

const Home = () => {
  return (
    <div className="contact-page">
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <h1 className="sitename">
              DSPM<span>Property</span>
            </h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div
            id="hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-item active">
              <img src={heroCarousel1} alt="Hero Carousel" />
              <div className="carousel-container">
                <div>
                  <p>Ilorin, Kwara State</p>
                  <h2>
                    <span>2</span> Bedroom Flat
                  </h2>
                  <a href="#" className="btn-get-started">
                    rent |&#8358; 1,200,000.000
                  </a>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>

            <ol className="carousel-indicators"></ol>
          </div>
        </section>
        <section style={{ marginTop: "-100px" }}>
          <Services />
        </section>
        <section style={{ marginTop: "-250px" }}>
          <AgentsSection />
        </section>
        <section style={{ marginTop: "-250px" }}>
          <Testimonials />
        </section>
      </main>
      <footer
        id="footer"
        className="footer light-background"
        style={{ marginTop: "-110px" }}
      >
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i
                className="bi bi-geo-alt icon"
                style={{ color: "#45A9EA" }}
              ></i>
              <div className="address">
                <h4>Address</h4>
                <p>A108 Adam Street</p>
                <p>Ilorin, Kwara State 535022</p>
                <p></p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i
                className="bi bi-telephone icon"
                style={{ color: "#45A9EA" }}
              ></i>
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  <br />
                  <strong>Email:</strong> <span>info@example.com</span>
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon" style={{ color: "#45A9EA" }}></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>8AM - 10PM</span>
                  <br />
                  <strong>Sunday:</strong> <span>Closed</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i
                    className="bi bi-twitter-x"
                    style={{ color: "#45A9EA" }}
                  ></i>
                </a>
                <a href="#" className="facebook">
                  <i
                    className="bi bi-facebook"
                    style={{ color: "#45A9EA" }}
                  ></i>
                </a>
                <a href="#" className="instagram">
                  <i
                    className="bi bi-instagram"
                    style={{ color: "#45A9EA" }}
                  ></i>
                </a>
                <a href="#" className="linkedin">
                  <i
                    className="bi bi-linkedin"
                    style={{ color: "#45A9EA" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © 2024 <span>Copyright</span>{" "}
            <strong className="px-1 sitename">DSPM Property</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader"></div> */}
    </div>
  );
};

export default Home;
