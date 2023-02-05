import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <main>
      <section className="banner_sec">
        <div className="container">
          <nav className="navbar">
            <div className="navbar_logo_col">
              <Link to="/">
                <img
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                  alt="Logo"
                  className="navbar_logo"
                />
              </Link>
            </div>
            <div className="navbar_btn_col">
              <select name="" className="navbar_language_selector me-3">
                <option value="">English</option>
              </select>
              <Link to="/login" className="btn btn-custom">
                Sign In
              </Link>
            </div>
          </nav>

          {/* Banner Content */}
          <div className="banner_content_wrapper">
            <div className="banner_content_col">
              <h1 className="banner_content_title">
                Unlimited movies, TV shows and more.
              </h1>
              <h3 className="my-3">Watch anywhere. Cancel anytime.</h3>
              <h5 className="my-4 fw-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
              <div className="banner_sn_col">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-custom"
                    type="button"
                    id="button-addon2"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= */}
      <section className="common_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 common_section_content_wrapper">
              <div className="common_section_content_col">
                <h2 className="common_section_title">Enjoy on your TV.</h2>
                <h3 className="common_section_text">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h3>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="tv_section_img_col common_section_img_col text-center">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt=""
                  className="common_section_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= */}
      <section className="common_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="tv_section_img_col common_section_img_col text-center">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt=""
                  className="common_section_img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12 common_section_content_wrapper">
              <div className="common_section_content_col">
                <h2 className="common_section_title">
                  Download your shows to watch offline.
                </h2>
                <h3 className="common_section_text">
                  Save your favourites easily and always have something to
                  watch.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= */}
      <section className="common_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 common_section_content_wrapper">
              <div className="common_section_content_col">
                <h2 className="common_section_title">Watch everywhere.</h2>
                <h3 className="common_section_text">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </h3>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="tv_section_img_col common_section_img_col text-center">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                  alt=""
                  className="common_section_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= */}
      <section className="common_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="tv_section_img_col common_section_img_col text-center">
                <img
                  src="https://occ-0-4606-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
                  alt=""
                  className="common_section_img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12 common_section_content_wrapper">
              <div className="common_section_content_col">
                <h2 className="common_section_title">
                  Create profiles for children.
                </h2>
                <h3 className="common_section_text">
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      <section className="common_section py-5">
        <div className="container">
          <div className="faq_header text-center mb-4">
            <h1 className="faq_title text-white">Frequently Asked Questions</h1>
          </div>

          <div className="faq_content">
            <div
              class="accordion accordion-flush faq_accordian"
              id="accordionFlushExample"
            >
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is Netflix?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How much does Netflix cost?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Where can I watch?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq_sn_col text-center pt-4">
            <h5 className="my-4 text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-custom"
                type="button"
                id="button-addon2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
