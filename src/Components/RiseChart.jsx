import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import "./Graph.css";

import animationData from "../assets/Animation - 1705573073952.json";

function RiseChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <h1
        className="top"
        style={{
          fontStyle: "italic",
        }}
      >
        Lower fees help you keep more of your return
      </h1>
      <p style={{ padding: "20px" }}>
        Just answer a few questions, and we’ll build you a personalized
        portfolio of low-cost index funds from up to 17 global asset classes.
        Our software handles all the trading, rebalancing, and other busywork to
        help grow your wealth for the long term.
      </p>

      <div ref={ref}>
        {inView && (
          <Lottie animationData={animationData} loop={false} autoplay />
        )}
      </div>
    </div>
  );
}

export default RiseChart;
