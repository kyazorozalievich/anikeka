"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const CCG = () => {
  const router = useRouter();

  const ccg = [ 
    {
      name: "Kisho Arima",
      img: "https://i.pinimg.com/736x/08/b7/75/08b775b63070a64cb2692d1ecfd07a08.jpg",
    },
    {
      name: "Amon Kataro",
      img: "https://i.pinimg.com/564x/97/4a/9e/974a9eefd07555dcfafdd9e994519377.jpg",
    },
    {
      name: "Akiro Mado",
      img: "https://i.pinimg.com/564x/07/f7/9b/07f79bee3e31378fc288063da799cb69.jpg",
    },
    {
      name: "Suzuya Juuzou",
      img: "https://i.pinimg.com/736x/cb/f3/b4/cbf3b490e8f11ef3ce15abbd45307649.jpg",
    },
    {
      name: "Takizawa",
      img: "https://i.pinimg.com/564x/15/e5/a9/15e5a9343c5ee666a6e2c4b58947fbb0.jpg",
    },
    {
      name: "Take Hirako",
      img: "https://i.pinimg.com/564x/95/08/40/9508403e977f48d4be797cc1f0e4fa39.jpg",
    },
    {
      name: "Uta",
      img: "https://i.pinimg.com/736x/5b/12/db/5b12dbe451e29d67bad60b157a16b60e.jpg",
    },
    {
      name: "Haise",
      img: "https://i.pinimg.com/564x/bc/61/2a/bc612a01a4c6dec8ad079ba904e35b9f.jpg",
    },
    {
      name: "Mougan",
      img: "https://i.pinimg.com/564x/cf/df/fc/cfdffcc84b089afa6bab3fcf64c2ef9a.jpg",
    },
    {
      name: "Kureo Mado",
      img: "https://i.pinimg.com/564x/83/a2/51/83a251bb47c10b1961c9f630d7ccd0e8.jpg",
    },
    
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/ghoul")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>CCG</h1>
          <div className={scss.characters}>
          {ccg.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCG;
