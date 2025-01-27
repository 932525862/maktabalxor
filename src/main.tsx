import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SocialMediaButton from "./shared/float-button.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SocialMediaButton />
    <App />
  </StrictMode>
);
