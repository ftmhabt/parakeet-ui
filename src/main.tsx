import { ParakeetProvider } from "parakeet-ui";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParakeetProvider theme={{ hue: 145, saturation: "85%" }} mode="dark">
      <App />
    </ParakeetProvider>
  </StrictMode>
);
