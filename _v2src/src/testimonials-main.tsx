import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TestimonialsPage from "./TestimonialsPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestimonialsPage />
  </StrictMode>
);
