"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const GreenMantis = () => {
  const router = useRouter();
  const mantis = [
    {
      name: "Jack the Ripper ",
      img: "https://i.pinimg.com/564x/ff/64/ae/ff64aec25b0250ac9bc4c0d812270b9c.jpg",
    },
    {
      name: "Sekke Bronzazza ",
      img: "https://i.pinimg.com/564x/de/84/25/de8425d35a8408cd30a32a0006c6aae4.jpg",
    },
    {
      name: "En Ringard ",
      img: "https://cdn.anisearch.de/images/character/cover/88/88488_400.webp",
    },
  ]

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Green Mantis</h1>
          <div className={scss.characters}>
          {mantis.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenMantis;
