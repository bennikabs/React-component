import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>Move all cities into a new component called Cities</p>

      <ul>
        <li>Sydney</li>
        <li>Paris</li>
        <li>Montreal</li>
        <li>Lisbon</li>
        <li>San Francisco</li>
      </ul>
    </div>
  </StrictMode>
);
