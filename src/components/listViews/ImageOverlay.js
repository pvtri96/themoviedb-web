import React from 'react';

const ImageOverlay = () => {
  return (
    <div className="overlay d-flex">
      <div className="overlay-content d-flex">
        <div className="pl-2">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        <div className="rigth ml-auto pr-2">
          <i className="fa fa-heart pr-2" aria-hidden="true"></i>
          <i className="fa fa-bookmark" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
