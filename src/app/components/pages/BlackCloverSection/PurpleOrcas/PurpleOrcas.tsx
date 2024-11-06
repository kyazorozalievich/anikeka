"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const PurpleOrcas = () => {
  const router = useRouter();
  const orcas = [
    {
      name: "Gueldre Poizot",
      img: "https://i.pinimg.com/564x/60/fe/57/60fe577f1cbca8b3bc22d993dba5c627.jpg",
    },
    {
      name: "Zara Ideale",
      img: "https://i.pinimg.com/564x/7c/80/68/7c8068e3537a0d16da772492420d3e08.jpg",
    },
    {
      name: "Xerx Lugner",
      img: "https://i.pinimg.com/564x/a1/33/85/a1338501b6afffbf4225ba4cb2fb2913.jpg",
    },
    {
      name: "Adrain",
      img: "https://i.pinimg.com/564x/2b/da/c3/2bdac3ffa536cb0d70fa0d736112d15e.jpg",
    },
    {
      name: "Kaiser Granvorka",
      img: "https://i.pinimg.com/564x/1f/85/1f/1f851f68bf2f13796bd6a733ac76a1f3.jpg",
    },
    {
      name: "Digito Talis",
      img: "https://shikimori.one/system/characters/original/173855.jpg",
    },
    {
      name: "Lebuti",
      img: "https://cdn.anisearch.com/images/character/cover/66/66434_400.webp",
    },
    {
      name: "Rades Spirito",
      img: "https://www.nautiljon.com/images/perso/00/02/rades_spirito_21520.webp",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Purple Orcas</h1>
          <div className={scss.characters}>
          {orcas.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurpleOrcas;
