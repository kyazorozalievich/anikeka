"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Dwargo = () => {
  const router = useRouter();
  const dwargo = [
    {
      name: "Gazel Dwargo",
      img: "https://i.pinimg.com/564x/16/7c/39/167c39617dc1fc386b772e761141bcee.jpg",
    },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
    // {
    //   name: "",
    //   img: "",
    // },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/slime")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Kingdom Dwargo</h1>
          <div className={scss.characters}>
          {dwargo.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dwargo;
