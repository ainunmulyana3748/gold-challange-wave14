import "../BannerComponents/style.css";
import { Link } from "react-router-dom";

const BannerComponents = () => {
  return (
    <>
      <div className="banner container mt-5 rounded-4 text-light">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center gap-4" style={{ height: 420 }}>
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to={"/searchcarpage"}>
            <button href="#" className="button-search-car btn-sewa-mobil text-center rounded-1 border-0">
              Mulai Sewa Mobil
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BannerComponents;
