"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Koza = () => {
  const router = useRouter();

  const koza = [
    {
      name: "Kaneki Ken",
      img: "https://i.pinimg.com/564x/bc/7e/d1/bc7ed12ab82708bf1a472a336835d488.jpg",
    },
    {
      name: "Touka Kirishima",
      img: "https://i.pinimg.com/564x/b4/a9/78/b4a978ddb96e9faaffbeefddc57d243f.jpg",
    },
    {
      name: "Ayato Kirishima",
      img: "https://i.pinimg.com/564x/95/e3/7e/95e37e0176805c7cf7bb2481f64703a1.jpg",
    },
    {
      name: "Nishio Nishiki ",
      img: "https://i.pinimg.com/564x/94/f6/89/94f68981d95914116c985fe06bdf2f2e.jpg",
    },
    {
      name: "Hinami Fueguchi ",
      img: "https://i.pinimg.com/564x/5b/c3/1d/5bc31d613ec674ebed89bcb50161e3d0.jpg",
    },
    {
      name: "Banjou Kazuichi ",
      img: "https://i.pinimg.com/564x/2f/b9/64/2fb964ee24be4f8ee7a444ebdf22340d.jpg",
    },
    {
      name: "Tsukiyama Shuu ",
      img: "https://i.pinimg.com/564x/9f/4d/59/9f4d59172023e932ef68f6b015da6b83.jpg",
    },
    {
      name: "Saiko Yonebayashi ",
      img: "https://i.pinimg.com/564x/f3/49/b0/f349b0fc22e31abc979bef068cae44c5.jpg",
    },
    {
      name: "Miza Kusakari",
      img: "https://i.pinimg.com/564x/1d/dd/4a/1ddd4a6c2801ace65587962b0a645bef.jpg",
    },
    {
      name: "Kimi Nishino",
      img: "https://i.pinimg.com/564x/d6/69/af/d669afc8295a63765995c880423bc486.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/ghoul")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>KOZA</h1>
          <div className={scss.characters}>
          {koza.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Koza;
