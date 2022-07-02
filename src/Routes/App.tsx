import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "../Pages/App";
import { Login } from "../Pages/Login";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
