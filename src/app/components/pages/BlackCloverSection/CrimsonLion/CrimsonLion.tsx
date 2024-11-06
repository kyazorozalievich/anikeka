"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const CrimsonLion = () => {
  const router = useRouter();
  const lion = [
    {
      name: "Mereoleona Vermillion",
      img: "https://i.pinimg.com/564x/c8/3f/70/c83f70838c3f765bf14eb174ad631b88.jpg",
    },
    {
      name: "Fuegoleon Vermillion ",
      img: "https://i.pinimg.com/564x/0d/1e/35/0d1e35c05ca4de8e1daf853c66ba730d.jpg",
    },
    {
      name: "Leopold Vermillion",
      img: "https://i.pinimg.com/564x/13/5c/1f/135c1f3f6af57a0adfd2227ca73f3f66.jpg",
    },
    {
      name: "Randall Luftair",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYpo8QkUQbdtUhXZd-MR0ZbHEdT-yNybWyA&s",
    },
    {
      name: "Ben Benfunk",
      img: "https://cdn.anisearch.com/images/character/cover/88/88744_400.webp",
    },
    {
      name: "Kirsch Vermillion",
      img: "https://i.pinimg.com/564x/96/db/70/96db709ef8de6399acdb865602275e29.jpg",
    },
    {
      name: "Theresa Rapual",
      img: "https://i.pinimg.com/564x/d5/ec/fb/d5ecfb83035cf984954e18a7ff0c8794.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Crimson Lion</h1>
          <div className={scss.characters}>
          {lion.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimsonLion;
