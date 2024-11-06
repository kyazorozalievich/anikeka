"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const KiotoJujutsu = () => {
  const router = useRouter();
  const kioto = [
    {
      name: " Yoshinobu Gakuganji ",
      img: "https://i.pinimg.com/736x/1a/ab/9b/1aab9b5ec33a3e7280d4393af124bdf0.jpg",
    },
    {
      name: " Utahime Iori ",
      img: "https://i.pinimg.com/564x/4b/e7/7e/4be77e641cee37596b9e7ec2163fb52f.jpg",
    },
    {
      name: "Arata Nitta ",
      img: "https://i.pinimg.com/564x/ec/ab/3c/ecab3c33efe021a88cff11371a9b6e71.jpg",
    },
    {
      name: "Mai Zenin",
      img: "https://i.pinimg.com/564x/3c/69/91/3c6991f88fb8c465ca6972312d2e14f2.jpg",
    },
    {
      name: " Kokichi Muta",
      img: "https://i.pinimg.com/564x/93/31/db/9331dbaed8de5bd836a569d20990c464.jpg",
    },
    {
      name: "Kasumi Miwa ",
      img: "https://i.pinimg.com/564x/ef/24/93/ef2493475805a599513f3d0e7252e1fb.jpg",
    },
    {
      name: " Noritoshi Kamo",
      img: "https://i.pinimg.com/564x/15/0e/93/150e936f02d122b59763d81c656408f7.jpg",
    },
    {
      name: "Aoi Todo",
      img: "https://i.pinimg.com/564x/87/cb/28/87cb28b77d89eb2d0ec4720a3b77f875.jpg",
    },
    {
      name: "Mei Mei",
      img: "https://i.pinimg.com/564x/ac/20/5b/ac205bcdd3e76609912b3694553205c8.jpg",
    },
    {
      name: "Nishimiya Momo",
      img: "https://i.pinimg.com/564x/6a/da/e2/6adae2874c4a0607f4f1f6344f4c8d8b.jpg",
    },
    
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/jujutsu")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Kioto Jujutsu</h1>
          <div className={scss.characters}>
          {kioto.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KiotoJujutsu;
