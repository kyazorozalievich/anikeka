"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const BlackBulls = () => {
  const router = useRouter();
  const bulls = [
    {
      name: "Yami Sukehiro",
      img: "https://i.pinimg.com/564x/cc/af/e6/ccafe69f046fad56ded58a28afd622f6.jpg",
    },
    {
      name: "Asta",
      img: "https://i.pinimg.com/564x/4b/6c/cd/4b6ccd7f9ef4443f162c1f40a710e3bf.jpg",
    },
    {
      name: "Noelle Silva ",
      img: "https://i.pinimg.com/564x/d7/64/1a/d7641a70cb494e99e125edfaae589e21.jpg",
    },
    {
      name: "Finral Roulacase ",
      img: "https://i.pinimg.com/564x/0d/27/4f/0d274f2007aa2d9db8a7a508e5867552.jpg",
    },
    {
      name: "Charmy Pappitson",
      img: "https://i.pinimg.com/564x/c1/b1/c8/c1b1c8fd969a0b4983a2723d8d17e37d.jpg",
    },
    {
      name: "Luck Voltia",
      img: "https://i.pinimg.com/564x/64/73/4b/64734ba555ef1610b57ccf67aba20c26.jpg",
    },
    {
      name: "Gordon Agrippa ",
      img: "https://i.pinimg.com/564x/0e/cb/a8/0ecba85b77fd40f91ff0c61fd97c2380.jpg",
    },
    {
      name: "Gauche Adlai ",
      img: "https://i.pinimg.com/564x/2c/a7/ce/2ca7cefc62bf8f222136d263a2ac6ef2.jpg",
    },
    {
      name: "Magna Swing ",
      img: "https://i.pinimg.com/564x/e9/23/79/e923790743b6c3d331af08f670009aef.jpg",
    },
    {
      name: "Vanessa Enoteca",
      img: "https://i.pinimg.com/564x/77/d7/77/77d7770960a2176f5e0e3c624d15aef5.jpg",
    },
    {
      name: "Zora Ideale",
      img: "https://i.pinimg.com/564x/6a/18/9b/6a189ba17d374e22381941717939441b.jpg",
    },
    {
      name: "Henry Legolant",
      img: "https://i.pinimg.com/564x/ec/cd/b0/eccdb0993c64313bf4d76c83e0d38343.jpg",
    },
    {
      name: "Nacht Faust",
      img: "https://i.pinimg.com/564x/7c/c5/4f/7cc54f236805478160c454ca4a750321.jpg",
    },
    {
      name: "Nero",
      img: "https://i.pinimg.com/564x/33/a8/6f/33a86f639389a5f5c10417ab7eff1f9a.jpg",
    },
    {
      name: "Grey",
      img: "https://i.pinimg.com/564x/c9/bf/c9/c9bfc9ab93c9b39044a62b03a573c39e.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Golden Dawn</h1>
          <div className={scss.characters}>
          {bulls.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackBulls;
