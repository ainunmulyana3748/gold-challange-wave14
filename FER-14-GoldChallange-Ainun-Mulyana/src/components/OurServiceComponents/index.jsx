import "./style.css";
import ImageOurService from "../../assets/assets-content-1/img_service.png";
import { ourServiceArr } from "../../data";

const OurService = () => {
  return (
    <div>
      <div className="ourservice container d-flex flex-wrap justify-content-center align-align-items-center  m-auto mt-5">
        <div className="ourservice-1">
          <img src={ImageOurService} alt="ImageOurService" className="img-fluid" />
        </div>
        <div className="ourservice-2">
          <h1 className="fw-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
          <p className="fw-semibold">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <div className="listOurService d-flex flex-column gap-3 ">
            {ourServiceArr.map((data) => {
              return (
                <div className=" d-flex gap-3 my-auto " key={data.id}>
                  <img className="ceklis" src={data.img} alt="imgCeklis" style={{ width: 25, height: 25 }} />
                  <p>{data.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
