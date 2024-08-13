import React from "react";

const Services = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="">
        <h2>Our Services</h2>
        <p>
          Discover diverse property listings with virtual tours. Our team
          assists with buying, selling, renting, and property management.
          Explore investment opportunities and receive relocation support. Stay
          informed with expert market analysis and consulting.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Property Listings</h3>
              </a>
              <p>
                Explore a diverse range of properties across various locations.
                Whether you're looking for a cozy apartment, a family home, or a
                commercial space, our extensive listings offer something for
                everyone. We provide detailed information, high-quality images,
                and virtual tours to help you find the perfect property.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Buying and Selling</h3>
              </a>
              <p>
                Our experienced real estate agents are dedicated to helping you
                navigate the buying and selling process. We offer personalized
                consultations, market analysis, and negotiation expertise to
                ensure you get the best deal possible. From listing your
                property to closing the sale, we handle every step with care and
                professionalism.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Rental Services</h3>
              </a>
              <p>
                Discover rental properties that suit your needs and budget. We
                offer a wide selection of rental homes, apartments, and
                commercial spaces. Our team is committed to making the rental
                process smooth and efficient, providing you with all the
                information you need to make an informed decision.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Property Management</h3>
              </a>
              <p>
                Let us take the stress out of property management. Our
                comprehensive services include tenant screening, rent
                collection, maintenance, and more. We ensure your property is
                well-maintained and profitable, allowing you to enjoy peace of
                mind.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3> Investment Opportunities</h3>
              </a>
              <p>
                Explore lucrative real estate investment opportunities with us.
                Our experts provide insights and guidance to help you make
                informed investment decisions. Whether you're a seasoned
                investor or new to real estate, we offer resources and support
                to maximize your returns.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Relocation Assistance</h3>
              </a>
              <p>
                Moving can be challenging, but our relocation services are here
                to help. We offer customized solutions to ease your transition,
                including finding suitable housing, neighborhood orientation,
                and moving logistics. Our goal is to make your move as seamless
                as possible.
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default Services;
