"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Arrankar = () => {
  const router = useRouter();
  const arrankar = [
    {
      name: "(1) Coyote Starrk",
      img: "https://i.pinimg.com/736x/be/9c/fc/be9cfce3c90a79ae9afaf84bcb3c6cdf.jpg",
    },
    {
      name: "(1) Lilynette Gingerbuck",
      img: "https://i.pinimg.com/564x/1f/26/da/1f26da79ba742f9483520f89422a61f5.jpg",
    },
    {
      name: "(2) Nelliel Tu Odelschwanck",
      img: "https://i.pinimg.com/236x/ed/83/57/ed83574e121c521e56848208decb421a.jpg",
    },
    {
      name: "(2) Baraggan Louisenbairn",
      img: "https://i.pinimg.com/564x/64/09/03/640903a772cf8f9b599a48cd00d039f7.jpg",
    },
    {
      name: "(3) Tier Harribel",
      img: "https://i.pinimg.com/564x/0a/c2/b4/0ac2b481fad1ff9b915c0245a7dce6fb.jpg",
    },
    {
      name: "(4) Ulquiorra Cifer",
      img: "https://i.pinimg.com/736x/65/75/91/65759118e5236845acbd8eae1eda85dc.jpg",
    },
    {
      name: "(5) Nnoitra Gilga",
      img: "https://i.pinimg.com/564x/fe/c1/a3/fec1a34bb0c86feac82f0608e630e073.jpg",
    },
    {
      name: "(6) Grimmjow Jaegerjaquez",
      img: "https://i.pinimg.com/564x/04/1b/ac/041bace8cc33476a93491e595730fbbf.jpg",
    },
    {
      name: "(7) Zommari Rureaux",
      img: "https://i.pinimg.com/564x/0d/68/bd/0d68bde5139c2b88fac2307bac3d6787.jpg",
    },
    {
      name: "(8) Szayel Aporro Granz",
      img: "https://i.pinimg.com/564x/07/16/ae/0716aeb23c41f7fbbd4dbddd169d9f70.jpg",
    },
    {
      name: "(9) Aaroniero Arruruerie",
      img: "https://i.pinimg.com/564x/90/3a/70/903a70698310df0941c1ac870b163085.jpg",
    },
    {
      name: "(10) Yammy Llargo",
      img: "https://i.pinimg.com/564x/c6/bf/56/c6bf56385724fb887d51e75d6f37453d.jpg",
    },
    {
      name: "Luppi Antenor",
      img: "https://i.pinimg.com/736x/0e/ad/c4/0eadc4a061d0b89eac92347b69cf1550.jpg",
    },
    {
      name: "Dordoni Alessandro Del Socaccio",
      img: "https://i.pinimg.com/564x/1c/00/39/1c0039bdbe6a8f2a2e4eae6eb446b5c2.jpg",
    },
    {
      name: "Cirucci Sanderwicci",
      img: "https://i.pinimg.com/564x/6c/cc/21/6ccc21df98edc30abfdd3a2c44ef877c.jpg",
    },
    {
      name: "Gantenbainne Mosqueda",
      img: "https://static.wikia.nocookie.net/villains/images/9/95/Dragra.png/revision/latest?cb=20110316044406",
    },
    {
      name: "Abirama Redder",
      img: "https://static.wikia.nocookie.net/villains/images/0/01/Avirama_Redder.png/revision/latest?cb=20110212165749",
    },
    {
      name: "Charlotte Chuhlhourne",
      img: "https://i.pinimg.com/564x/66/31/76/66317614b557005fdeea149da4747a29.jpg",
    },
    {
      name: "Loly Aivirrne",
      img: "https://i.pinimg.com/564x/e9/03/42/e90342a6058594689b3c714f853e55c9.jpg",
    },
    {
      name: "Lyppi",
      img: "https://i.pinimg.com/564x/c2/3f/a2/c23fa270c32950867db022d38830145b.jpg",
    },
    {
      name: "Sung Sun",
      img: "https://i.pinimg.com/564x/9a/2f/78/9a2f78a18710e2cec27c4420e65eaebb.jpg",
    },
    {
      name: "Eranceska Mila Rose",
      img: "https://i.pinimg.com/736x/b4/5c/5a/b45c5aea8073cb0cff8429f090fc08d0.jpg",
    },
    {
      name: "Emillou Apacci",
      img: "https://i.pinimg.com/564x/a9/08/85/a90885a6d3a8988bb24fd5b63d244fff.jpg",
    },
    {
      name: "Findorr Calius",
      img: "https://static.wikia.nocookie.net/villains/images/c/c0/Findor.jpg/revision/latest/scale-to-width-down/1000?cb=20110211231033",
    },
    {
      name: "Ggio Vega",
      img: "https://static.wikia.nocookie.net/villains/images/8/8b/Ggio_Vega.png/revision/latest?cb=20110212190336",
    },
    {
      name: "Choe Neng Poww",
      img: "https://static.wikia.nocookie.net/villains/images/4/4d/Choe_neng_poww.png/revision/latest?cb=20110211225524",
    },
    {
      name: "Nirgge Parduoc",
      img: "https://static.wikia.nocookie.net/villains/images/0/0a/Nirgge.png/revision/latest?cb=20110212172113",
    },
    {
      name: "Tesra Lindocruz",
      img: "https://static.wikia.nocookie.net/villains/images/8/85/Tesra.jpg/revision/latest?cb=20110226091818",
    },
    {
      name: "Shawlong Kūfang",
      img: "https://static.wikia.nocookie.net/villains/images/2/24/Shawlong_Adjuchas.png/revision/latest?cb=20110123115737",
    },
    {
      name: "Edrad Liones",
      img: "https://static.wikia.nocookie.net/villains/images/8/86/C07838bf96e4e0_full.jpg/revision/latest/scale-to-width-down/1000?cb=20230414122733",
    },
    {
      name: "Nakeem Grindina",
      img: "https://static.wikia.nocookie.net/villains/images/2/2d/Nakim.png/revision/latest?cb=20110222103442",
    },
    {
      name: "Yylfordt Granz",
      img: "https://static.wikia.nocookie.net/villains/images/7/74/Yylfordt_Granz.jpg/revision/latest?cb=20230911155637",
    },
    {
      name: "Di Roy Rinker",
      img: "https://static.wikia.nocookie.net/villains/images/8/8b/DiRoy.png/revision/latest?cb=20110211121221",
    },
    {
      name: "Lumina & Verona",
      img: "https://static.wikia.nocookie.net/villains/images/b/bf/Lumina_%26_Verona.jpg/revision/latest?cb=20120614193302",
    },
    {
      name: "Medazeppi",
      img: "https://static.wikia.nocookie.net/villains/images/c/cf/Medazeppi.jpg/revision/latest?cb=20120614170921",
    },
    {
      name: "Aisslinger Wernarr",
      img: "https://static.wikia.nocookie.net/villains/images/c/c3/Iceringer.jpg/revision/latest?cb=20110224091214",
    },
    {
      name: "Demoura Zodd",
      img: "https://static.wikia.nocookie.net/villains/images/1/12/Demora.png/revision/latest?cb=20110323233554",
    },
    {
      name: "Hammerhead Shark Arrancar",
      img: "https://static.wikia.nocookie.net/villains/images/7/73/640px-Hammerhead_Arrancar.png/revision/latest?cb=20130211211248",
    },
    {
      name: "Menis",
      img: "https://static.wikia.nocookie.net/villains/images/4/48/453px-Menis.png/revision/latest?cb=20110314232421",
    },
    {
      name: "Menoly Mallia",
      img: "https://static.wikia.nocookie.net/villains/images/2/2d/Ep163MenolyMallia.png/revision/latest/scale-to-width-down/1000?cb=20230307024111",
    },
    {
      name: "Patros",
      img: "https://static.wikia.nocookie.net/villains/images/6/6b/Patros_%28Bleach%29.jpg/revision/latest?cb=20141117210752",
    },
    {
      name: "Rudbornn Chelute",
      img: "https://static.wikia.nocookie.net/villains/images/c/c9/155109-bleach362_large.jpg/revision/latest?cb=20110226113401",
    },
    {
      name: "Wonderweiss Margela",
      img: "https://i.pinimg.com/736x/b0/9f/ff/b09fffad39d6dc0774b347f6f494f2c9.jpg",
    },
    {
      name: "Arturo Plateado ",
      img: "https://i.pinimg.com/564x/f0/19/d7/f019d73d192e164909cda5a43dcc7256.jpg",
    },
    {
      name: "Ludas Frigen",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/3/37/%D0%9B%D1%8E%D0%B4%D0%B0%D1%81.jpg/revision/latest/scale-to-width-down/1200?cb=20221010103227&path-prefix=ru",
    },
    {
      name: "Azgiaro Eburn",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/7/72/Ebarn.jpg/revision/latest/scale-to-width-down/1200?cb=20221010102751&path-prefix=ru",
    },
  ];
  
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Arrankar</h1>
          <div className={scss.characters}>
          {arrankar.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrankar;
