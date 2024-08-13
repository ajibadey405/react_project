import React from "react";
import Swiper from "swiper";
import "./assets/vendor/swiper/swiper-bundle.min.css";

const Testimonials = () => {
  React.useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiperConfig = {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      },
    };

    new Swiper(".init-swiper", swiperConfig);
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>
          Outstanding service and expertise that made our real estate experience
          seamless and enjoyable.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Exceptional service! The team made buying our home a smooth
                  and stress-free experience..
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt="Saul Goodman"
                  />
                  <h3>Nathaniel</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Professional and attentive agents who truly understand the
                  market. Highly recommend!
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt="Sara Wilsson"
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Great experience renting through this agency. They made
                  everything easy and straightforward.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt="Jena Karlis"
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Their expertise in property management has been invaluable. We
                  trust them completely.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt="Matt Brandon"
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Outstanding support throughout our relocation. Couldn’t have
                  done it without them!
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt="John Larson"
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
