"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Valhalla = () => {
  const router = useRouter();
  const valhalla = [
    {
      name: "Kisaki",
      img: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/678023217157454858/649bbe10-defe-509f-9847-a30f7e563c8e.jpeg",
    },
    {
      name: "Hanma",
      img: "https://i.pinimg.com/1200x/4e/1c/e7/4e1ce7aa1173e229eaba279ec6be3514.jpg",
    },
    {
      name: "Kazutoro",
      img: "https://i.pinimg.com/736x/5d/2b/41/5d2b41fa14a185831b013a34f5db8524.jpg",
    },

    {
      name: "Chome",
      img: "https://i.pinimg.com/564x/ba/e3/d4/bae3d4f3ec09ed7560293650713258e3.jpg",
    },
    {
      name: "Chonbo",
      img: "https://nyaa.shikimori.one/uploads/poster/characters/189775/main-c32307c1fd34b2bc11c6179fb36e09f3.webp",
    },
    {
      name: "Сhodji",
      img: "https://i.pinimg.com/564x/f0/c9/49/f0c949fb8f3127838e68a618cefd1d1c.jpg",
    },
    {
      name: "Badji",
      img: "https://i.pinimg.com/236x/bd/66/39/bd66397d51ced5ade0298820327a5eae.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/revengers")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>VALHALLA</h1>
          <div className={scss.characters}>
          {valhalla.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Valhalla;
