import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { UserProvider } from "./contexts/userContext.tsx";
import Home from "./components/home.tsx";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserProvider>
    <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
  </BrowserRouter>
);
