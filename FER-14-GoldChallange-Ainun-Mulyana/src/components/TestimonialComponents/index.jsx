import "./style.css";

import Foto from "../../assets/assets-content-3/Foto.png";
import StarIcon from "../../assets/assets-content-3/StarIcon.png";
import Left from "../../assets/assets-content-3/Left.png";
import Right from "../../assets/assets-content-3/Right.png";

const Testimonial = () => {
  return (
    <div className="container d-flex flex-column mt-5 gap-4">
      <div className="container text-center">
        <h2 className="title-testimonial-1 fw-semibold">Testimonial</h2>
        <p className="title-testimonial-2 fw-semibold">Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div id="carouselExample" className="carousel slide d-flex flex-column">
        <div className="carousel-inner mb-5">
          <div className="carousel-item active">
            <div className="card d-flex justify-content-center align-items-center m-auto">
              <div className="cardTestimonial d-flex align-item-center gap-4 m-auto p-4">
                <div className="m-auto">
                  <img src={Foto} alt="" />
                </div>
                <div>
                  <div>
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card d-flex justify-content-center align-items-center m-auto">
              <div className="cardTestimonial d-flex align-item-center gap-4 m-auto p-4">
                <div className="m-auto">
                  <img src={Foto} alt="" />
                </div>
                <div>
                  <div>
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card d-flex justify-content-center align-items-center m-auto">
              <div className="cardTestimonial d-flex align-item-center gap-4 m-auto p-4">
                <div className="m-auto">
                  <img src={Foto} alt="" />
                </div>
                <div>
                  <div>
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-carousel">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon m-auto" aria-hidden="true">
              <img src={Left} alt="" style={{ width: 50, marginTop: -50 }} />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next m-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true">
              <img src={Right} alt="" style={{ width: 50, marginTop: -50 }} />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
