"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad1 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: "Yamamoto ",
      img: "https://i.pinimg.com/564x/23/7f/8f/237f8f389800b3222f937dbeb6e629e8.jpg",
    },
    {
      name: "Shunsui Kyoraku",
      img: "https://i.pinimg.com/564x/cd/cf/0c/cdcf0cb3273de77867905c22be90dbdf.jpg",
    },
    {
      name: "Nanao Ise",
      img: "https://i.pinimg.com/564x/5f/b3/86/5fb386a0fb0f625baf5ca9a21fc782a3.jpg",
    },
    {
      name: "Genshirō Okikiba",
      img: "https://i.pinimg.com/564x/29/86/d3/2986d3a2077bd3da2b11b6e80c76b196.jpg",
    },
    {
      name: "Sasakibe",
      img: "https://i.pinimg.com/564x/aa/3b/21/aa3b216e9dd1aea6854d7978f0072cdd.jpg",
    },
    {
      name: "Shin'etsu Kisaragi",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/b/b9/Ep189ShinetsuKisaragi.png/revision/latest?cb=20161001131101&path-prefix=ru",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 1</h1>
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

export default Squad1;
