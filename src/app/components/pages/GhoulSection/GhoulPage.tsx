"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const GhoulPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Anteiku",
      img: "https://pw.artfile.me/wallpaper/07-04-2016/650x366/anime-tokyo-ghoul-anteiku-tokijskij-gul--1025568.jpg",
      href: "/ghoul/anteiku",
    },
    {
      title: "Kvinksi",
      img: "https://i.pinimg.com/564x/a4/06/8c/a4068c857ef9e2071914cfd0feea15cc.jpg",
      href: "/ghoul/kvinksi",
    },
    {
      title: "CCG",
      img: "https://i.pinimg.com/564x/ec/81/8f/ec818f1fc889ef8f191ffb3c421c4f10.jpg",
      href: "/ghoul/ccg",
    },
    {
      title: "Augiri",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1653873/pub_627919fefabf455791a77998_627a2580435f1118cfc7110e/scale_1200",
      href: "/ghoul/augiri",
    },
    {
      title: "Koza",
      img: "https://i.pinimg.com/564x/a8/81/91/a881914ec8e77e2be722efcf627dce6e.jpg",
      href: "/ghoul/koza",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /<h6>Tokyo Ghoul</h6>
        </div>
        <h1>Tokyo Ghoul</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GhoulPage;
