"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const TokyoJujutsu = () => {
  const router = useRouter();
  const tokyo = [
    {
      name: "Gojo Satoru",
      img: "https://i.pinimg.com/736x/1b/46/5c/1b465c5ae88d68367da49d4968091415.jpg",
    },
    {
      name: "Nanami Kento",
      img: "https://i.pinimg.com/736x/03/c7/12/03c712ea3a15703d9e307a6168a3389d.jpg",
    },
    {
      name: "Masamichi",
      img: "https://i.pinimg.com/564x/83/18/90/831890a6874cf6d525fb81f7aefa943a.jpg",
    },
    {
      name: "Akari Nitta",
      img: "https://i.pinimg.com/564x/5f/0c/d8/5f0cd8da94efcd51055c12708be9f31f.jpg",
    },
    {
      name: "Atsuya",
      img: "https://i.pinimg.com/564x/9c/fa/07/9cfa071ccd9980d543dfc74f85a32a67.jpg",
    },
    {
      name: "Kiyotaka",
      img: "https://i.pinimg.com/564x/17/44/bc/1744bc9e5f7ac5f84cf43da391b39787.jpg",
    },
    {
      name: "Yuji Itodori",
      img: "https://i.pinimg.com/736x/55/37/6d/55376d7b8018f418ab6afbd0a4b2c574.jpg",
    },
    {
      name: "Megumi",
      img: "https://i.pinimg.com/736x/f9/61/cd/f961cdd00cca5f29e4eb8cdb70f7f3a0.jpg",
    },
    {
      name: "Nobara",
      img: "https://i.pinimg.com/736x/bf/81/a5/bf81a57b6e70e9aa5f79e07dc71ba0e2.jpg",
    },
    {
      name: "Panda",
      img: "https://i.pinimg.com/736x/b7/2e/01/b72e01c1b37380ea961828b1dd8f02a5.jpg",
    },
    {
      name: "Toge Inumaki",
      img: "https://i.pinimg.com/564x/a6/70/9a/a6709a243c5cfbbe7ecebbdcbf744fa3.jpg",
    },
    {
      name: "Maki",
      img: "https://i.pinimg.com/564x/3d/87/6c/3d876c685a49308abba6ec55cd76a35d.jpg",
    },
    {
      name: "Yuta",
      img: "https://i.pinimg.com/736x/d3/d5/47/d3d547287fab24964af74b4f4aca2bac.jpg",
    },
    {
      name: "Shoko",
      img: "https://i.pinimg.com/564x/b7/53/8f/b7538fd90b2053492ffe569b8cf151a7.jpg",
    },

    {
      name: "Hakari",
      img: "https://i.pinimg.com/736x/37/6e/02/376e02de0c979591ed5690b4b98f6457.jpg",
    },
    {
      name: "Kirara Hoshi",
      img: "https://i.pinimg.com/736x/cf/58/98/cf5898ead471b89858ac98dc95a04769.jpg",
    },
    {
      name: "Haibara Yu",
      img: "https://i.pinimg.com/736x/f2/0b/50/f20b509dd5c732824ee2181a88e1c1a2.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/jujutsu")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Tokyo Jujutsu</h1>
          <div className={scss.characters}>
          {tokyo.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokyoJujutsu;
