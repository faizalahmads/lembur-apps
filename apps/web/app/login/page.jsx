"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "http://localhost:3001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login gagal");
      }

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));

      window.location.href = "/dashboard";

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["page-login"]}>
      <div className={styles.logo}>
        <img src="/img/logo-ilcs.png" alt="Logo" />
      </div>

      <div className={styles["login-card"]}>
        <h2 className={styles.title}>Masuk</h2>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles["input-wrapper"]}>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button
                type="button"
                className={styles["eye-btn"]}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password"
            >
                <img
                src={showPassword ? "/svg/eye-off.svg" : "/svg/eye-on.svg"}
                alt="Toggle password visibility"
                />
            </button>
            </div>

          <div className={styles.forgot}>
            <a href="#">Lupa password?</a>
          </div>

          <button
            className={styles["btn-login"]}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
