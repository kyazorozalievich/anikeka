"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const JujutsuPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Tokyo Jujutsu",
      img: "https://i.pinimg.com/564x/50/7b/92/507b9225a94b5f78fdee3c88a1c376c5.jpg",
      href: "/jujutsu/tokyojujutsu",
    },
    {
      title: "Kioto Jujutsu ",
      img: "https://i.pinimg.com/564x/0f/a0/1d/0fa01dc04db0f91ffb412d9716b26f17.jpg",
      href: "/jujutsu/kiotojujutsu",
    },
    {
      title: "Curses Association ",
      img: "https://img.anitubu.com/imgs/2023/09/28/lEMLVVZVGUVugGw.jpg",
      href: "/jujutsu/association",
    },
    {
      title: "Zenin Clan",
      img: "https://preview.redd.it/whats-your-rankings-of-zenin-clan-members-from-weakest-to-v0-zrxpfurux54c1.jpg?auto=webp&s=083d67a3f104bb5a51e28905ac8e4fe9ac0b05f6",
      href: "/jujutsu/zeninclan",
    },
    {
      title: "Solo Users",
      img: "https://wegotthiscovered.com/wp-content/uploads/2023/07/Jujutsu-Kaisen-season-2-anime-manga-comparrison.jpg",
      href: "/jujutsu/solousers",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6>Jujutsu Kaisen</h6>
        </div>
        <h1>Jujutsu Kaisen</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JujutsuPage;
