"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad5 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Shindji Hirako",
      img: "https://i.pinimg.com/564x/6b/d7/33/6bd733fd0a951dbf7bf83284f6af6f38.jpg",
    },
    {
      name: "Momo Hinamori",
      img: "https://i.pinimg.com/736x/32/96/5a/32965ae20d085225b6de2af5d8e95503.jpg",
    },
    {
      name: "Danjiro Obana",
      img: "https://i.pinimg.com/564x/19/8c/c6/198cc6bc11a1283f30fb3397eb9c2110.jpg",
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
      name: "Gin Ichimaru",
      img: "https://i.pinimg.com/564x/02/07/e2/0207e2a721560fc8c2547bbfda468449.jpg",
    },
    {
      name: "Renji Abarai",
      img: "https://i.pinimg.com/736x/2b/37/cf/2b37cf77892cdb17adfd5575f4a67bd8.jpg",
    },
    {
      name: "Seigen",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/9/97/Seigen.JPG/revision/latest?cb=20121124124852&path-prefix=ru",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 5</h1>
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

export default Squad5;
