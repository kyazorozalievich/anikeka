"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Eryushia = () => {
  const router = useRouter();
  const eryushia = [
    {
      name: "Licht",
      img: "https://i.pinimg.com/564x/22/2d/c4/222dc43380c54176e6c4e7504fa53f5e.jpg",
    },
    {
      name: "Tetya",
      img: "https://i.pinimg.com/564x/c5/b7/3f/c5b73fc628af04566ba1ad64d56369ee.jpg",
    },
    {
      name: "Rila",
      img: "https://i.pinimg.com/564x/12/5f/d6/125fd694f22229115f6c309489bf4454.jpg",
    },
    {
      name: "Patri",
      img: "https://i.pinimg.com/564x/4a/2c/39/4a2c3954b14c4b883fa6d8e6157b7be4.jpg",
    },
    {
      name: "Fana",
      img: "https://i.pinimg.com/564x/91/ba/5a/91ba5a190001bade86a8b29633ae55d6.jpg",
    },
    {
      name: "Ekra",
      img: "https://thicc-uwu.mywaifulist.moe/waifus/eclat-black-clover/t6Ghqs15ASIPxR7hVaB1uBU4sI6R3jdfzjP35m4R.png?class=thumbnail",
    },
    {
      name: "Charla",
      img: "https://i.pinimg.com/564x/ed/81/c8/ed81c86c3816d141ec29b58ebce5cc04.jpg",
    },
    {
      name: "Drowa",
      img: "https://i.pinimg.com/564x/78/4e/40/784e404d0f9566358fc0c62d3ecef6ee.jpg",
    },
    {
      name: "Ronni",
      img: "https://nyaa.shikimori.one/uploads/poster/characters/178693/main-79769e934f15e50abfa6809f3f8af768.webp",
    },
    
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Eryushia</h1>
          <div className={scss.characters}>
          {eryushia.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eryushia;
