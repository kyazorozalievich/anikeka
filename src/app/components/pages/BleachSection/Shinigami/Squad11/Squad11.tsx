"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad11 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Zaraki Kenpachi",
      img: "https://i.pinimg.com/564x/9b/f5/4e/9bf54e1a9106cb4653ed2b06c3594787.jpg",
    },

    {
      name: "Unohana Kenpachi",
      img: "https://i.pinimg.com/originals/9d/85/4c/9d854cf24876d679841e30e130097875.jpg",
    },
    {
      name: "Kuruyashiki Kenpachi",
      img: "https://i.pinimg.com/736x/dc/64/3d/dc643dc6b17cc133f42d333647adf510.jpg",
    },
    {
      name: "Azashiro Kenpachi",
      img: "https://i.pinimg.com/originals/fd/69/63/fd6963287fae545b5b41e3e64aa7c142.jpg",
    },
    {
      name: " Kiganjou Kenpachi ",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/8/8c/%D0%91%D0%BB%D0%B8%D1%87_17_%D1%81%D0%B5%D0%B7%D0%BE%D0%BD_10_%D1%81%D0%B5%D1%80%D0%B8%D1%8F.mp43093.jpg/revision/latest?cb=20221213143520&path-prefix=ru",
    },

    {
      name: "Ikkaku",
      img: "https://i.pinimg.com/564x/73/bb/e3/73bbe32fa57df523f3bcf197a14e6211.jpg",
    },
    {
      name: "Yumichika Ayasegawa",
      img: "https://i.pinimg.com/736x/99/2f/5a/992f5a843cb47c8edc2d89b28086ae57.jpg",
    },
    {
      name: "Yachiru",
      img: "https://i.pinimg.com/originals/41/66/8e/41668e74e4602212e000a355ff342ea6.jpg",
    },
    {
      name: "Tetsuzaemon Iba",
      img: "https://i.pinimg.com/736x/92/39/71/92397196484187ea54c0dd99c0b36b2b.jpg",
    },
    {
      name: "Abarai",
      img: "https://i.pinimg.com/564x/56/9f/79/569f79262cc3064b8bf8a4e18da94be0.jpg",
    },
    {
      name: "Maki Ichinose",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/f/f6/Ep76MakiIchinose.png/revision/latest?cb=20190224160422&path-prefix=ru",
    },
  
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 11</h1>
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

export default Squad11;
