"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const AirTribe = () => {
  const router = useRouter();
  const airtribe = [
    {
      name: "Aang",
      img: "https://i.pinimg.com/564x/20/7e/5b/207e5bf88e758f076816a75f2dbbf4eb.jpg",
    },
    {
      name: "Tenzin",
      img: "https://i.pinimg.com/736x/73/7c/40/737c406945fdf685d39e9817967f1576.jpg",
    },
    {
      name: "Pema",
      img: "https://i.pinimg.com/564x/69/3d/6f/693d6f092e455262efc2bdaf8680104c.jpg",
    },
    {
      name: "Opal",
      img: "https://i.pinimg.com/564x/da/78/3b/da783bd20fd0b7d019910c78f96a3fea.jpg",
    },
    {
      name: "Jinora",
      img: "https://i.pinimg.com/564x/02/3c/24/023c24a11f828f7a7e382812801724d5.jpg",
    },
    {
      name: "Ikki",
      img: "https://i.pinimg.com/564x/5e/c2/43/5ec2439ab1b3e47b0feb5193a655fc42.jpg",
    },
    {
      name: "Kai",
      img: "https://i.pinimg.com/564x/6b/1a/cc/6b1acc8191a11dc79ad5f6a47ca8243b.jpg",
    },
    {
      name: "Bumi",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRns1KAcEAnaIzVCU3HLWPiS0bKzPUozFF6B25-P8J-J7xv9Ibs",
    },
    {
      name: "Melo",
      img: "https://i.pinimg.com/736x/64/dc/24/64dc24d05144429a817541f354d22607.jpg",
    },
    {
      name: "Zahir",
      img: "https://i.pinimg.com/736x/5b/f3/35/5bf335dce9eb9d2a2800ff84e4be438d.jpg",
    },
    {
      name: "Appa",
      img: "https://i.pinimg.com/564x/5c/e8/ad/5ce8adb41d1884813687110c5187dcb1.jpg",
    },
    {
      name: "Momo",
      img: "https://i.pinimg.com/564x/4a/ff/9d/4aff9deda902c88bb3dc3d32f761faa8.jpg",
    },
    {
      name: "Rohan",
      img: "https://i.pinimg.com/564x/75/5d/bf/755dbf073333c168b177d660baac8952.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/avatar")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Tribe Air</h1>
          <div className={scss.characters}>
            {airtribe.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirTribe;
