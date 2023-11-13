import { navLinks, footer } from "../../data";
import "../FooterComponents/style.css";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const FooterComponents = () => {
  return (
    <>
      <div className="footer d-flex container mt-5">
        <div className="footer-1 gap-md-3 d-flex">
          <div className="footer-1-1 fw-bold">
            {footer.map((data) => {
              return (
                <>
                  <div key={data.id}>
                    <p>{data.text}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="footer-1-2 d-flex flex-column row-gap-1 row-gap-md-3 fw-semibold">
            {navLinks.map((link) => {
              return (
                <div className="col" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-2 d-flex">
          <div className="footer-2-1 fw-bold">
            <p>Connect with us</p>
            <div className="d-flex gap-2 fw-bold">
              {footer.map((data) => {
                return (
                  <>
                    <img src={data.img} alt="" />
                  </>
                );
              })}
            </div>
          </div>
          <div className="footer-2-2 fw-bold">
            <p>Copyright Binar 2022</p>
            <Link to={"/"}>
              <button className="logo"></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponents;
