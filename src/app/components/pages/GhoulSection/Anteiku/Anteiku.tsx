"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Anteiku = () => {
  const router = useRouter();

  const anteiku = [
    {
      name: "Youshimura",
      img: "https://i.pinimg.com/736x/46/83/98/4683983f3575a3c57ea22187d72b27e2.jpg",
    },
    {
      name: "Kaneki Kun",
      img: "https://i.pinimg.com/564x/77/6c/94/776c94d19031c0631695eabc5bdeea88.jpg",
    },
    {
      name: "Touka Kirishima",
      img: "https://i.pinimg.com/564x/01/bf/df/01bfdf82be021af41d4d5f7cadc7b080.jpg",
    },
    {
      name: "Nishiki",
      img: "https://i.pinimg.com/564x/3c/94/1f/3c941f5a82905def261f6485dd85f2db.jpg",
    },
    {
      name: "Hinami",
      img: "https://i.pinimg.com/564x/a3/97/44/a39744f8afc25a766202424e7de809a8.jpg",
    },

    {
      name: "Renji Youmo",
      img: "https://i.pinimg.com/564x/22/fe/c3/22fec3142f6acbd3a4f1783b66126856.jpg",
    },

    {
      name: "Koma Enji",
      img: "https://i.pinimg.com/564x/5d/53/2e/5d532ef3cb87cc5e1f958b4e68fd0601.jpg",
    },

    {
      name: "Kaya Irimi",
      img: "https://i.pinimg.com/564x/ad/53/1a/ad531a70bfc489a5fc7e968256330729.jpg",
    },

   
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/ghoul")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>ANTEIKU</h1>
          <div className={scss.characters}>
          {anteiku.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anteiku;
