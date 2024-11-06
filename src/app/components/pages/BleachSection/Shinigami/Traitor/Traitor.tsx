"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Traitor = () => {
  const router = useRouter();
  const traitor = [
    {
      name: "Oko Yushima",
      img: "https://i.pinimg.com/736x/48/9b/11/489b1194f380de928cf1f865c4759072.jpg",
    },
   
    {
      name: "Ichimaru Gin",
      img: "https://i.pinimg.com/736x/3b/1d/97/3b1d97a512980b165a30ad82da3a2f9b.jpg",
    },
    {
      name: "Amagai",
      img: "https://i.pinimg.com/564x/17/5e/85/175e8577160a9ce5bebba85c939c81ae.jpg",
    },
    {
      name: "Makoto",
      img: "https://i.pinimg.com/564x/6b/5a/00/6b5a0055b4c668cbf817e51a5107bbd7.jpg",
    },
    {
      name: "Aizen",
      img: "https://i.pinimg.com/736x/2b/fb/d7/2bfbd743c566674f791e036c05087e60.jpg",
    },
   
    {
      name: "Tousen Kaname",
      img: "https://i.pinimg.com/736x/a5/ed/cc/a5edcc36643ecdcbd0dc3fc54be9a145.jpg",
    },
    {
      name: "Koga Kuchiki",
      img: "https://i.pinimg.com/564x/97/7f/b0/977fb0358d2f614adcb3dad893c9aa4d.jpg",
    },
    {
      name: "Maki Ichinose",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/f/f6/Ep76MakiIchinose.png/revision/latest?cb=20190224160422&path-prefix=ru",
    },
    {
      name: "Seizo",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/d/d7/Ep313SeizoProfile.png/revision/latest?cb=20190311143747&path-prefix=ru",
    },
    {
      name: "Kageroza",
      img: "https://i.pinimg.com/736x/ad/8d/d3/ad8dd34f8384cf61e4267ba2d5cfab51.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Traitor </h1>
          <div className={scss.characters}>
          {traitor.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traitor;
