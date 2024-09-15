import React from "react";

const Icons = () => {
  return (
    <section
      className="features-area position-relative section_gap"
      style={{
        zIndex: "3",

        top: "200px",
      }}
    >
      <div className="container">
        <div
          className="row features-inner shadow-lg  d-flex align-items-center justify-content-center rounded"
          style={{
            height: "150px",
          }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <div className="single-features border-end">
              <div className="f-icon">
                <img
                  src="https://themewagon.github.io/karma/img/features/f-icon1.png"
                  alt=""
                />
              </div>
              <h6>Free Delivery</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <div className="single-features border-end">
              <div className="f-icon ms-3">
                <img
                  src="https://themewagon.github.io/karma/img/features/f-icon2.png"
                  alt=""
                />
              </div>
              <h6>Return Policy</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <div className="single-features border-end">
              <div className="f-icon text-center">
                <img
                  src="https://themewagon.github.io/karma/img/features/f-icon3.png"
                  alt=""
                />
              </div>
              <h6>24/7 Support</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <div className="single-features border-end">
              <div className="f-icon">
                <img
                  src="https://themewagon.github.io/karma/img/features/f-icon4.png"
                  alt=""
                />
              </div>
              <h6>Secure Payment</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
