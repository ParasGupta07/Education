import React from "react";
import "./MacBook.css";

const MacBook = () => {
  return (
    <div className="macbook-component">
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera"></div>
              <div className="display">
                <div className="shade"></div>
              </div>
              <span>RVGo</span>
            </div>
            <span className="logo-above">RVGo</span>
          </div>
          <div className="body">
            <div className="face-one">
              <div className="touchpad"></div>
              <div className="keyboard">
                {Array.from({ length: 62 }).map((_, idx) => {
                  const fKeys = idx >= 50;
                  return (
                    <div
                      key={idx}
                      className={`key ${fKeys ? "f" : ""} ${idx === 5 ? "space" : ""}`}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="pad one"></div>
            <div className="pad two"></div>
            <div className="pad three"></div>
            <div className="pad four"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default MacBook;
