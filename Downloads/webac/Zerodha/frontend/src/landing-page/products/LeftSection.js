import React from "react";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5 ">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-2">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/assets/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/assets/appstoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
