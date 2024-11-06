"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Other = () => {
  const router = useRouter();
  const other = [
    {
      name: "Misato Ochi",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/a/aa/Ep64MisatoProfile.png/revision/latest?cb=20190114023627&path-prefix=ru",
    },
    {
      name: "Tasuki Orisava",
      img: "https://i.pinimg.com/564x/ef/e6/ec/efe6ec766d9695915afe34e5e5c32a64.jpg",
    },
    {
      name: "Keigo Asano",
      img: "https://i.pinimg.com/564x/fa/cf/96/facf96ee6c56213b44a38f38043f128a.jpg",
    },
    {
      name: "Mizuiro",
      img: "https://i.pinimg.com/564x/c2/a4/83/c2a483a709ccf9da9abb68225e2a2290.jpg",
    },
    {
      name: "Karin Kurosaki",
      img: "https://i.pinimg.com/564x/f4/c7/0d/f4c70d3008ba89c3ee1e609ec7e0d59b.jpg",
    },
    {
      name: "Yuzu Kurosaki",
      img: "https://i.pinimg.com/564x/67/cd/37/67cd3789313cc1455e3c9d3b893e7bc7.jpg",
    },
    {
      name: "Jinta Hanakari",
      img: "https://i.pinimg.com/564x/3f/dd/ec/3fddecb435101f44d84de44d0acd9542.jpg",
    },
    {
      name: "Ururu",
      img: "https://i.pinimg.com/564x/74/cb/a3/74cba339fa50a5888451660f9a066168.jpg",
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
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Other People</h1>
          <div className={scss.characters}>
          {other.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
