import App from "../Pages/app/App";
import { Login } from "../Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
