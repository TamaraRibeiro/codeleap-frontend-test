import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { UserProvider } from "./contexts/userContext.tsx";
import Home from "./components/home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
