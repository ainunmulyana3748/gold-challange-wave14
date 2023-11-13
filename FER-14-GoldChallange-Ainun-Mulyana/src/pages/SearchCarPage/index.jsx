import NavbarComponents from "../../components/NavbarComponents";
import FooterComponents from "../../components/FooterComponents";
import axios from "axios";
import { useEffect, useState } from "react";
import "../SearchCarPage/style.css";
import HeroComponents from "../../components/HeroComponents";
import { Link } from "react-router-dom";

const SearchCarPage = () => {
  const [name, setName] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [cars, setCars] = useState([]);
  const [status, setStatus] = useState([]);

  const handleGetCar = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car/?name=${name}&category=${category}&${price}&isRented=${status}`)
      .then((res) => {
        console.log(res);
        setCars(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleInputPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleInputStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    handleGetCar();
  };

  useEffect(() => {
    handleGetCar();
  }, []);

  useEffect(() => {
    handleGetCar();
  }, []);

  return (
    <>
      <NavbarComponents />
      <HeroComponents />
      <div className=" searhCar pt-1">
        <div className="container searchCarComponents">
          <div>
            <p className="fw-bold">Pencarianmu</p>
          </div>
          <div className="d-flex row bg-white border border-1 rounded-2 p-2" style={{ marginBottom: 50 }}>
            <div className="col-3">
              <div className="mb-3">
                <label className="form-label">Nama Mobil</label>
                <div className="input-group">
                  <input type="text " className="form-control" id="basic-url " aria-describedby="basic-addon3 basic-addon4 " placeholder="Ketik nama/tipe mobil" onChange={handleInputName} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label className="form-label">Kategori</label>
                <div className="input-group">
                  <select className="form-select" id="inputGroupSelect01" onChange={handleInputCategory}>
                    <option className="fw-lighter">Masukan Kapasitas Mobil</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label className="form-label">Harga</label>
                <div className="input-group">
                  <select className="form-select" id="inputGroupSelect01 " onChange={handleInputPrice}>
                    <option className="fw-lighter">Masukan Harga Sewa Perhari</option>
                    <option value="minPrice=400000">&lt; Rp. 400.000</option>
                    <option value="minPrice=400000&maxPrice=600000">Rp. 400.000 - Rp. 600.000</option>
                    <option value="maxPrice=400000">&gt; Rp. 400.000</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect01" onChange={handleInputStatus}>
                    <option value=" " className="fw-lighter">
                      Disewa
                    </option>
                    <option value="true">Disewa</option>
                    <option value="false">Sedang Tidak Disewa</option>
                  </select>
                  <button type="button " className="btn btn-success text-white border-primary ms-3 rounded-0" onClick={handleSubmit}>
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex gap-3 m-auto justify-content-center text-start">
        {cars.length ? (
          cars.map((data) => {
            return (
              <>
                <div className="col-3 border border-1 d-flex flex-column gap-3 justify-content-start" style={{ padding: 24 }} key={data.id}>
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={data.image} alt="" width={200} className="image-list-car" />
                  </div>
                  <div>
                    <p className="fw-semibold">{data.name}</p>
                    <p className="fw-bold">Rp. {data.price}</p>
                    <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="btn-select-mobil mt-auto ">
                    <Link to={`/detailcardpage/${data.id}`}>
                      <button className="button-select-mobil btn btn-success border-0 rounded-1 text-light-center mx-auto">Pilih Mobil</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1 className="text-center">Halaman yang dicari tidak tersedia</h1>
        )}
      </div>
      <FooterComponents />
    </>
  );
};

export default SearchCarPage;
