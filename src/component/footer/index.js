import { Image } from "react-bootstrap";
import reactLogo from "../../assets/reactlogo.svg";
import boostrapLogo from "../../assets/bootstraplogo.svg";
const Footer = () => {
  return (
    <div className="d-flex flex-column" style={{ textAlign: "center" }}>
      <footer className="footer">
        <div className="ml-auto">
          <span>
            Created By <Image src={boostrapLogo} rounded />
            <Image src={reactLogo} rounded />
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
