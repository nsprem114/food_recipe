import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <div>
      <div className="bottom bg-dark d-flex justify-content-around p-3 w-100">
        <Link to="copyright" style={{ textDecoration: "none" }}>
          <p style={{ paddingLeft: 13 }}>Copyright</p>
        </Link>
        <Link to="privacy-policy" style={{ textDecoration: "none" }}>
          <p style={{ paddingLeft: 13 }}>Privacy Policy</p>
        </Link>
        <Link to="contact-us" style={{ textDecoration: "none" }}>
          <p style={{ paddingLeft: 13 }}>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterComp;
