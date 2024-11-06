"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const BlueRose = () => {
  const router = useRouter();
  const rose = [
    {
      name: "Charlotte Roselei ",
      img: "https://i.pinimg.com/564x/c4/2f/fe/c42ffed9fed0ad055c78f57a52543640.jpg",
    },
    {
      name: "Sol Marron",
      img: "https://i.pinimg.com/564x/e2/d6/07/e2d607b599eaeff4145770bcb2d278f6.jpg",
    },
    {
      name: "Puli Angel",
      img: "https://i.pinimg.com/564x/ab/63/75/ab63753272427571d56038ea5eaf3239.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Blue Rose</h1>
          <div className={scss.characters}>
          {rose.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueRose;
