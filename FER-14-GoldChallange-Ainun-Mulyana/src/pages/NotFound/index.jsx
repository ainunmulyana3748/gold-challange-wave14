import ImageNotFound from "../../assets/assets-404-notfound/error-404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-5 d-flex justify-content-center flex-column text-center my-auto ">
      <div>
        <img src={ImageNotFound} alt="" />
      </div>
      <Link to={"../"}>
        <button className="btn btn-success mt-3">Back to Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;
