import React from "react";

function Universe({ imgURL }) {
  return (
    <div className="container mt-5 p-5 ">
      <div className="row text-center ">
        <h1 className="fs-2 text-muted">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4  p-3 text-muted">
          <img
            src="media/images/assets/zerodhaFundhouse.png"
            style={{ width: "200px" }}
          ></img>
          <p
            className="text-small text-muted mt-5"
            style={{ fontSize: "15px" }}
          >
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-3">
          <img
            src="media\images\assets\sensibullLogo.svg"
            style={{ width: "230px" }}
          ></img>
          <p
            className="text-small text-muted mt-5"
            style={{ fontSize: "15px" }}
          >
            Systematic trading platform <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4  p-3">
          <img
            src="media/images/assets/zerodhaFundhouse.png"
            style={{ width: "200px" }}
          ></img>
          <p
            className="text-small text-muted mt-5"
            style={{ fontSize: "15px" }}
          >
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4  p-3">
          <img
            src="media/images/assets/streakLogo.png"
            style={{ width: "200px" }}
          ></img>
          <p className="text-small text-mute mt-5" style={{ fontSize: "15px" }}>
            Thematic investing platform <br /> that helps you invest in
            diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3">
          <img
            src="media/images/assets/smallcaseLogo.png"
            style={{ width: "200px" }}
          ></img>
          <p
            className="text-small text-muted mt-5"
            style={{ fontSize: "15px" }}
          >
            Investment research platform
            <br /> that offers detailed insights on
            <br />
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4  p-3">
          <img
            src="media/images/assets/dittoLogo.png"
            style={{ width: "160px" }}
          ></img>
          <p
            className="text-small text-muted mt-5"
            style={{ fontSize: "15px" }}
          >
            Personalized advice on life
            <br /> and health insurance. No spam
            <br /> and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
