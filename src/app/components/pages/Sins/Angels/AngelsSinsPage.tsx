"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const AngelsSinsPage = () => {
  const router = useRouter();
  const angels = [
    {
      name: "Ludoshel",
      img: "https://i.pinimg.com/564x/0f/ac/d8/0facd831d7ce79e5e8332fbd344d5eb9.jpg",
    },
    {
      name: "Tarmiel",
      img: "https://i.pinimg.com/564x/1c/1b/f4/1c1bf4cca2ff670d80d4d3dc667273e7.jpg",
    },
    {
      name: "Sariel",
      img: "https://i.pinimg.com/564x/8b/b4/28/8bb428e4cca5eb5c45a448647839aebe.jpg",
    },
    {
      name: "Mael",
      img: "https://i.pinimg.com/564x/82/ad/b0/82adb074807560d45b5b512db2191c05.jpg",
    },
    {
      name: "Elizabeth",
      img: "https://i.pinimg.com/564x/fa/28/65/fa2865b1cc847b7e446f7d4140d2716d.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/4c/82/6f/4c826f4e7f882c98837feb3991998081.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/1a/a0/64/1aa0641336ce984deabf9b3da88c94b5.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/45/dd/fd/45ddfd17aa53755f0d1a63413653bcf2.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/67/dc/90/67dc909cf604c0da84e970becd29225b.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/09/9b/d2/099bd288ba26d8ebf482788fa7828379.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/c9/5c/b1/c95cb1d4c49fe0490c44dc9b28c784c0.jpg",
    },
    {
      name: "...",
      img: "https://i.pinimg.com/564x/18/24/72/1824726dae92cb9fcde9ed05424ee82a.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/sins")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Angels</h1>
          <div className={scss.characters}>
          {angels.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngelsSinsPage;
