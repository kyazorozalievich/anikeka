"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad6 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Byajuya Kuchiki",
      img: "https://i.pinimg.com/736x/94/96/dd/9496dd99f887ea39fa14fd19d2834eb7.jpg",
    },
    {
      name: "Renji Abarai",
      img: "https://i.pinimg.com/564x/ff/90/21/ff90219888700845c89af179694920fb.jpg",
    },
    {
      name: "Rikiki",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/2/21/Ep53Rikichi.png/revision/latest?cb=20190212101403&path-prefix=ru",
    },
    {
      name: "Saito",
      img: "https://i.pinimg.com/736x/69/a0/4c/69a04c8d1fc467354d9853d32f37b51e.jpg",
    },
    {
      name: "Ginrei Kuchiki",
      img: "https://i.pinimg.com/564x/c4/33/e0/c433e0bd6946577c7bbca421e212a328.jpg",
    },
    {
      name: "Koga Kuchiki",
      img: "https://i.pinimg.com/564x/97/7f/b0/977fb0358d2f614adcb3dad893c9aa4d.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 6</h1>
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

export default Squad6;
