"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad3 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Rōjūrō Otoribashi",
      img: "https://i.pinimg.com/736x/0f/e7/49/0fe7494e9f2297f32149aace29e8c2c8.jpg",
    },
    {
      name: "Izuru Kira",
      img: "https://i.pinimg.com/564x/4e/b1/ff/4eb1ff85ce5dde69f864696b4a2924d2.jpg",
    },
    {
      name: "Aida",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/c/c7/Ep172AidaProfile.png/revision/latest?cb=20190120095112&path-prefix=ru",
    },
    {
      name: "Kano",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/1/17/Kano.jpg/revision/latest?cb=20120410221634&path-prefix=ru",
    },
    {
      name: "Inose",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/a/a0/Inose.jpg/revision/latest?cb=20120410221833&path-prefix=ru",
    },
    {
      name: "Izuhara",
      img: "https://static.wikia.nocookie.net/bleach/images/2/2e/Kinroku_Izuhara_P.P.png/revision/latest?cb=20221128222118&path-prefix=es",
    },
    {
      name: "Ichimaru Gin",
      img: "https://i.pinimg.com/736x/3b/1d/97/3b1d97a512980b165a30ad82da3a2f9b.jpg",
    },
    {
      name: "Amagai",
      img: "https://i.pinimg.com/564x/17/5e/85/175e8577160a9ce5bebba85c939c81ae.jpg",
    },
    {
      name: "Makoto",
      img: "https://i.pinimg.com/564x/6b/5a/00/6b5a0055b4c668cbf817e51a5107bbd7.jpg",
    },
    {
      name: "Chikane Iba",
      img: "https://i.pinimg.com/originals/d4/10/48/d4104877d581b963d77641fbec805133.jpg",
    },
    {
      name: "Rikuu",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/c/cc/2022-11-04_21-07-39.jpg/revision/latest?cb=20221104154914&path-prefix=ru",
    },
   
    {
      name: "Asuka Katakura",
      img: "https://i.pinimg.com/736x/c6/9e/e6/c69ee650dbd74e309e29112a0b49a5df.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 3</h1>
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

export default Squad3;
