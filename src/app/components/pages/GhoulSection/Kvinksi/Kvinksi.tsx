"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Kvinksi = () => {
  const router = useRouter();

  const kvinksi = [
    {
      name: "Haise",
      img: "https://i.pinimg.com/564x/e1/de/a8/e1dea8d76fa353277f7159956ee15b77.jpg",
    },

    {
      name: "Kuki",
      img: "https://i.pinimg.com/564x/20/bb/a5/20bba561db05fae2a0f4e4760eaf2489.jpg",
    },
    {
      name: "Saiko",
      img: "https://i.pinimg.com/564x/7e/82/12/7e8212b9e1b2d24c5a551d259c5d8bab.jpg",
    },
    {
      name: "Ginshi",
      img: "https://i.pinimg.com/564x/be/d2/5f/bed25feb9d79fdd8b7c8af6e0e6bd6e6.jpg",
    },
    {
      name: "Mitsuki",
      img: "https://i.pinimg.com/564x/f4/0d/d4/f40dd42d81200596c37f5034bb8ccc39.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/ghoul")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>KVINKSI</h1>
          <div className={scss.characters}>
          {kvinksi.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kvinksi;
