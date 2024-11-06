"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Heart = () => {
  const router = useRouter();
  const heart = [
    {
      name: "Lolopechka ",
      img: "https://i.pinimg.com/564x/a6/7e/ff/a67eff8ce1526826df3171be5512a9e0.jpg",
    },
    {
      name: "Undine",
      img: "https://i.pinimg.com/564x/0f/60/e6/0f60e6f4b3876e727d29c1d291d1723c.jpg",
    },
    {
      name: "Gaja",
      img: "https://i.pinimg.com/564x/3d/07/c3/3d07c3172eda3ea120cfa2d08787a09f.jpg",
    },
    {
      name: "Floga",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7uw_aoRXP7r1RBKN2B-qL9YHl9PSyUbo3Q&s",
    },
    {
      name: "Potrof",
      img: "https://desu.shikimori.one/uploads/poster/characters/178643/main_alt-cda1f1aa3c4c2af6e35d72d5b9bc0287.jpeg",
    },
    {
      name: "Sarado",
      img: "https://cdn.anisearch.it/images/character/cover/94/94601_400.webp",
    },
    {
      name: "Smurik",
      img: "https://i.pinimg.com/564x/48/73/89/48738987a0675bdfaaebb9522cce63c8.jpg",
    },

  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Heart Kingdom</h1>
          <div className={scss.characters}>
          {heart.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heart;
