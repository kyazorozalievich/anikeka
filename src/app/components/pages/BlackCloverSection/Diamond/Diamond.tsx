"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Diamond = () => {
  const router = useRouter();
  const diamond = [
    {
      name: "Mars",
      img: "https://i.pinimg.com/564x/91/6e/54/916e54d0af6dd3b595e0ea3f0cf157ce.jpg",
    },
    {
      name: "Ladros",
      img: "https://i.pinimg.com/564x/07/b4/72/07b47219e0a44af3832039395298f266.jpg",
    },
    {
      name: "Lana",
      img: "https://i.pinimg.com/564x/c1/b4/e7/c1b4e78a40c1005ebfed732f5a984e30.jpg",
    },
    {
      name: "Morris",
      img: "https://i.pinimg.com/564x/98/8f/39/988f39182c5dd35bb953bf7bf15d1a82.jpg",
    },
    {
      name: "Lotus Whomalt",
      img: "https://i.pinimg.com/564x/c9/fa/90/c9fa9090bb93cdc9e77cbd2859cd8209.jpg",
    },
    {
      name: "Broccos",
      img: "https://img2.animatetimes.com/news/visual/2018/1537698466/1537698940469.jpg",
    },
    {
      name: "Yagos",
      img: "https://desu.shikimori.one/uploads/poster/characters/165254/main_2x-65d6722bef527886664972487e2e57db.webp",
    },
    {
      name: "Mariella",
      img: "https://i.pinimg.com/564x/2b/c4/c5/2bc4c5c0f86c38b67d480ba990da9725.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Diamond Kingdom</h1>
          <div className={scss.characters}>
          {diamond.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diamond;
