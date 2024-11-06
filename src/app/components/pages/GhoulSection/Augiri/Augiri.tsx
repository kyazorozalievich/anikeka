"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Augiri = () => {
  const router = useRouter();

  const augiri = [
    {
      name: "Kaneki Ken",
      img: "https://i.pinimg.com/564x/bc/7e/d1/bc7ed12ab82708bf1a472a336835d488.jpg",
    },
    {
      name: "Eto Yoshimura",
      img: "https://i.pinimg.com/736x/ed/0c/67/ed0c6716ef9ac62be2fdce091d0596ca.jpg",
    },

    {
      name: "Omori",
      img: "https://i.pinimg.com/564x/a9/bf/84/a9bf8465d3c8616b08f0711c408ae729.jpg",
    },
    {
      name: "Nashiro",
      img: "https://i.pinimg.com/564x/97/10/d6/9710d613108706dbaecc1711c7e884b3.jpg",
    },
    {
      name: "Kurona",
      img: "https://i.pinimg.com/564x/55/8b/47/558b47c410fde0823e4fa7d6d979a1c5.jpg",
    },
    {
      name: "Tatatara",
      img: "https://i.pinimg.com/564x/64/65/b3/6465b32bf3f08035d5697c1eaa61c7a2.jpg",
    },
    {
      name: "Noro",
      img: "https://i.pinimg.com/564x/a5/f7/d5/a5f7d589ff035c525a0874db815c8b3d.jpg",
    },
    {
      name: "Kirishima",
      img: "https://i.pinimg.com/564x/5a/70/91/5a70918a3be0e82fb31b57d39ab94e4d.jpg",
    },
    {
      name: "Seidou",
      img: "https://i.pinimg.com/564x/a5/94/2b/a5942bddcb47b88126372ba0dba38a5d.jpg",
    },
    {
      name: "Naki",
      img: "https://i.pinimg.com/564x/a3/62/71/a362711efa277150e2866fcef19c4981.jpg",
    },
    {
      name: "Uta",
      img: "https://i.pinimg.com/564x/e2/be/7e/e2be7e46c787d316f0198658bcf142eb.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/ghoul")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>AUGIRI</h1>
          <div className={scss.characters}>
          {augiri.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Augiri;
