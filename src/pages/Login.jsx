import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
              <Link to="" className="btn btn-custom">
                Sign In
              </Link>
            </div>
          </nav>

          {/* Banner Login Content */}
          <div className="banner_login_content_wrapper">
            <div className="banner_login_form mb-5">
              <h1 className="banner_login_title">Sign In</h1>
              <div className="banner_login_form_col">
                <form action="" className="login_form">
                  <div className="mb-4">
                    <input
                      type="email"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Email Address"
                      value="demo@gmail.com"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Password"
                      value="password"
                    />
                  </div>
                  <div className="mb-3 mt-5">
                    <Link
                      to="/user/dashboard"
                      type="button"
                      className="btn btn-custom w-100"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" name="" id="" className="me-1" />
                      <span className="custom-small-text">Remember Me</span>
                    </div>
                    <div className="">
                      <span className="custom-small-text">Need Help?</span>
                    </div>
                  </div>
                </form>
                <div className="">
                  <p className="mb-3 custom-small-text fs-6">
                    <small className="me-2">New to Netflix?</small>
                    <Link to="/" className="text-white text-decoration-none">
                      Sign up now.
                    </Link>
                  </p>
                  <p className="mb-0 custom-small-text">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. Learn more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
