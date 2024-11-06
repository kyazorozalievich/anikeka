"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad4 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Unohana",
      img: "https://i.pinimg.com/564x/40/dd/00/40dd00fafcee56fae22ab5ab2a55eeef.jpg",
    },
    {
      name: "Isane",
      img: "https://i.pinimg.com/736x/2d/a8/8a/2da88a147e68000a279041139d7f7013.jpg",
    },
    {
      name: "Kione",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/3/33/Ep366KiyoneProfile.png/revision/latest?cb=20190208102040&path-prefix=ru",
    },
    {
      name: "Hanataro",
      img: "https://i.pinimg.com/736x/ba/0c/1a/ba0c1a6a216283d9f40a538105f681c5.jpg",
    },
    {
      name: "Chigiri Shidjima",
      img: "https://i.pinimg.com/564x/64/5b/7f/645b7f85e80a608d9ed63912bbf6b051.jpg",
    },
    {
      name: "Yasochika Iemura",
      img: "https://i.pinimg.com/originals/0b/6f/2a/0b6f2a6a679175010f722010fc49bc77.png",
    },
    {
      name: "Kira Izuru",
      img: "https://i.pinimg.com/736x/ac/ec/dc/acecdc828652b55dd774ad98ab524308.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 4</h1>
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

export default Squad4;
