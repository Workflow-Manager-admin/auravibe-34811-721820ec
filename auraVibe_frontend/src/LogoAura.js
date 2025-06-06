import React from "react";

// PUBLIC_INTERFACE
function LogoAura({ size = 40, accent = "#c0bec5" }) {
  /** 
   * A modern, circular "aura" SVG mark with layered glowing gradients, 
   * plus stylish text for AuraGram. Accents respect dark/light backgrounds.
   */
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 65% 35%, #f3f1fd45, #c0bec570 58%, transparent 99%)",
          boxShadow: "0 0 14px 6px #c0bec544",
        }}
      >
        <defs>
          <radialGradient
            id="auraGlow"
            cx="50%" cy="50%" r="70%"
            fx="60%" fy="40%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="47%" stopColor={accent} stopOpacity="0.84" />
            <stop offset="100%" stopColor="#191933" stopOpacity="0.10" />
          </radialGradient>
          <linearGradient id="auraLine" x1="6" y1="39" x2="38" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#73e6d9"/>
            <stop offset="0.28" stopColor={accent} />
            <stop offset="0.68" stopColor="#7e9cee"/>
            <stop offset="1" stopColor="#c5dbff"/>
          </linearGradient>
        </defs>
        {/* Aura Glow */}
        <circle cx="22" cy="22" r="18" fill="url(#auraGlow)" />
        {/* Stylized swirl/energy line */}
        <path
          d="M11,22c2.5-7,14-7,16.5,0s-6,11-11.5,7"
          stroke="url(#auraLine)"
          strokeWidth="2.7"
          fill="none"
          opacity="0.95"
          filter="url(#svgGlow)"
        />
        {/* Central dot */}
        <circle cx="22" cy="22" r="3.7" fill="#fff" fillOpacity="0.75" />
        {/* Small orbit highlight */}
        <ellipse
          cx="28"
          cy="16"
          rx="3.6"
          ry="1.35"
          fill="#fff"
          fillOpacity="0.21"
        />
      </svg>
      <span
        className="av-logo-text"
        style={{
          background:
            "linear-gradient(90deg, #c0bec5 30%, #73e6d9 80%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Times New Roman', Times, serif",
          fontWeight: 700,
          fontSize: "1.48rem",
          letterSpacing: "0.02em",
          lineHeight: 1.16,
        }}
      >
        AuraGram
      </span>
    </span>
  );
}

export default LogoAura;
