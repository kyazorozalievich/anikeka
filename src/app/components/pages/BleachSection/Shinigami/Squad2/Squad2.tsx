"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad2 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Soi Fon",
      img: "https://i.pinimg.com/564x/05/8f/0f/058f0f8fd8ba54c2db5df161c3533100.jpg",
    },
    {
      name: "Omaeda",
      img: "https://i.pinimg.com/564x/06/c9/8d/06c98d1968e2546b0988f29ee24c3f90.jpg",
    },
    {
      name: "Chika Shihoin",
      img: "https://i.pinimg.com/564x/d1/89/9b/d1899b7e73bd02745b0491b98de2495a.jpg",
    },
    {
      name: "Yoruichi Shihoin",
      img: "https://i.pinimg.com/736x/60/76/49/607649d231246391b28c2d82886c4286.jpg",
    },
    {
      name: "Marenoshin Omaeda",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/3/34/MASKEDLieutenant_Marenoshin.png/revision/latest?cb=20190311143419&path-prefix=ru",
    },
    {
      name: "Kisuke Urahara",
      img: "https://i.pinimg.com/736x/95/5d/25/955d2549ce8bcdc9a84721843ab5684e.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 2</h1>
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

export default Squad2;
