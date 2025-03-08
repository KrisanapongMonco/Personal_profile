import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "20px", background: "#f1f1f1" }}
    >
      <p>© {new Date().getFullYear()} Monco. สงวนลิขสิทธิ์.</p>
    </footer>
  );
};

export default Footer;
