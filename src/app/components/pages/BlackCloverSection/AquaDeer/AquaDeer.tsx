"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const AquaDeer = () => {
  const router = useRouter();
  const orcas = [
    {
      name: "Rill Boismortier",
      img: "https://i.pinimg.com/564x/6f/b4/04/6fb40420a2abdc0deba9304778ceb259.jpg",
    },
    {
      name: "Fragil Tormenta",
      img: "https://i.pinimg.com/564x/05/7d/fb/057dfb0191438267cbf482f17ad6c094.jpg",
    },
    {
      name: "Julius Novachrono",
      img: "https://i.pinimg.com/564x/52/eb/4a/52eb4ad0bd8c678049e7e28097ab3c9e.jpg",
    },
    {
      name: "Yammi",
      img: "https://i.pinimg.com/564x/a6/56/10/a65610a0018eaaef3d39395367ceeb63.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Aqua Deer</h1>
          <div className={scss.characters}>
          {orcas.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquaDeer;
