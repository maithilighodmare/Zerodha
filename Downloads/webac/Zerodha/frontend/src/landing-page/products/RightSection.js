import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-5">
          <h1 className="mb-5">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>
            Learn More{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
