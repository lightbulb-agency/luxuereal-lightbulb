import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App.tsx";
import Project from "./components/custom/Project.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
