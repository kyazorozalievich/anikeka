"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Servants = () => {
  const router = useRouter();
  const servants = [
    {
      name: "Rimuru",
      img: "https://i.pinimg.com/736x/72/74/85/7274852bad7ef0570562652f7b2dd7b7.jpg",
    },
    {
      name: "Veldora",
      img: "https://i.pinimg.com/736x/16/14/3b/16143b9e5cc298a71ac66138a549b98e.jpg",
    },
    {
      name: "Shion",
      img: "https://i.pinimg.com/736x/dd/ba/c5/ddbac5b25bb87074f844fc9a97a93222.jpg",
    },
    {
      name: "Benimaru",
      img: "https://i.pinimg.com/564x/41/b7/cf/41b7cfaa324aea069c33dc4506e5c15e.jpg",
    },
    {
      name: "Souei",
      img: "https://i.pinimg.com/564x/67/ea/bf/67eabf0d7a02af77a968340c45b6f1b7.jpg",
    },
    {
      name: "Diablo",
      img: "https://i.pinimg.com/736x/88/01/46/880146f872a3384c53b2e945537a1f0e.jpg",
    },
    {
      name: "Hakurou",
      img: "https://i.pinimg.com/564x/72/29/44/7229447f768a7bd2868ba50db8695613.jpg",
    },
    {
      name: "Geld",
      img: "https://i.pinimg.com/564x/84/c8/d4/84c8d40a3cfdd4750f0cc4efe1940051.jpg",
    },
    {
      name: "Ranga",
      img: "https://i.pinimg.com/564x/0f/d2/75/0fd275334c9a8e778cf34d458f83556a.jpg",
    },
    {
      name: "Tensura",
      img: "https://i.pinimg.com/564x/45/49/a3/4549a370c330d01af5c650433e339f94.jpg",
    },
    {
      name: "No Name...",
      img: "https://i.pinimg.com/564x/4a/52/62/4a5262beebd8cd4359c59a0454423fca.jpg",
    },
    {
      name: "No Name...",
      img: "https://i.pinimg.com/564x/44/24/5f/44245f8500cc85fe933cee78cf00f1e8.jpg",
    },
    {
      name: "No Name...",
      img: "https://i.pinimg.com/564x/9e/b8/ca/9eb8ca5694d7bf7219d63adafbf35306.jpg",
    },
    {
      name: "Shuna",
      img: "https://i.pinimg.com/736x/d6/44/b3/d644b3eaeba76ebc256df9a3aa7e13ea.jpg",
    },
    {
      name: "Suphia",
      img: "https://i.pinimg.com/736x/72/78/54/72785449a71d7034beac72a289e9df21.jpg",
    },
    {
      name: "Momiji",
      img: "https://i.pinimg.com/736x/d3/2e/6f/d32e6f6ddcc1d1b9149f56f9b651ba83.jpg",
    },
    {
      name: "Albis",
      img: "https://i.pinimg.com/736x/1d/f8/6f/1df86fb7aae080e27b69ee47e3c01968.jpg",
    },
    {
      name: "Souka",
      img: "https://i.pinimg.com/736x/25/29/f6/2529f6b5b63f56fc508ff5ae7df83ce9.jpg",
    },
    {
      name: "Luiminos",
      img: "https://i.pinimg.com/736x/64/2c/be/642cbe03acfe825fc6fa5d0b83ec9e01.jpg",
    },
  
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/slime")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Kingdom Dwargo</h1>
          <div className={scss.characters}>
          {servants.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servants;
