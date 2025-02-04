import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import SocialMediaButton from "./shared/float-button.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { LanguageProvider } from "./context/locales.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <SocialMediaButton /> */} 
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>
);
