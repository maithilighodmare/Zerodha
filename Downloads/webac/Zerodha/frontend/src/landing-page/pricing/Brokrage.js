import React from "react";

function Brokrage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h1 className="fs-5">Brokerage Calculator</h1>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50+
            </li>
            <li>GST per order. </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 8.5% or 100 per executed order for
              equity (whichever is lower). For NRI account (PIS), 0.5% or €2900
              per executed order for equity (whichever is lower). If the account
              is in debit balance, any order placed will be charged 248 per
              executed arder instead of 728 per executed order.
            </li>
          </ul>
        </div>
        {/* <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h1 className="fs-5">List of charges</h1>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Brokrage;
