"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Brahman = () => {
  const router = useRouter();
  const brahman = [
    {
      name: "Takeomi",
      img: "https://desu.shikimori.one/system/user_images_h/original/da696a15ea6a729ceb83c7f9/e58c242a21ff27946751449ca8f58b3ae6187f6e18d480917610823d824a31d3.jpg",
    },
    {
      name: "Sendju",
      img: "https://i.pinimg.com/236x/9b/51/a9/9b51a9f8f3a539adf5cc3558f625f557.jpg",
    },
    {
      name: "Vakasa",
      img: "https://i.pinimg.com/236x/9c/ca/b8/9ccab8fa34a4a1ae83bbe3e4bf5e7f5e.jpg",
    },
    {
      name: "Keizo",
      img: "https://i.pinimg.com/564x/ac/d8/6d/acd86d959c1502988c5b545414d7cde0.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/revengers")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>VALHALLA</h1>
          <div className={scss.characters}>
          {brahman.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Brahman;
