import "../styles/Footer.scss";
// eslint-disable-next-line no-unused-vars
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Link to="/" className="footer_logo">
          ViaStay
        </Link>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/return-policy">Return and Refund Policy</Link>
          </li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+60 11 234 5678</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>support@viastay.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment methods" />
      </div>
    </div>
  );
};

export default Footer;
