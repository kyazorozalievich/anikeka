"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const EarthTribe = () => {
  const router = useRouter();
  const earthtribe = [
    {
      name: "Toph Beifong ",
      img: "https://i.pinimg.com/564x/b5/18/7f/b5187fcdfd6389c359c75a9f17eb8f1b.jpg",
    },
    {
      name: "King Bumi",
      img: "https://i.pinimg.com/564x/12/7e/63/127e634a4c9462e407662dbbb8eeac73.jpg",
    },
    {
      name: "Long Feng",
      img: "https://i.pinimg.com/564x/94/d4/fc/94d4fc34bb2dd4a47999caa09ca67e6a.jpg",
    },
    {
      name: "The Dai Li",
      img: "https://i.pinimg.com/564x/13/99/a6/1399a6f44f4eecc775dd20f3f10c520a.jpg",
    },
    {
      name: "Haru",
      img: "https://i.pinimg.com/564x/fb/e7/f6/fbe7f67f7e14c0f3960a7844ba199ede.jpg",
    },
    {
      name: "Jet",
      img: "https://i.pinimg.com/564x/8a/1b/7e/8a1b7e8823de94bb91e909d9d977751f.jpg",
    },
    {
      name: "Kyoshi",
      img: "https://i.pinimg.com/736x/f6/de/66/f6de66b01c131cf0d7843520ae9e5a5f.jpg",
    },

    {
      name: "Lin Beifong",
      img: "https://i.pinimg.com/736x/36/d5/e9/36d5e97e3f58c91fc9647878716dd1be.jpg",
    },
    {
      name: "Asami Sato",
      img: "https://i.pinimg.com/564x/03/57/33/035733d9032e6817a159bd9a5c1726c5.jpg",
    },
    {
      name: "Jin Wei",
      img: "https://i.pinimg.com/564x/76/c0/2b/76c02b5ecc859ef50ebdfa092be47bcd.jpg",
    },
    {
      name: "The Boulder",
      img: "https://i.pinimg.com/564x/93/b8/c6/93b8c662a20bcb00f6b0d46e36e70293.jpg",
    },
    {
      name: "Bolin",
      img: "https://i.pinimg.com/564x/17/b5/c5/17b5c558b4fd26a5ca1e79a556b3768d.jpg",
    },
    {
      name: "The Kyoshi Warriors",
      img: "https://i.pinimg.com/564x/f4/dd/b2/f4ddb294aeedb90b83003b83d7cbf5ad.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/avatar")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Tribe Earth</h1>
          <div className={scss.characters}>
          {earthtribe.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthTribe;
