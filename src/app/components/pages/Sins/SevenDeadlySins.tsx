"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const SevenDeadlySins = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Seven Sins",
      img: "https://i.pinimg.com/564x/1e/bc/6e/1ebc6e8236a7ed9af5f9b126b0cf1c89.jpg",
      href: "/sins/sevensins",
    },
    {
      title: "Angels",
      img: "https://i.pinimg.com/564x/a4/ec/30/a4ec304866fede5793f8987ec8d5876c.jpg",
      href: "/sins/angelssins",
    },
    {
      title: "Demons",
      img: "https://i.pinimg.com/564x/75/8f/72/758f724209de090a9242c0e5d58819ff.jpg",
      href: "/sins/demonssins",
    },
    {
      title: "Holy Knights",
      img: "https://i.pinimg.com/564x/a2/dc/88/a2dc88a08a2a774ba320f7a2e58129e5.jpg",
      href: "/sins/knightssins",
    },
    // {
    //   title: "",
    //   img: "",
    //   href: "/sins/",
    // },
    // {
    //   title: "",
    //   img: "",
    //   href: "/sins/",
    // },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6>Seven Deadly Sins</h6>
        </div>
        <h1>Seven Deadly SIns</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SevenDeadlySins;
