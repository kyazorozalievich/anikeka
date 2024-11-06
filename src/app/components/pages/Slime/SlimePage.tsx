"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const SlimePage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Kingdom Dwargo",
      img: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/e/e4/Ingrassia_Kingdom_Clearer_View.jpg/revision/latest/smart/width/386/height/259?cb=20210815095419",
      href: "/slime/dwargo",
    },
    {
      title: "Rimuru's Servants",
      img: "https://i.pinimg.com/564x/b9/b2/47/b9b24738e9d617229c91456afcc6097f.jpg",
      href: "/slime/servants",
    },
    {
      title: "Demon Lords",
      img: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/c/cc/Ten_Great_Demon_Lords.jpg/revision/latest?cb=20190502182515&path-prefix=ru",
      href: "/slime/demonrimuru",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6>Reincarnated Slime</h6>
        </div>
        <h1>Reincarnated Slime</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlimePage;
