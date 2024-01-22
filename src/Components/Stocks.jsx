import React, { useEffect, useState } from "react";
import "./Graph.css";
import RiseChart from "./RiseChart";
import data from "../assets/portfolio.json";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from 'axios'

function Stocks() {
  const [getValue, setGetValue] = useState(3);
  const [tags, setTags] = useState(null);
  const [zeros, setZeros] = useState({});
  const [riskScore, setRiskScore] = useState({})

  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setGetValue(val);
  };

  Chart.register(ChartDataLabels);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/stocks");
      if (response.status === 200) {
        setRiskScore(response.data);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5000/api/stocks");
    //     if (response.status === 200) {
    //       console.log(response.data)
    //       setRiskScore(response.data)
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
   
    const metrics =  data.risk_score[getValue];
    const filteredMetrics = Object.entries(metrics)
      .filter(([key, value]) => value !== 0)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const zeroSets = Object.entries(metrics)
      .filter(([key, value]) => value === 0)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    setTags({
      labels: Object.keys(filteredMetrics).map(i=>i.toUpperCase()),
      datasets: [
        {
          label: "Risk Score",
          data: Object.values(filteredMetrics),
          backgroundColor: ["#c3730a", "#230B59", "#DACFF2", "#83E849","#2795DE"],
          borderWidth: 1,
          borderColor: 'white',          
        },
      ],
    });

    setZeros(zeroSets);
  }, [getValue]);

  return (
    <div
      style={{
        minHeight: "500px",
        display: "flex",
        margin: "2rem 0",
        textAlign: "center",
      }}
    >
      <div className="stocks">
        <RiseChart />
      </div>
      <div className="text">
        <h1>Get to know your risk score</h1>
        <div>
          <label htmlFor="risk">Risk Score</label> <br />
          <input
            type="range"
            name="risk"
            id="risk"
            min={0}
            max={10}
            onChange={handleChange}
            className="range"
            value={getValue}
          />
        </div>
        <h2>{getValue}</h2>
        <div style={{
          width: '100%'
        }}>
          {tags && (
            <Bar
              data={tags}
              options={{
                indexAxis: "y",
                scales: {
                  x: {
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                      callback: (value) => `${value}%`,
                    },
                  },
                  y: {},
                  // plugins: {
                  //   datalabels: {
                  //     display: true,
                  //     color: "white",
                  //   },
                  // },
                  // plugins: {
                  //   legend: {
                  //     labels: {
                  //       font: {
                  //         size: 16, // Adjust the font size for labels
                  //         weight: "bold", // Adjust the font weight for labels
                  //       },
                  //       textTransform: "uppercase", // Make labels uppercase
                  //     },
                  //   },
                  // },
                },
              }}
            />
          )}
        </div>
        <div
          style={{
            textAlign: "left",
            textTransform: "uppercase",
            display: "flex",
            justifyContent: 'space-evenly'
          }}
        >
          {Object.entries(zeros).map(([key, value]) => (
            <p>
              {key}: {value}%{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stocks;
