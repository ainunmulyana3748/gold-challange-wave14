import "./style.css";
import { faq } from "../../data";

const Faq = () => {
  return (
    <>
      <div className="faq container mt-5 d-flex justify-content-between">
        <div className="faq-1 fw-bold">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className="faq-2 d-flex flex-column gap-4">
          {faq.map((data) => {
            return (
              <div className="d-flex justify-content-between gap-5 border border-1 p-2 rounded-2 fw-semibold" key={data.id}>
                <p className="my-2">{data.text1}</p>
                <img src={data.img} width={24} height={24} className="my-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
