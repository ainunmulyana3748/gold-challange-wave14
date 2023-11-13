import "../HeroComponents/style.css";
import ImageCar from "../../assets/assets-HeroComponents/img_car.png";
import { Link } from "react-router-dom";
const HeroComponents = () => {
  return (
    <div className="heroComponents">
      <div className="container pt-5 ">
        <div className="row d-flex flex-wrap">
          <div className="col-lg-5 col-md-10 col-sm-12 align-self-center text-start d-flex flex-column gap-3 mb-3" style={{ fontWeight: 700 }}>
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link to={"/searchcarpage"}>
              <button href="#" className="button-search-car btn-sewa-mobil text-center rounded-1 border-0">
                Mulai Sewa Mobil
              </button>
            </Link>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-12 ms-auto">
            <img src={ImageCar} alt="hero-images" className="imgCar img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponents;
