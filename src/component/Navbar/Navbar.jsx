import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div>
        {/* Top spacing for the banner */}
        <div style={{ width: "100%", height: "40px" }}></div>
        {/* Navbar */}
        <div className="container shadow-lg bg-white position-relative z-3">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <img
                src="https://themewagon.github.io/karma/img/logo.png"
                alt="Logo"
                width="150"
              />
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link text-warning fw-normal">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  🛒
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fw-normal text-black">
                  ⌕
                </a>
              </li>
            </ul>
          </header>
        </div>

        {/* Banner Image */}
        <img
          src="https://themewagon.github.io/karma/img/banner/banner-bg.jpg"
          alt="Banner Background"
          style={{ position: "absolute", top: "0px", zIndex: "-1", width: "100%" }}
        />

        {/* Banner Text and Image */}
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-lg-5 position-relative z-1">
              <h1 className="fw-bold" style={{ fontSize: "4rem" }}>
                Nike New <br />
                Collection!
              </h1>
              <p className="opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="add-bag d-flex align-items-center">
                <span className="add-text text-uppercase">Add to Bag</span>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://themewagon.github.io/karma/img/banner/banner-img.png"
                className="position-relative z-1 float-end me-5"
                style={{ top: "-40px", left: "30px", maxWidth: "100%" }}
                alt="Nike Collection"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Media Queries */}
      
    </>
  );
};

export default Navbar;
