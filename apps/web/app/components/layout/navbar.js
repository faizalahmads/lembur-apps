"use client";

export default function Navbar() {
  return (
    <div
      style={{
        width: "1440px",
        height: "75px",
        position: "relative",
        background: "#ACD6E9",
      }}
    >
      {/* MENU KIRI */}
      <div
        style={{
          width: "575px",
          height: "55px",
          left: "21px",
          top: "10px",
          position: "absolute",
          display: "inline-flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Dashboard */}
        <div
          style={{
            padding: "5px 20px",
            borderRadius: "20px",
            outline: "3px solid #1F3A4D",
            outlineOffset: "-3px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#0A2540",
              fontSize: "25px",
              fontFamily: "PT Sans Caption",
              fontWeight: 700,
            }}
          >
            Dashboard
          </span>
        </div>

        {/* Manage Lembur */}
        <div
          style={{
            padding: "0 20px",
            borderTopLeftRadius: "10px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#0A2540",
              fontSize: "25px",
              fontFamily: "PT Sans Caption",
              fontWeight: 700,
            }}
          >
            Manage Lembur
          </span>
        </div>

        {/* Manage Akun */}
        <div
          style={{
            padding: "0 10px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#0A2540",
              fontSize: "25px",
              fontFamily: "PT Sans Caption",
              fontWeight: 400,
            }}
          >
            Manage Akun
          </span>
        </div>
      </div>

      {/* LOGOUT */}
      <div
        style={{
          position: "absolute",
          left: "1290px",
          top: "21.5px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "25px",
            fontFamily: "PT Sans Caption",
            fontWeight: 700,
          }}
        >
          Logout
        </span>

        {/* Icon */}
        <div style={{ width: "31px", height: "31px", position: "relative" }}>
          <div
            style={{
              width: "11.84px",
              height: "21.53px",
              position: "absolute",
              left: "3.88px",
              top: "2.58px",
              background: "#1E1E1E",
            }}
          />
          <div
            style={{
              width: "15.07px",
              height: "11.84px",
              position: "absolute",
              left: "8.18px",
              top: "7.96px",
              background: "#1E1E1E",
            }}
          />
        </div>
      </div>
    </div>
  );
}
