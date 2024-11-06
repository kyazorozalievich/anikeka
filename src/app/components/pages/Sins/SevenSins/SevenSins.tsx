"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const SevenSins = () => {
  const router = useRouter();
  const sins = [
    {
      name: "Meliodas",
      img: "https://i.pinimg.com/564x/fe/a1/54/fea154e9752abe768a98afaaa9aace88.jpg",
    },
    {
      name: "Diane",
      img: "https://i.pinimg.com/736x/33/4f/2e/334f2e7f3026ddb6e2d81ec10414bf4a.jpg",
    },
    {
      name: "Ban",
      img: "https://i.pinimg.com/564x/46/f6/bb/46f6bbb27c5b951a484845f452815163.jpg",
    },
    {
      name: "King",
      img: "https://i.pinimg.com/736x/3e/8b/3a/3e8b3ae1a5a68e3cd14cbdf7623f3ead.jpg",
    },
    {
      name: "Gowther",
      img: "https://i.pinimg.com/564x/4d/21/fe/4d21fec21080fd7348230ca056a05b4c.jpg",
    },
    {
      name: "Merlin",
      img: "https://i.pinimg.com/564x/bd/a5/df/bda5df1c20b5b6a0f2051a4abca8f993.jpg",
    },
    {
      name: "Escanor",
      img: "https://i.pinimg.com/564x/3b/bc/6a/3bbc6abab6743987edf7ba68e0515ef1.jpg",
    },
  ]

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/sins")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Seven Sins</h1>
          <div className={scss.characters}>
          {sins.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SevenSins;
