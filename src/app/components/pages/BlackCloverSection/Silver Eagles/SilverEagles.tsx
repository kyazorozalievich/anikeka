"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const SilverEagles = () => {
  const router = useRouter();
  const eagles = [
    {
      name: "Nozel Silva ",
      img: "https://i.pinimg.com/564x/2c/0b/4f/2c0b4f73235a5de9a85d539a9c39be22.jpg",
    },
    {
      name: "Solid Silva",
      img: "https://i.pinimg.com/564x/f4/21/cb/f421cba3aadcc46bc4e2e3f4e191dd61.jpg",
    },
    {
      name: "Nebra Silva",
      img: "https://i.pinimg.com/564x/7b/42/1f/7b421fc695a4e3388d60f93e8351c6b6.jpg",
    },
    {
      name: "Acier Silva",
      img: "https://i.pinimg.com/564x/fd/31/03/fd3103cfcc00b540305f9ba8b6a4538b.jpg",
    },
    {
      name: "Nils Ragus",
      img: "https://desu.shikimori.one/uploads/poster/characters/162621/main_alt-703164790110ee85fcb8ea9e5bebb5cf.jpeg",
    },
    {
      name: "Rob Vitesse",
      img: "https://shikimori.one/system/characters/original/161833.jpg",
    },
   
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Silver Eagles</h1>
          <div className={scss.characters}>
          {eagles.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverEagles;
