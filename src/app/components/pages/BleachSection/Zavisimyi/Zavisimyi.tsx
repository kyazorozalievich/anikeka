"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Zavisimyi = () => {
  const router = useRouter();
  const zavisimyi = [
    {
      name: "Karia",
      img: "https://i.pinimg.com/564x/f5/b6/20/f5b620aa010bb24dbf7c34536f76b04b.jpg",
    },
    {
      name: "Ryō Utagawa",
      img: "https://i.pinimg.com/564x/8c/e6/0e/8ce60ef09b82ccbcd1cb5576c953177b.jpg",
    },
    {
      name: "Mabashi bleach",
      img: "https://i.pinimg.com/564x/18/47/a2/1847a2fd1a1858823b675aaaa13d8d49.jpg",
    },
    {
      name: "Yoshina",
      img: "https://i.pinimg.com/564x/ea/8e/ec/ea8eec3a30a08dc6cf6dc567f4f31ee6.jpg",
    },
    {
      name: "Hon and Ban",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/4/4f/Ep73HoBanProfile.png/revision/latest?cb=20190315124044&path-prefix=ru",
    },
    {
      name: "Savatari",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/c/c8/Ep88SawatariProfile.png/revision/latest?cb=20190203121316&path-prefix=ru",
    },
    {
      name: "Ugaki",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/4/4d/Ep73UgakiProfile.png/revision/latest?cb=20190118140325&path-prefix=ru",
    },
    {
      name: "Yoshi",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/5/5a/Ep93YoshiProfile.png/revision/latest?cb=20190315124044&path-prefix=ru",
    },
    {
      name: "Keyn",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/9/9d/Ep83CainProfile.png/revision/latest?cb=20190315124424&path-prefix=ru",
    },
    {
      name: "Go Koga",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/0/02/Ep75GoKogaProfile.png/revision/latest?cb=20190115161324&path-prefix=ru",
    },
    {
      name: "Toba",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/8/89/Ep94TobaProfile.png/revision/latest?cb=20190203121355&path-prefix=ru",
    },
    // {
    //   name: "",
    //   img: "",
    // },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Zavisimyi</h1>
          <div className={scss.characters}>
          {zavisimyi.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zavisimyi;
