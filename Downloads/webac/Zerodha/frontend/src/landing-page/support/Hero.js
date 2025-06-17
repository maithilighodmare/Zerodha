import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div
        className="p-6 px-5 mb-5 d-flex  justify-content-between align-items-center"
        id="supportWrapper"
      >
        <h4 className="text-white mt-5">Support Portal</h4>
        <a href="#" className="text-white mt-5 mb-5 text-decoration-underline">
          Track tickets
        </a>
      </div>

      <div className="row px-5 pb-5">
        <div className="col-md-6">
          <h1 className="fs-4 text-white mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            className="form-control mb-4"
            style={{
              padding: "15px 20px",
              fontSize: "18px",
              borderRadius: "6px",
              border: "none",
              width: "100%",
            }}
          />

          <div className="d-flex flex-wrap gap-4 ">
            <a href="#" className="text-white text-decoration-underline">
              Track account opening
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Track segment activation
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Intraday margins
            </a>
            <a href="#" className="text-white text-decoration-underline ">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-3 mt-md-0">
          <h1 className="fs-4 text-white mb-3">Featured</h1>
          <ol className="ps-3">
            <li>
              <a
                href="#"
                className="text-decoration-underline text-info text-white"
              >
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-decoration-underline text-info text-white"
              >
                Surveillance measure on scrips – June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
