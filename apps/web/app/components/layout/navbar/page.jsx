"use client";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav className="navbar">
      {/* MENU KIRI */}
      <div className="nav-left">
        <button
          className={`nav-item ${active === "dashboard" ? "active" : ""}`}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`nav-item ${active === "lembur" ? "active" : ""}`}
          onClick={() => setActive("lembur")}
        >
          Manage Lembur
        </button>

        <button
          className={`nav-item ${active === "akun" ? "active" : ""}`}
          onClick={() => setActive("akun")}
        >
          Manage Akun
        </button>
      </div>

      {/* LOGOUT */}
      <div className="nav-right">
        <span className="logout-text">Logout</span>
        <div className="logout-icon">
          <span className="icon-left" />
          <span className="icon-right" />
        </div>
      </div>
    </nav>
  );
}
