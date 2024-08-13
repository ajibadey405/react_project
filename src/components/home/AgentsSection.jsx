import React from "react";

const AgentsSection = () => {
  return (
    <section id="agents" className="agents section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Our Agents</h2>
        <p>
          Our skilled agents offer expert guidance and personalized service for
          all your real estate needs.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6" data-aos-delay="100">
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Ajibade Adeyemi</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}

          <div className="col-lg-4 col-md-6" data-aos-delay="200">
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Rent Manager</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}

          <div className="col-lg-4 col-md-6" data-aos-delay="300">
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Akolade Mattew</h4>
                <span>Sale manager</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
