"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const RevengersPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Tosva",
      img: "https://i.pinimg.com/564x/9c/c1/0f/9cc10f768a92060ec94911b30ba90f92.jpg",
      href: "/revengers/tosva",
    },
    {
      title: "Valhalla",
      img: "https://i.pinimg.com/564x/34/1d/ab/341dab9fa2629b81cb6372f2d7df8748.jpg",
      href: "/revengers/valhalla",
    },
    {
      title: "Podnebesie",
      img: "https://photobooth.cdn.sports.ru/preset/message/b/0c/ad50c720c4c6f95f7b4a3f0c54771.jpeg",
      href: "/revengers/podnebesie",
    },
    {
      title: "Black Dragon",
      img: "https://i.pinimg.com/564x/d4/06/82/d40682127d3899d9d3139a994c933f55.jpg",
      href: "/revengers/dragon",
    },
    {
      title: "Brahman",
      img: "https://i.pinimg.com/564x/ad/3f/8e/ad3f8e88464164af2c718710a5d70b49.jpg",
      href: "/revengers/brahman",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6>Tokyo Revengers</h6>
        </div>
        <h1>Tokyo Revengers</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevengersPage;
