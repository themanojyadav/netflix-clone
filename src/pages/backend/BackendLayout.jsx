import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/backend/Navbar";
import "./BackendLayout.css";

function BackendLayout() {
  return (
    <div className="backend_wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default BackendLayout;
