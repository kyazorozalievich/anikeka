"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad0 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Ichibei Hyosube",
      img: "https://i.pinimg.com/564x/df/64/32/df64320e6ced7a6da7c621b9cd5ef780.jpg",
    },
    {
      name: "Tenjiro Kirinji",
      img: "https://i.pinimg.com/564x/15/07/9c/15079c69a4a77300408e407cecd25424.jpg",
    },
    {
      name: "Kirio Hikifune",
      img: "https://i.pinimg.com/564x/c9/9c/6c/c99c6cf72bdc30961a30744f39b0823c.jpg",
    },
    {
      name: "Senjumaru Shutara",
      img: "https://i.pinimg.com/564x/07/32/35/073235fcdb8305e8f66f71392f9fa6c3.jpg",
    },
    {
      name: "Oetsu Nimayia",
      img: "https://i.pinimg.com/564x/63/7c/d2/637cd20632a542b132c9aab750513760.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 0</h1>
          <div className={scss.characters}>
          {Squad.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad0;
