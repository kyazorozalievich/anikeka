"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Tample = () => {
  const router = useRouter();
  const tample = [
    {
      name: "Gifso",
      img: "https://www.nautiljon.com/images/perso/00/37/gifso_21573.webp",
    },
    {
      name: "Gio",
      img: "https://s4.anilist.co/file/anilistcdn/character/large/b124992-Ebe9mliVbioA.png",
    },
    {
      name: "Kahono",
      img: "https://i.pinimg.com/564x/86/36/44/8636447ffee7d77901855126187dcfb1.jpg",
    },
    {
      name: "Kiato",
      img: "https://i.pinimg.com/564x/9f/60/bc/9f60bc91eb1bc4bd1d9fa3ac1d7813d1.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Seabed Tample</h1>
          <div className={scss.characters}>
          {tample.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tample;
