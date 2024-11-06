"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const WaterTribe = () => {
  const router = useRouter();
  const watertribe = [
    {
      name: "Yue",
      img: "https://i.pinimg.com/564x/ab/a4/b8/aba4b873bef00fac98d446b752b834ed.jpg",
    },
    {
      name: "Katara",
      img: "https://i.pinimg.com/564x/01/cc/b4/01ccb4d5b83f914bbd336c75806109bc.jpg",
    },
    {
      name: "Sokka",
      img: "https://i.pinimg.com/736x/35/e4/68/35e4689d900a1e0a9b3d31bf601ee676.jpg",
    },
    {
      name: "Kuruk",
      img: "https://i.pinimg.com/564x/a5/05/58/a50558688b1cd647a6ccc0fcb8ea2ffb.jpg",
    },
    {
      name: "Korra",
      img: "https://i.pinimg.com/736x/25/31/64/25316463940233e7145db8d755c2b8ce.jpg",
    },
    {
      name: "Chief Hakoda",
      img: "https://i.pinimg.com/564x/2f/81/29/2f8129b046fa90bc2072a91f391ccc1e.jpg",
    },
    {
      name: "Kanna",
      img: "https://i.pinimg.com/564x/c9/55/08/c9550837ec5eec20e585f552d8640fa0.jpg",
    },
    {
      name: "Pakku",
      img: "https://i.pinimg.com/564x/94/ec/23/94ec232cd289bb9b4dd1f17557b7d9fb.jpg",
    },
    {
      name: "Jeong",
      img: "https://i.pinimg.com/564x/61/6a/87/616a876fab5ee1b1fd811cdba769ada5.jpg",
    },
    {
      name: "Desna",
      img: "https://i.pinimg.com/564x/b6/31/2a/b6312aa432abcef9691e18de364e3f07.jpg",
    },
    {
      name: "Eska",
      img: "https://i.pinimg.com/564x/e2/3e/11/e23e1130e1cf832888e91201854b6457.jpg",
    },
    {
      name: "Varrik",
      img: "https://i.pinimg.com/564x/6c/31/26/6c31268407c149cb993c404555b280f8.jpg",
    },
    {
      name: "Karrlok",
      img: "https://i.pinimg.com/564x/fc/71/49/fc7149627be3b9b606e64821845d2948.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/avatar")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Tribe Water</h1>
          <div className={scss.characters}>
          {watertribe.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterTribe;
