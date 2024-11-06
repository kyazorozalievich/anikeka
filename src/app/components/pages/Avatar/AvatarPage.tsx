"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const AvatarPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Tribe Fire",
      img: "https://i.pinimg.com/564x/ff/d4/95/ffd495b1827348cef9003e90cdb9c9cb.jpg",
      href: "/avatar/firetribe",
    },
    {
      title: "Tribe Earth ",
      img: "https://i.pinimg.com/564x/9f/a5/a3/9fa5a3ee9372eeff5b75382200e0a15a.jpg",
      href: "/avatar/earthtribe",
    },
    {
      title: "Tribe Water ",
      img: "https://i.pinimg.com/564x/92/26/42/92264255c0b523b70352e4e881c88929.jpg",
      href: "/avatar/watertribe",
    },
    {
      title: "Tribe Air",
      img: "https://i.pinimg.com/564x/ae/ca/a4/aecaa43d4a51e2afac2d01e363aa459b.jpg",
      href: "/avatar/airtribe",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /<h6>Avatar</h6>
        </div>
        <h1>Avatar</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvatarPage;
