"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const KnightsPage = () => {
  const router = useRouter();
  const knights = [
    {
      name: "Hendrickson",
      img: "https://i.pinimg.com/736x/cf/71/73/cf7173186717e9952cf1fdad047a7455.jpg",
    },
    {
      name: "Dreyfus",
      img: "https://i.pinimg.com/564x/bb/31/77/bb3177afe2a411a7a7ffe786cded9608.jpg",
    },
    {
      name: "Gilthunder",
      img: "https://i.pinimg.com/736x/f2/42/1a/f2421a89de519c6d6828ec2d6c7dc7ab.jpg",
    },
    {
      name: "Howzer",
      img: "https://i.pinimg.com/736x/63/97/8b/63978b8fda28cd2e10194a66b1f90de9.jpg",
    },
    {
      name: "Griamore",
      img: "https://i.pinimg.com/564x/d9/ce/fc/d9cefce38cbcca90ed5ef582810ca1fe.jpg",
    },
    {
      name: "Zaratras",
      img: "https://i.pinimg.com/564x/d7/93/5b/d7935b23ab094cfe76aee7712076d15a.jpg",
    },
    {
      name: "Cain Barzard",
      img: "https://i.pinimg.com/564x/5e/3e/a8/5e3ea84efca65f9142c500cedfddb69e.jpg",
    },
    {
      name: "Gustaf",
      img: "https://i.pinimg.com/564x/c8/96/97/c896974631a8fcf8737538f2a087eac0.jpg",
    },
    {
      name: "Jericho",
      img: "https://i.pinimg.com/564x/37/f6/75/37f675b333f7910677ce7c7d2942bdac.jpg",
    },
    {
      name: "Vivian",
      img: "https://i.pinimg.com/564x/a4/14/f3/a414f3ac54e0d9cf1c723f33571845bf.jpg",
    },
    {
      name: "Simon",
      img: "https://i.pinimg.com/736x/34/49/f5/3449f5721e7e57de096e8307572e157d.jpg",
    },
    {
      name: "Weinheidt",
      img: "https://i.pinimg.com/564x/b5/2c/23/b52c238b37af03d911cb7e9cf210ac9d.jpg",
    },
    {
      name: "Denzel",
      img: "https://i.pinimg.com/564x/8e/70/05/8e7005c7ce101d29c631ec9d8b6ed3e6.jpg",
    },
    {
      name: "Dale",
      img: "https://fanfics.me/images/fandoms_heroes/1526-1573582734.jpg",
    },
    {
      name: "Gilla",
      img: "https://i.pinimg.com/564x/16/a9/68/16a968c2fd66009cf4203ec020bf60a2.jpg",
    },
    {
      name: "Helbram",
      img: "https://i.pinimg.com/564x/4d/7c/9e/4d7c9ede3beedc804b70973a6cad34f3.jpg",
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
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/sins")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Holy Knights</h1>
          <div className={scss.characters}>
          {knights.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnightsPage;
