"use client";
import Image from "next/image";
import scss from "./BlockCard.module.scss";

interface ICharacter {
  name: string;
  img: string;
}

interface IBlock {
  el: ICharacter;
}

const BlockCard = ({ el }: IBlock) => {
  return (
    <section className={scss.block}>
      <Image src={el.img} alt="" width={210} height={250} quality={100}/>
      <h2>
        {el.name.length > 16 ? el.name.substring(0, 16) + "..." : el.name}
      </h2>
    </section>
  );
};

export default BlockCard;
