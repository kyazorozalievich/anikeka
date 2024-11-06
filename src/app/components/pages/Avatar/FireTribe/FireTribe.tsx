"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const FireTribe = () => {
  const router = useRouter();
  const firetribe = [
    {
      name: "Azulon",
      img: "https://i.pinimg.com/564x/c1/a9/d8/c1a9d836efd016f7b9de116c987c1229.jpg",
    },
    {
      name: "Ozai",
      img: "https://i.pinimg.com/736x/ae/03/60/ae0360cc8ee7009906ee7eb3e2c2f55e.jpg",
    },
    {
      name: "Zoko",
      img: "https://i.pinimg.com/736x/2d/47/bb/2d47bb6f8477068c174af1cc667cc7d9.jpg",
    },
    {
      name: "Azula",
      img: "https://i.pinimg.com/736x/a1/4a/89/a14a89835f3472b2d22c26a026b1aa4e.jpg",
    },
    {
      name: "June",
      img: "https://i.pinimg.com/736x/1b/ce/8b/1bce8bd21224ce2345cfa623d1818e93.jpg",
    },
    {
      name: "Izumi",
      img: "https://i.pinimg.com/564x/5b/6f/43/5b6f4383bc123700ce1675c08f8d6cbd.jpg",
    },
    {
      name: "Zhao",
      img: "https://i.pinimg.com/564x/c1/70/fd/c170fdaa1054d8c94d4d3d91065985b2.jpg",
    },
    {
      name: "Iron",
      img: "https://i.pinimg.com/736x/d4/79/f3/d479f3c5f849b57d4c5bb28c9b7c8881.jpg",
    },
    {
      name: "Szeto",
      img: "https://i.pinimg.com/564x/1e/38/e0/1e38e064833f0970e1a08ed652bea36f.jpg",
    },
    {
      name: "Ty Lee",
      img: "https://i.pinimg.com/736x/a9/16/31/a9163103837fa056605bdacd8a9acf7a.jpg",
    },
    {
      name: "Mai",
      img: "https://i.pinimg.com/736x/fa/a5/6c/faa56c6cd87de62f3d50836fd2d8db54.jpg",
    },
    {
      name: "Roku",
      img: "https://i.pinimg.com/564x/49/a5/6a/49a56a7a65639c13311efe5a75146639.jpg",
    },
    {
      name: "Ursa",
      img: "https://i.pinimg.com/736x/d8/2e/53/d82e53bd64efeb4e75a03b7a73043cea.jpg",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "",
      img: "",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/avatar")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Tribe Fire</h1>
          <div className={scss.characters}>
          {firetribe.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireTribe;
