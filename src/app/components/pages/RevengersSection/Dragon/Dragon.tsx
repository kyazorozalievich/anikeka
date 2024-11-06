"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Dragon = () => {
  const router = useRouter();
  const dragon = [
    {
      name: "Shinichiro",
      img: "https://i.pinimg.com/474x/62/ac/ec/62acecabd55db9eb5120784913d89627.jpg",
    },
    {
      name: "Izana",
      img: "https://i.pinimg.com/474x/cd/17/f8/cd17f857ce45d84cc18f818d2ad04b06.jpg",
    },
    {
      name: "Shion",
      img: "https://i.pinimg.com/236x/ba/b9/d0/bab9d096ab00af0473c5dac2b0e23ad8.jpg",
    },
    {
      name: "Djunpeke",
      img: "https://i.pinimg.com/564x/77/ff/b8/77ffb855b4914627e391ec139a38fada.jpg",
    },
    {
      name: "Taidju",
      img: "https://i.pinimg.com/564x/5d/70/83/5d70835af72eae8ada03cbce1ddcb72a.jpg",
    },
    {
      name: "Kokonoi",
      img: "https://sticker-collection.com/stickers/plain/Hajime_Kokonoi_anime/thumbs/d4064b56-9bbb-41dc-905a-5c7e8867736cfile_4224167.webp",
    },
    {
      name: "Seishu",
      img: "https://i.pinimg.com/564x/9a/2b/87/9a2b870977d0cdbc0a773832b1853da2.jpg",
    },
    {
      name: "Hakkai",
      img: "https://i.pinimg.com/564x/6c/57/7b/6c577b8c39b57d4a589147b22bfe6285.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/revengers")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>BLACK DRAGON</h1>
          <div className={scss.characters}>
          {dragon.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Dragon;
