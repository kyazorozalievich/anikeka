"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const HeroPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Adults Hero",
      img: "https://u.kanobu.ru/editor/images/61/aef0fd63-6f5f-4ed0-b29b-2414362da050.webp",
      href: "/hero/adults",
    },
    {
      title: "Young Hero",
      img: "https://i.pinimg.com/736x/af/06/36/af06360535bb3cddd22d4bc9ca21ffbc.jpg",
      href: "/hero/youngs",
    },
    {
      title: "Villian",
      img: "https://i.pinimg.com/564x/ed/c6/d4/edc6d46576cfbc3ff3d4c43ada4c5361.jpg",
      href: "/hero/villian",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6>My Hero Academia</h6>
        </div>
        <h1>My Hero Academia</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
