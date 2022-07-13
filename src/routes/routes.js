import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/weather/:city" element={<Weather />} />
    </Routes>
  );
}
