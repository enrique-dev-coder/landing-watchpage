import React from 'react';
import Watch from './Watch';
const Hero = () => {
  return (
    <main className="bg-new">
      <div className="row mx-auto w-75 vh-100">
        <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column  justify-content-center">
          <h1 className="  d-flex flex-column  justify-content-center">
            <span id="rolex" style={{ content: 'Rolex' }}>
              Rolex
            </span>
            <span id="watches" style={{ content: 'Watches' }}>
              Watches
            </span>
            <span id="online" style={{ content: 'Online' }}>
              Online
            </span>
          </h1>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-12 d-flex flex-column justify-content-center">
          <Watch />
        </div>
      </div>
    </main>
  );
};

export default Hero;
