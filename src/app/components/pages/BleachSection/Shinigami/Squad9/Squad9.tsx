"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad9 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Kensei",
      img: "https://i.pinimg.com/originals/a3/cc/34/a3cc341fd473de5b0b6783bd63c1b449.jpg",
    },
    {
      name: "Shūhei Hisagi",
      img: "https://i.pinimg.com/564x/97/2b/71/972b712ee2a1a5d416d949fc75750c07.jpg",
    },
    {
      name: "Mashuro Kuna",
      img: "https://i.pinimg.com/originals/46/d4/c4/46d4c472dd167679cbfb794614adad2d.jpg",
    },
    {
      name: "Toshimori",
      img: "https://i.pinimg.com/474x/bc/db/cb/bcdbcb5bee9f59756c0bc3ee802c790e.jpg",
    },
    {
      name: "Kumoi",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/f/f8/%D0%91%D0%BB%D0%B8%D1%87_17_%D1%81%D0%B5%D0%B7%D0%BE%D0%BD_7_%D1%81%D0%B5%D1%80%D0%B8%D1%8F.mp40182.jpg/revision/latest/scale-to-width-down/250?cb=20221124182131&path-prefix=ru",
    },
    {
      name: "Tousen",
      img: "https://i.pinimg.com/originals/75/af/9f/75af9f694a0a327017f0915ee1ee46f3.jpg",
    },
    {
      name: "Heizō Kasaki",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/d/dc/Ep209Heiz%C5%8DKasaki.png/revision/latest?cb=20190120095113&path-prefix=ru",
    },
    {
      name: "Shinobu",
      img: "https://i.pinimg.com/474x/90/07/0d/90070df84104de374d6184fe77c0204d.jpg",
    },
    {
      name: "Izaemon Tōdō",
      img: "https://static.wikia.nocookie.net/bleach/images/7/71/Ep209IzaemonProfile.png/revision/latest/scale-to-width-down/1000?cb=20231105203748&path-prefix=en",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 9</h1>
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

export default Squad9;
