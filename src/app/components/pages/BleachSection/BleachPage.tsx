"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const BleachPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Shinigami",
      img: "https://i.pinimg.com/564x/43/c7/04/43c70439cb83fa2bf533bc5742189d80.jpg",
      href: "/bleach/shinigami",
    },
    {
      title: "Zanpakto",
      img: "https://i.pinimg.com/564x/d5/6a/42/d56a42584ed84df51eb79b2402fce703.jpg",
      href: "/bleach/zanpakto",
    },
    {
      title: "Podchinitel",
      img: "https://forum.taucetistation.org/uploads/default/original/3X/9/f/9f26d0df398720582ac82bd5fc331684c2fb6182.jpeg",
      href: "/bleach/podchinitel",
    },
    {
      title: "Zavisimyi",
      img: "https://sun9-7.userapi.com/impf/c630926/v630926147/23cd6/vkK3_vwEKuc.jpg?size=604x453&quality=96&sign=47e5d07b1686aa9d5bac7c860faeb818&type=album",
      href: "/bleach/zavisimyi",
    },
    {
      title: "Kwinsi",
      img: "https://i.pinimg.com/564x/91/31/b5/9131b522cddb015826a60d248a85d9f1.jpg",
      href: "/bleach/kwinsi",
    },
    {
      title: "Vaizard",
      img: "https://i.pinimg.com/564x/d6/17/8b/d6178bc99647bd76a9a6fa426db3e8d3.jpg",
      href: "/bleach/vaizard",
    },
    {
      title: "Arrankar",
      img: "https://i.pinimg.com/564x/90/53/42/90534235b9b15e5a2044f659b3aafe1d.jpg",
      href: "/bleach/arrankar",
    },
    {
      title: "Dusha",
      img: "https://i.pinimg.com/564x/41/3b/91/413b9128b1fa382101d1c9bc65ff7a3b.jpg",
      href: "/bleach/dusha",
    },
    {
      title: "Other People",
      img: "https://i.pinimg.com/564x/21/65/dd/2165dd75e433591f426c503bc380acd5.jpg",
      href: "/bleach/other",
    },

    // {
    //   title: "",
    //   img: "",
    //   href: "/bleach/",
    // },
    // {
    //   title: "",
    //   img: "",
    //   href: "/bleach/",
    // },
  ];

  const name = "dfkjlnw";

  if (name)
    return (
      <section className={scss.page}>
        <div className="container">
          <div className={scss.main}>
            <h6 onClick={() => router.push("/")}>Home</h6> /<h6>Bleach</h6>
          </div>
          <h1>Bleach</h1>
          <div className={scss.content}>
            {Otdel.map((el, idx) => (
              <DetailCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default BleachPage;
