"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const DemonLords = () => {
  const router = useRouter();
  const lords = [
    {
      name: "Velzard",
      img: "https://shikimori.one/system/characters/original/195130.jpg",
    },
    {
      name: "Veldora",
      img: "https://i.pinimg.com/564x/ea/79/79/ea79794835430fdb8d0f2e6562df6a61.jpg",
    },
    {
      name: "Rimuru",
      img: "https://i.pinimg.com/564x/43/5b/d6/435bd69b914fcab9a74f6f336ab7fb16.jpg",
    },
    {
      name: "Millim",
      img: "https://i.pinimg.com/564x/3c/fb/4a/3cfb4a6478b384c71267a2541f7200bc.jpg",
    },
    {
      name: "Crimson",
      img: "https://i.pinimg.com/736x/4a/2e/dc/4a2edc78e15ce19c8e353028884335e7.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/slime")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Demon Lords</h1>
          <div className={scss.characters}>
          {lords.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemonLords;
