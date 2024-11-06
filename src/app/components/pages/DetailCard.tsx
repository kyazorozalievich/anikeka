"use client";
import { useRouter } from "next/navigation";
import scss from "./DetailCard.module.scss";
import Image from "next/image";

interface ICharacter {
  title: string;
  img: string;
  href: string;
}

interface IBlock {
  el: ICharacter;
}

const DetailCard = ({ el }: IBlock) => {
  const router = useRouter();
  return (
    <div className={scss.block} onClick={() => router.push(`${el.href}`)}>
      <div className={scss.bg}></div>
      <Image src={el.img} alt="" width={350} height={200}/>
      <h2>{el.title}</h2>
    </div>
  );
};

export default DetailCard;
