// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointments" element={<Appointments />} /> */}
    </Routes>
  );
}