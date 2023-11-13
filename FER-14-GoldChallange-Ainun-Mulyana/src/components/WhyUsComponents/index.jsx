import "./style.css";
import { whyUsArr } from "../../data";

const WhyUs = () => {
  return (
    <div className="whyUs container mt-5 d-flex flex-column gap-4">
      <div className="whyUs-1 d-flex flex-column gap-2">
        <h1 className="fw-bold">Why Us?</h1>
        <p className="fw-semibold">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div>
        <div className="container">
          <div>
            <div className="whyUs row d-flex row-gap-3 ">
              {whyUsArr.map((dataWhyUs) => {
                return (
                  <div className="whyUs-card d-flex col-12 col-md-3 " key={dataWhyUs.id}>
                    <div className="d-flex flex-column gap-2 border border-2 rounded-2 p-3 fw-semibold">
                      <img src={dataWhyUs.img} alt="" style={{ width: 30, height: 30 }} />
                      <p className="text-1-whyUs-2">{dataWhyUs.text1}</p>
                      <p className="text-2-whyUs-2">{dataWhyUs.text2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
