import { useContext, useState } from "react";
import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [loginButton, setLoginButton] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const { loggedInUser } = useContext(UserContext)
  // To see the value of UserContext
  // console.log(loggedInUser);
  

  return (
    <header
      className="navbar navbar-expand-lg shadow-lg p-3"
      style={{
        background: "linear-gradient(135deg, #1e1e2f 0%, #2a2a3a 100%)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={CDN_URL} alt="logo" className="me-2" style={{ height: "50px" }} />
          <h2 className="m-0 fw-bold" style={{ color: "#f8b400", fontFamily: "'Montserrat', sans-serif" }}>
            Foodies
          </h2>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#f8f9fa" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "#f8f9fa" }}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: "#f8f9fa" }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grocery" className="nav-link" style={{ color: "#f8f9fa" }}>
                Grocery
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{ color: "#f8b400" }}>🛒 Cart</span>
            </li>
          </ul>

          {/* Status & Login Button */}
          <div className="d-flex align-items-center gap-3 ms-3">
            <span
              className={isOnline ? "fw-semibold" : "fw-semibold"}
              style={{ color: isOnline ? "#28a745" : "#dc3545" }}
            >
              {isOnline ? "🟢 Online" : "🔴 Offline"}
            </span>
            <button
              className="btn fw-semibold px-4"
              style={{
                backgroundColor: "#f8b400",
                color: "#1e1e2f",
                borderRadius: "8px",
              }}
              onClick={() => setLoginButton(loginButton === "Login" ? "Logout" : "Login")}
            >
              {loginButton}
            </button>
            <div className="user-context" style={{color: "white"}}>
              {loggedInUser}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;