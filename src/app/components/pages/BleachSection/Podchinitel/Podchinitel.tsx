"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Podchinitel = () => {
  const router = useRouter();
  const podchinitel = [
    {
      name: "Kugo Gindjou",
      img: "https://i.pinimg.com/564x/4b/7f/f5/4b7ff5eeab17392cafbd0be96d7abad8.jpg",
    },
    {
      name: "Shukuro Tsukishima",
      img: "https://i.pinimg.com/564x/06/c9/84/06c984b71422559d1a5ca3ac5727a1b1.jpg",
    },
    {
      name: "Kutsuzawa Giriko",
      img: "https://i.pinimg.com/564x/7f/fd/1e/7ffd1ee8f64a530c2d96b81c88ad33c9.jpg",
    },
    {
      name: "Ririko",
      img: "https://i.pinimg.com/564x/18/98/4d/18984daf140d625ef60f56c1d50a0769.jpg",
    },
    {
      name: "Ykuo",
      img: "https://i.pinimg.com/564x/6c/70/43/6c70439d59df6b18619175cac5aa84d2.jpg",
    },
    {
      name: "Tristan Jakie ",
      img: "https://i.pinimg.com/564x/bb/10/d9/bb10d9545ffa66c81169a44093bfc8d4.jpg",
    },
    {
      name: "Ichigo",
      img: "https://i.pinimg.com/564x/39/df/26/39df26b80c445a0e1c1661e77e07026e.jpg",
    },
    {
      name: "Chad Sado",
      img: "https://i.pinimg.com/564x/ca/5e/89/ca5e894311c6d0a71490c593009c0654.jpg",
    },
    {
      name: "Orihime",
      img: "https://i.pinimg.com/736x/37/b9/32/37b932e584c61645905d55f1bb00df7d.jpg",
    },
    {
      name: "Shishigavara",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/e/e7/Ep349ShishigawaraProfile3.png/revision/latest?cb=20120410213221&path-prefix=ru",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Podchinitel</h1>
          <div className={scss.characters}>
          {podchinitel.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podchinitel;
