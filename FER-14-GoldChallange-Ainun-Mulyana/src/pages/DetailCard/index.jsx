import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavbarComponents from "../../components/NavbarComponents";
import FooterComponents from "../../components/FooterComponents";
import ChevronUp from "../../assets/assets-page-detailcard/chevronUp.png";
import Users from "../../assets/assets-page-detailcard/users.png";
import "../DetailCard/style.css";

const DetailCard = () => {
  const param = useParams();
  console.log(param.id);

  const [carDetail, setCarsDetail] = useState({});

  const handleGetCarDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setCarsDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetCarDetail();
  }, []);

  const handleStatus = () => {
    if (carDetail.category === "small") {
      return <p className="my-auto fw-semibold">4 - 5 orang</p>;
    } else if (carDetail.category === "medium") {
      return <p className="my-auto fw-semibold">5 - 6 orang</p>;
    } else if (carDetail.category === "large") {
      return <p className="my-auto fw-semibold">7 - 8 orang</p>;
    }
  };

  return (
    <>
      <NavbarComponents />
      <div className="container mt-5">
        <div className="detailCard row gap-3">
          <div className="detailCard-1 col-8 border border-1 d-flex flex-column gap-1">
            <p className="fw-bold">Tentang Paket</p>
            <p className="fw-bold">Include</p>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p className="fw-bold">Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div className="d-flex justify-content-between">
              <p>Refund, Reschedule, Overtime</p>
              <img src={ChevronUp} alt="" />
            </div>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <div className="detailCard-2 col-3 border border-1 d-flex flex-column gap-5">
            <div className="d-flex align-items-center justify-content-center">
              <img src={carDetail.image} alt="" className="image-car-detail" />
            </div>
            <div>
              <p>{carDetail.name}</p>
              <span className="d-flex gap-3 align-items-center">
                <img src={Users} alt="" style={{ width: 15, height: 20 }} />
                {handleStatus()}
              </span>
              <div className="d-flex mt-5 justify-content-between">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">Rp {carDetail.price}</p>
              </div>
            </div>
          </div>
          <Link to={"../searchcarpage"}>
            <button className="btn btn-success" style={{ width: 200 }}>
              Back
            </button>
          </Link>
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default DetailCard;
