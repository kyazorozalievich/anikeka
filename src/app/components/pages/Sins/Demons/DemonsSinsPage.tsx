"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const DemonsSinsPage = () => {
  const router = useRouter();
  const demons = [
    {
      name: "Demon King",
      img: "https://i.pinimg.com/564x/a2/12/db/a212dba064733dfe7452e09e8ce0cbb4.jpg",
    },
    {
      name: "Cusack",
      img: "https://i.pinimg.com/564x/5a/cc/1f/5acc1f2951e5307baa636f9bd2e21da4.jpg",
    },
    {
      name: "Chandler",
      img: "https://i.pinimg.com/564x/82/dd/ce/82ddceea0d5f3c195a822ad3b9336e9f.jpg",
    },
    {
      name: "Meliodas",
      img: "https://i.pinimg.com/564x/c9/8c/71/c98c715fb905f63c2d5487e49ac06a6f.jpg",
    },
    {
      name: "Zeldris",
      img: "https://i.pinimg.com/564x/99/07/e6/9907e669b1aacc8ad22a6cfb80b99320.jpg",
    },
    {
      name: "Estarossa",
      img: "https://i.pinimg.com/736x/77/ed/6f/77ed6f92f276c245f95ea4ed741399af.jpg",
    },
    {
      name: "Melascula",
      img: "https://i.pinimg.com/564x/59/93/14/599314f5bfc969d99ed8c5bfa7975a02.jpg",
    },
    {
      name: "Galand",
      img: "https://i.pinimg.com/736x/bd/be/74/bdbe749d1b6898e904108fadcc0346cd.jpg",
    },
    {
      name: "Derieri",
      img: "https://i.pinimg.com/564x/de/df/4e/dedf4e2cfbd11cd902821da25e27ecc1.jpg",
    },
    {
      name: "Monspeet",
      img: "https://i.pinimg.com/736x/7e/9f/5f/7e9f5f3aa226045f3bd34cbfb75a1483.jpg",
    },
    {
      name: "Fraudrin",
      img: "https://i.pinimg.com/564x/aa/15/30/aa15305448a89e35d61e274187e8bd86.jpg",
    },
    {
      name: "Gloxinia",
      img: "https://i.pinimg.com/736x/3c/3c/95/3c3c95203efab26dc0c38a29251beec4.jpg",
    },
    {
      name: "Dolor",
      img: "https://i.pinimg.com/564x/6b/64/ad/6b64ad6c099c6c739628c85474df6c22.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/sins")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Demons</h1>
          <div className={scss.characters}>
          {demons.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemonsSinsPage;
