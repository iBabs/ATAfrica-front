import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-txt">
        <p className="heading-p">
          There’s no secret to long-term wealth, but if there were it would be
          this:
          <br />
          <span>automated index investing.</span>
        </p>
        <p className="sm-txt">
          Even with the inevitable ups and downs of the market, our
          expert-built, globally-diversified Automated Investing Account makes
          it easy to start building long-term wealth by managing your risk,
          maximizing returns, and minimizing taxes
        </p>
        <button className='signup'>
                Get Started
            </button>
      </div>
      <img src="/asset/hero.w.png" alt="hero" />
    </div>
  );
}

export default Hero;
