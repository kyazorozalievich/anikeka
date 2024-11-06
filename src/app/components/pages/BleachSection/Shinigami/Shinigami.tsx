"use client";
import { useRouter } from "next/navigation";
import scss from ".././../GloabalPage.module.scss";
import DetailCard from "../../DetailCard";

const Shinigami = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Squad 0",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/5/56/Zerodivision.png/revision/latest?cb=20121121133951&path-prefix=ru",
      href: "/bleach/shinigami/squad0",
    },
    {
      title: "Squad 1",
      img: "https://i.pinimg.com/564x/c2/3a/8a/c23a8a087acf8a6882473b3e1086c02d.jpg",
      href: "/bleach/shinigami/squad1",
    },
    {
      title: "Squad 2",
      img: "https://i.pinimg.com/originals/25/be/b8/25beb8116e59010a6d53954b00afa77a.png",
      href: "/bleach/shinigami/squad2",
    },
    {
      title: "Squad 3",
      img: "https://i.pinimg.com/564x/d2/5a/39/d25a39dc1e02704b7f81b8aba405c0c6.jpg",
      href: "/bleach/shinigami/squad3",
    },
    {
      title: "Squad 4",
      img: "https://i.pinimg.com/564x/c6/2d/e6/c62de62bb8e772a195779d4bb6719a44.jpg",
      href: "/bleach/shinigami/squad4",
    },
    {
      title: "Squad 5",
      img: "https://i.pinimg.com/564x/d3/f0/4a/d3f04a716337ac2ac5daa789abae75a8.jpg",
      href: "/bleach/shinigami/squad5",
    },
    {
      title: "Squad 6",
      img: "https://i.pinimg.com/564x/01/c4/82/01c482c1755e53c5698b4524f4354289.jpg",
      href: "/bleach/shinigami/squad6",
    },
    {
      title: "Squad 7",
      img: "https://i.pinimg.com/564x/3b/8e/19/3b8e192c9d2db5163ad4a496edd3ff7c.jpg",
      href: "/bleach/shinigami/squad7",
    },
    {
      title: "Squad 8",
      img: "https://patchcollection.com/cdn/shop/products/BleachGroup8-LG_1_GEA-13742.jpg?v=1643315874&width=1920",
      href: "/bleach/shinigami/squad8",
    },
    {
      title: "Squad 9",
      img: "https://i.pinimg.com/originals/a7/64/9c/a7649c75e83d2e33079e4071ea63384d.jpg",
      href: "/bleach/shinigami/squad9",
    },
    {
      title: "Squad 10",
      img: "https://i.pinimg.com/originals/82/1e/ab/821eab436867aaaf73823e7aa35c2dff.png",
      href: "/bleach/shinigami/squad10",
    },
    {
      title: "Squad 11",
      img: "https://i.pinimg.com/736x/15/6e/d2/156ed218c8e1ae3a3e7d1c41c18794ea.jpg",
      href: "/bleach/shinigami/squad11",
    },
    {
      title: "Squad 12",
      img: "https://i.pinimg.com/originals/07/43/5c/07435ca9697a779e7e51696c3c9a3716.png",
      href: "/bleach/shinigami/squad12",
    },
    {
      title: "Squad 13",
      img: "https://i.pinimg.com/564x/d6/51/7c/d6517cfd3af1012476639cf62eddcc36.jpg",
      href: "/bleach/shinigami/squad13",
    },
    {
      title: "Traitor",
      img: "https://cdn.shopify.com/s/files/1/0632/1707/4431/t/6/assets/gin-ichimaru-le-shinigamis-sournois-du-rukongai-6773.jpg",
      href: "/bleach/shinigami/traitor",
    },
    // {
    //   title: "Clans",
    //   img: "",
    //   href: "/bleach/shinigami/clans",
    // },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /
          <h6 onClick={() => router.push("/bleach")}>Bleach</h6> /{" "}
          <h6>Shinigami</h6>
        </div>
        <h1>Shinigami</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shinigami;
