"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Zanpakto = () => {
  const router = useRouter();
  const zanpakto = [
    {
      name: "Muramasa",
      img: "https://i.pinimg.com/564x/ca/77/34/ca77349ee32c5a5622216d95b3bdb918.jpg",
    },
    // {
    //   name: "Zabimaru",
    //   img: "https://i.pinimg.com/564x/1e/6d/83/1e6d833cb2ed87e66273facc7c4d66d8.jpg",
    // },
    // {
    //   name: "Sode No Shirayuki",
    //   img: "https://i.pinimg.com/564x/ea/9e/f7/ea9ef73a5d00b74c2a005b3c73a61a34.jpg",
    // },
    // {
    //   name: "Senbonzakura",
    //   img: "https://i.pinimg.com/564x/59/4d/eb/594deb9dc1f070ad6f3007242dec0ffb.jpg",
    // },
    {
      name: "Hyorinmaru",
      img: "https://i.pinimg.com/564x/a9/b8/cc/a9b8cc029c025b255887b1da1c5f0bf5.jpg",
    },
    {
      name: "Sōgyo no Kotowari",
      img: "https://i.pinimg.com/564x/65/42/74/65427485e459eb6c450f18738c09f371.jpg",
    },
    {
      name: "Kokujo Tengen",
      img: "https://i.pinimg.com/564x/88/f1/15/88f115083f2d9467d0aad79b2dcc6749.jpg",
    },
    {
      name: "Kazeshini",
      img: "https://i.pinimg.com/564x/69/5f/15/695f15178e7e571c122dd1b4c9177b22.jpg",
    },
    {
      name: "Wabisuke",
      img: "https://i.pinimg.com/564x/1c/a9/cf/1ca9cf93552c2713986c344f063e451c.jpg",
    },
    {
      name: "Sode no Shirayuki",
      img: "https://i.pinimg.com/736x/3f/2f/1c/3f2f1c48760970f777e5838c42e3bec4.jpg",
    },
    {
      name: "Zangetsu",
      img: "https://i.pinimg.com/564x/cf/66/5f/cf665fbf082894d1cea4d224f5992617.jpg",
    },
    {
      name: "Ashisogijizou",
      img: "https://i.pinimg.com/564x/1f/da/4c/1fda4cf9dad05f2e12a1823619ed72b2.jpg",
    },
    {
      name: "Minazuki",
      img: "https://i.pinimg.com/564x/11/a1/96/11a1960580b1cceb7a9598ecba96407c.jpg",
    },
    {
      name: "Senbonzakura",
      img: "https://i.pinimg.com/564x/b4/0b/ca/b40bca9849bf5e23111a6d11be033cc3.jpg",
    },
    {
      name: "Tobiume",
      img: "https://i.pinimg.com/564x/b8/bd/fc/b8bdfc26390520cfe1075fd276591edf.jpg",
    },
    {
      name: "Katen Kyokotsu",
      img: "https://i.pinimg.com/564x/f6/d2/3d/f6d23d4433721c3480e90d84bf1fc4ab.jpg",
    },
    {
      name: "Yumichika Ayasegawa ",
      img: "https://i.pinimg.com/564x/e2/1e/7b/e21e7bc12906d7231b019a2d6a3e699c.jpg",
    },
    {
      name: "Gonryomaru",
      img: "https://i.pinimg.com/564x/76/84/e7/7684e747e0fd429950df8172e5dc61fa.jpg",
    },
    {
      name: "Hōzukimaru",
      img: "https://i.pinimg.com/564x/1e/a9/4c/1ea94c8a2a59adcc8d3b9bb5df8c426c.jpg",
    },
    {
      name: "Haineku",
      img: "https://i.pinimg.com/736x/1b/97/8a/1b978a01d0bc16e2765ef1a30e954b77.jpg",
    },
    {
      name: "Kanzen Sōen",
      img: "https://i.pinimg.com/564x/88/0c/cc/880ccc1e4da0f70074da31606b1da963.jpg",
    },
    {
      name: "zabimaru",
      img: "https://i.pinimg.com/564x/8d/6c/b8/8d6cb8b686200e6b339dbfe6f03ec279.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Zanpakto</h1>
          <div className={scss.characters}>
          {zanpakto.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zanpakto;
