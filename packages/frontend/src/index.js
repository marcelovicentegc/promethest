import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const BASE_URL = "http://localhost:9087/frontend-metrics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function sendToPushgateway(metric) {
  const body = JSON.stringify(metric);
  const serverUrl = BASE_URL + "/pushgateway";

  fetch(serverUrl, {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function sendToKafka(metric) {
  const body = JSON.stringify(metric);
  const serverUrl = BASE_URL + "/kafka";

  fetch(serverUrl, {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function sendMetrics(metric) {
  sendToPushgateway(metric);
  sendToKafka(metric);
}

reportWebVitals(sendMetrics);
