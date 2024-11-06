"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad13 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Ukitake",
      img: "https://i.pinimg.com/564x/e3/7a/06/e37a0627e67848171d4790b47bd7fdf3.jpg",
    },
    {
      name: "Rukia",
      img: "https://i.pinimg.com/564x/ad/a9/aa/ada9aa329844b4eff7c3a51cff0fcfd0.jpg",
    },
    {
      name: "Sentaro Kotsubaki",
      img: "https://i.pinimg.com/736x/24/c9/38/24c938fc5d3f3e16f4f627828a23e9d7.jpg",
    },
    {
      name: "Shino Madarame",
      img: "https://i.pinimg.com/236x/7e/d8/e5/7ed8e5849838e5ab47b1e8ee29b63aab.jpg",
    },
    {
      name: "Ryunosuke Yuki",
      img: "https://i.pinimg.com/originals/9d/80/67/9d8067219fb4b85347441838b3cc8553.png",
    },
    {
      name: "Zennosuke Kurumadani",
      img: "https://i.pinimg.com/originals/70/a0/9c/70a09c3a58094dbc751cfef815274bf2.jpg",
    },
    {
      name: "Sakahone",
      img: "https://i.pinimg.com/736x/94/48/b6/9448b6c3a35b28aecc2a826581cadd34.jpg",
    },
    {
      name: "Kayen Shiba",
      img: "https://i.pinimg.com/736x/77/ef/75/77ef75c158a6436a40bbd616f747fe01.jpg",
    },
    {
      name: "Miyako Shiba",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUv438c4wCpcO-smAm_abNSz0Xy_AM6veGgg&s",
    },
    {
      name: "Kiyone Kotetsu ",
      img: "https://i.pinimg.com/736x/87/e8/35/87e8352c8991e66ff13e95d647650d48.jpg",
    },
    {
      name: "Hidetomo Kajomaru",
      img: "https://i.pinimg.com/originals/c2/f7/fc/c2f7fc6c66c1f17c2e645d67a77f8b33.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 13</h1>
          <div className={scss.characters}>
          {Squad.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad13;
