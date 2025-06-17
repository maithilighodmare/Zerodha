import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 mb-5 border-top">
        <div
          className="row p-5   text-muted "
          style={{
            lineHeight: "1.8",
            fontSize: "1.0em",
          }}
        ></div>
        <div className="col-1"></div>
        <div className="col-5 p-5 text-center">
          <img
            src="media\images\assets\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "75%" }}
          ></img>
          <h4 className="mt-2">Nithin Kamath</h4>
          <h6 className="mt-2-">Founder, CEO</h6>
        </div>
        <div className="col-5">
          <h1 className=" mb-5">People</h1>

          <p className="mb-6">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-6">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Homepage /
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA /{" "}
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
