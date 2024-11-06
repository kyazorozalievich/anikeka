"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Vaizard = () => {
  const router = useRouter();
  const vaizard = [
    {
      name: "Shinji",
      img: "https://i.pinimg.com/736x/f7/9a/e8/f79ae86d97f09ecda21e722bae1c922c.jpg",
    },
    {
      name: "Hiyori Sarugaki",
      img: "https://i.pinimg.com/736x/26/fe/86/26fe866006ba99612f2f0115a001f653.jpg",
    },
    {
      name: "Kensei",
      img: "https://i.pinimg.com/564x/a8/36/fd/a836fd5fd8e9c76e1bdb0771e084af04.jpg",
    },
    {
      name: "Rōjūrō Otoribashi",
      img: "https://i.pinimg.com/564x/bd/eb/f1/bdebf10e32474f131ec049de73cd09c9.jpg",
    },
    {
      name: "Lisa Yadomaru",
      img: "https://i.pinimg.com/736x/37/69/e3/3769e31d9401c3f59b12a8ffa12508af.jpg",
    },
    {
      name: "Mashiro",
      img: "https://i.pinimg.com/564x/4b/6f/de/4b6fde5503c5f9f4b1904c18eb7850c0.jpg",
    },
    {
      name: "Hachigen Ushoda",
      img: "https://i.pinimg.com/736x/17/eb/da/17ebdaab765a7e211bb930f8f1f799c7.jpg",
    },
    {
      name: "Love Aikawa",
      img: "https://i.pinimg.com/736x/22/de/af/22deaf7e27eb9a9624c2298e2311cbb6.jpg",
    },
    {
      name: "Ichigo",
      img: "https://i.pinimg.com/564x/1a/0b/24/1a0b24c454b19e59dbfa956f7d320f8c.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Vaizard</h1>
          <div className={scss.characters}>
          {vaizard.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vaizard;
