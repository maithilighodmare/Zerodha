import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Zerodha Products </h1>
        <h4 className="mb-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings
          </a>{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;
