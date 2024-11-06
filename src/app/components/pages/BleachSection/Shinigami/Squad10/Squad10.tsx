"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad10 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Toshiro",
      img: "https://i.pinimg.com/736x/c9/48/00/c94800f417c69cb846c70e37b12bf804.jpg",
    },
    {
      name: "Rangiku",
      img: "https://i.pinimg.com/564x/2b/a7/86/2ba7863e5dc3f0adfdad1f282f6a94ea.jpg",
    },
    {
      name: "Kokichiro",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/d/db/Ep47K%C5%8Dkichir%C5%8DTakezoe.png/revision/latest?cb=20190124144005&path-prefix=ru",
    },
    {
      name: "Shutesu",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/3/30/%D0%91%D0%BB%D0%B8%D1%87_17-13.mp444415.jpg/revision/latest/scale-to-width-down/1000?cb=20231219142042&path-prefix=ru",
    },
    {
      name: "Otokawa",
      img: "https://i.pinimg.com/736x/e2/9a/22/e29a22ff366a9d2b1c119a0a2fca0147.jpg",
    },
    {
      name: "Ishin Shiba",
      img: "https://i.pinimg.com/236x/f0/25/2d/f0252d554e239288f2bc02cead573686.jpg",
    },
    {
      name: "Oko Yushima",
      img: "https://i.pinimg.com/736x/48/9b/11/489b1194f380de928cf1f865c4759072.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 10</h1>
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

export default Squad10;
