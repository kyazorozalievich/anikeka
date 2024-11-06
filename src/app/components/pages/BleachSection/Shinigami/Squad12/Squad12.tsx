"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad12 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Mayuri",
      img: "https://i.pinimg.com/564x/0e/47/7e/0e477edd7785da5e737bd2e4523391b3.jpg",
    },
    {
      name: "Nemu",
      img: "https://i.pinimg.com/736x/79/8c/dc/798cdcfb15927e6e64992635083e8473.jpg",
    },
    {
      name: "Akon",
      img: "https://i.pinimg.com/736x/40/09/04/4009041d5bd70f49235b0f689270f169.jpg",
    },
    {
      name: "Hiyosu",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/0/0e/2022-11-04_21-23-13.jpg/revision/latest?cb=20221105020213&path-prefix=ru",
    },
    {
      name: "Nikorun Kuna",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/e/e7/E210_Researcher.jpg/revision/latest?cb=20131029162658&path-prefix=ru",
    },
    {
      name: "Rin Tsubokura",
      img: "https://i.pinimg.com/474x/86/55/43/865543e0786dc50cce2d186c54fcf6ed.jpg",
    },
    {
      name: "Torue",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/5/57/Torue_primera_apariencia.jpg/revision/latest?cb=20170501134824&path-prefix=ru",
    },
    {
      name: "Hachigo Nemuri",
      img: "https://static.wikia.nocookie.net/bleach/images/f/ff/685Nemuri_profile.png/revision/latest/thumbnail/width/360/height/360?cb=20190523142857&path-prefix=en",
    },

    {
      name: "Jiuhin Zenjoji",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/3/30/%D0%91%D0%BB%D0%B8%D1%87_17_%D1%81%D0%B5%D0%B7%D0%BE%D0%BD_7_%D1%81%D0%B5%D1%80%D0%B8%D1%8F.mp40147.jpg/revision/latest/scale-to-width-down/250?cb=20221124182130&path-prefix=ru",
    },
    {
      name: "Hikifune",
      img: "https://i.pinimg.com/736x/5f/28/19/5f2819dd5b2752be983bc36dd44e8c39.jpg",
    },
    {
      name: "Urahara",
      img: "https://i.pinimg.com/736x/a8/dc/b5/a8dcb5bed87564f17041370750032448.jpg",
    },
    {
      name: "Hiori",
      img: "https://i.pinimg.com/474x/57/24/e2/5724e22774764561f2ce701295f76c18.jpg",
    },
    {
      name: "Kageroza",
      img: "https://i.pinimg.com/736x/ad/8d/d3/ad8dd34f8384cf61e4267ba2d5cfab51.jpg",
    },
    {
      name: "Yushima",
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
          <h1>Squad 12</h1>
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

export default Squad12;
