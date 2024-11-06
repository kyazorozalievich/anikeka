"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad8 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Kyoraku Shunsui",
      img: "https://i.pinimg.com/564x/e6/96/36/e696364044f026ca4a41f408986cbe98.jpg",
    },
    {
      name: "Liza",
      img: "https://i.pinimg.com/564x/90/91/65/90916514f27d070945758787428ece0e.jpg",
    },
    {
      name: "Yayahara Yuyu",
      img: "https://i.pinimg.com/736x/0c/6d/21/0c6d2168d7dd8e81e49f74dbcb029287.jpg",
    },
    {
      name: "Tasufasa",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/9/9c/2-17.mp45523.jpg/revision/latest/scale-to-width-down/250?cb=20231228070012&path-prefix=ru",
    },
    {
      name: "Katoribatsu Unsai",
      img: "https://i.pinimg.com/236x/5f/65/c0/5f65c031bc402a1e279517887ac9df71.jpg",
    },
   
    {
      name: "Nanao",
      img: "https://i.pinimg.com/1200x/24/b5/ed/24b5ed8d0d3e84bd0281ba8a145fe821.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 8</h1>
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

export default Squad8;
