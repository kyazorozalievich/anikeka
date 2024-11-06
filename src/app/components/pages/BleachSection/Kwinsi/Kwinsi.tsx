"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Kwinsi = () => {
  const router = useRouter();
  const kwinsi = [
    {
      name: "Yhwach",
      img: "https://i.pinimg.com/736x/8a/0d/9d/8a0d9dbe32a9f82a1757ee1756e6fec8.jpg",
    },

    {
      name: "(A) Uryu Ishida",
      img: "https://i.pinimg.com/564x/f8/7f/53/f87f5353125c68476902238c7ce8b3c5.jpg",
    },

    {
      name: "(B) Jugram Haschwalth",
      img: "https://i.pinimg.com/564x/91/4a/9f/914a9f4c179798bfe8892cfe72442783.jpg",
    },
    {
      name: "(C) Pernida Parnkgjas",
      img: "https://i.redd.it/563yqralqs9d1.jpeg",
    },
    {
      name: "(D) Askin Nakk Le Vaar",
      img: "https://i.pinimg.com/564x/79/f2/41/79f2418831875773e58154071574e9df.jpg",
    },
    {
      name: "(E) Bambietta Basterbine",
      img: "https://i.pinimg.com/736x/72/81/97/728197519c3782a7b4cb2f675efe41b8.jpg",
    },
    {
      name: "(F) As Nodt",
      img: "https://i.pinimg.com/564x/53/98/f2/5398f2604023f4f079e4581bfe96139b.jpg",
    },
    {
      name: "(G) Liltotto Lamperd",
      img: "https://i.pinimg.com/564x/3c/76/a7/3c76a767fee7024d8641173e299757b3.jpg",
    },
    {
      name: "(H) Bazz-B",
      img: "https://i.pinimg.com/736x/1f/59/b1/1f59b1c7b2e73672a0f0955dd77ef206.jpg",
    },
    {
      name: "(I) Cang Du",
      img: "https://i.pinimg.com/564x/e9/36/98/e93698edeaf634515a4fa18703908f4c.jpg",
    },
    {
      name: "(J) Opi",
      img: "https://i.pinimg.com/564x/67/49/20/67492037423a1d191a27846dd3041990.jpg",
    },
    {
      name: "(K) BG9",
      img: "https://i.pinimg.com/564x/67/87/ed/6787eda48c4ffd74791359f009a4bdad.jpg",
    },
    {
      name: "(L) Pepe Waccabrada",
      img: "https://fanfics.me/images/fandoms_heroes/13166-1564413548.jpg",
    },
    {
      name: "(M) Gerard Valkyrie",
      img: "https://i.pinimg.com/564x/25/2c/fe/252cfe3c5ef746da73bc3586dd24c9f3.jpg",
    },
    {
      name: "(N) Robert Accutron",
      img: "https://i.pinimg.com/564x/f8/fe/29/f8fe29e590030b0fa0846a80a5c655a4.jpg",
    },
    {
      name: "(O) Driscoll Berci ",
      img: "https://i.pinimg.com/564x/fe/88/e1/fe88e1bac32139f8d6306d180db0716b.jpg",
    },
    {
      name: "(P) Meninas McAllon",
      img: "https://i.pinimg.com/564x/4d/71/e6/4d71e6cf3b07b8fa845f23c0a0c77901.jpg",
    },
    {
      name: "(Q) Berenice Gabrielli",
      img: "https://i.pinimg.com/564x/6e/ea/d7/6eead76691e0e50304f80087734a106f.jpg",
    },
    {
      name: "(R) Jerome Guisbutt",
      img: "https://i.pinimg.com/564x/37/be/a1/37bea11584e853bded0c0ece76f72287.jpg",
    },
    {
      name: "(S) Mask de Masculine",
      img: "https://i.pinimg.com/564x/23/a8/e2/23a8e24c2de973ba69ad247d9016ca1f.jpg",
    },
    {
      name: "(T) Candice Catnipp",
      img: "https://i.pinimg.com/564x/cc/0b/d7/cc0bd7d126c33d3e7e53116120cee1c6.jpg",
    },
    {
      name: "(U) NaNaNa Najahkoop",
      img: "https://i.pinimg.com/564x/7a/e7/03/7ae703077880f1acbd52a93bd8fee31c.jpg",
    },
    {
      name: "(V) Gremmy Thoumeau",
      img: "https://i.pinimg.com/564x/53/43/19/534319e703c9311f4b00a2f4ffcbe79d.jpg",
    },
    {
      name: "(W) Nianzol Weizol ",
      img: "https://i.pinimg.com/564x/11/1a/44/111a448edc53159a6960f287386d670d.jpg",
    },
    {
      name: "(X) Lilje Barrot •",
      img: "https://i.pinimg.com/564x/fb/32/e0/fb32e0af6c951b3f3cd20cab406e922c.jpg",
    },
    {
      name: "(Y) Loyd Lloyd ",
      img: "https://i.pinimg.com/564x/01/e8/7f/01e87f2708e73e45be04d179d802537f.jpg",
    },
    {
      name: "(Z) Giselle Gewelle",
      img: "https://i.pinimg.com/564x/7b/0e/87/7b0e87449f2d586af5ab15697101ca20.jpg",
    },
    {
      name: "Shaz Domino",
      img: "https://sun9-80.userapi.com/impg/eUfL8imNPL64sGeNQj0QeNq1Ib9YdgU-EVixlQ/Vgo7ikBXNvs.jpg?size=510x469&quality=96&sign=c0cc2ad9e89aad3c3a44d238d86a27d7&type=album",
    },
    {
      name: "Gwenael Lee",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/9/98/18%D1%8520999.JPG/revision/latest?cb=20230820044911&path-prefix=ru",
    },

    {
      name: "Ryuken ishida",
      img: "https://i.pinimg.com/564x/d6/9d/21/d69d218adec55c0fb59e317f58eb77c6.jpg",
    },
    {
      name: "Soken Ishida",
      img: "https://i.pinimg.com/564x/4e/73/c5/4e73c56fd59a8abc70d0d5267c55cb21.jpg",
    },
    {
      name: "Katagiri Ishida",
      img: "https://i.pinimg.com/564x/6f/e0/bf/6fe0bf202b938e9af8326bd5f829453c.jpg",
    },
    {
      name: "Masaki Kurosaki",
      img: "https://i.pinimg.com/564x/b6/26/c9/b626c9541219111a3d8a92a50b670cf5.jpg",
    },
    {
      name: "Ichigo Kurosaki",
      img: "https://i.pinimg.com/736x/68/dc/bb/68dcbb94465935a74d874f349a8f0a48.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Kwinsi</h1>
          <div className={scss.characters}>
          {kwinsi.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kwinsi;
