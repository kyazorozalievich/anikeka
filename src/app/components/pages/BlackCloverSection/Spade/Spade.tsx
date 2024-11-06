"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Spade = () => {
  const router = useRouter();
  const spade = [
    {
      name: "Zenon Zogratis",
      img: "https://i.pinimg.com/564x/7f/19/1a/7f191a22ffcaa065b887713c264b522a.jpg",
    },
    {
      name: "Dante Zogratis",
      img: "https://i.pinimg.com/564x/b4/13/4e/b4134e61aafcc905a657cbdf089020d1.jpg",
    },
    {
      name: "Vanika Zogratis",
      img: "https://i.pinimg.com/736x/80/0b/a2/800ba22dff764a410017637ffbc31b8b.jpg",
    },
    {
      name: "Megikula",
      img: "https://i.pinimg.com/564x/48/f4/d1/48f4d1ea9ebe92c76cd35f767610b18c.jpg",
    },
    {
      name: "Lycifer",
      img: "https://i.pinimg.com/736x/a1/d5/77/a1d5774a8cd0a1121febf046e716e6a7.jpg",
    },
    {
      name: "Demon Zenon",
      img: "https://i.pinimg.com/564x/a6/d1/70/a6d1704f4b55e26165ef8b50edd60ede.jpg",
    },
    {
      name: "Gaderious",
      img: "https://cdn.anisearch.com/images/character/cover/92/92115_400.webp",
    },
    {
      name: "Svenkin",
      img: "https://i.pinimg.com/564x/bf/0f/3e/bf0f3eaf42ad6237e841847c429dd9f7.jpg",
    },
    {
      name: "Halbert",
      img: "https://i.pinimg.com/564x/c4/c7/69/c4c7696ef100079bed821dde8fca7ffa.jpg",
    },
    {
      name: "Leopold",
      img: "https://pbs.twimg.com/profile_images/1353185209924149248/AtCJ0Tow_400x400.jpg",
    },
    {
      name: "Ralf",
      img: "https://cdn.anisearch.de/images/character/cover/92/92105_400.webp",
    },
    {
      name: "Yno",
      img: "https://i.pinimg.com/564x/43/5f/a7/435fa7a496b5469acfba7b86f1123ea8.jpg",
    },
    
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Spade Kingdom</h1>
          <div className={scss.characters}>
          {spade.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spade;
