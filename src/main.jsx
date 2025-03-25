import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/600.css"; //semibold
import "@fontsource/poppins/700.css"; // Bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
