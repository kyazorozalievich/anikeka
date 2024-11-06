"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Midnight = () => {
  const router = useRouter();
  const midnight = [
    {
      name: "Patry ",
      img: "https://i.pinimg.com/564x/e4/aa/c3/e4aac3f402e5c39452a1b3d100861d46.jpg",
    },
    {
      name: "Rhya",
      img: "https://i.pinimg.com/564x/e8/77/48/e87748ad234e9d3a0bfba7fe713d1f4d.jpg",
    },

    {
      name: "Vetto",
      img: "https://i.pinimg.com/564x/bf/8f/8c/bf8f8c65440aba645b583d9ce38f834d.jpg",
    },
    {
      name: "Fana",
      img: "https://i.pinimg.com/564x/91/ba/5a/91ba5a190001bade86a8b29633ae55d6.jpg",
    },
    {
      name: "Rades Spirito ",
      img: "https://i.pinimg.com/564x/49/ac/5d/49ac5d016dd9e966c2093c7be1516762.jpg",
    },
    {
      name: "Valtos",
      img: "https://i.pinimg.com/564x/30/c8/7d/30c87d3ff585a8d2e450096729996df9.jpg",
    },
    {
      name: "Salli",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39gpuJewcCMYE8msTEZwTFzFO8T6Z9Kq-bQ&s",
    },
    {
      name: "George",
      img: "https://i.pinimg.com/564x/79/81/b1/7981b1a7b701e644044a26b9484d40cc.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Eye of the Midnight Sun</h1>
          <div className={scss.characters}>
          {midnight.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midnight;
