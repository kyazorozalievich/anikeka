"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const GoldenDawn = () => {
  const router = useRouter();
  const golden = [
    {
      name: "William Vangeance",
      img: "https://i.pinimg.com/564x/cf/d8/d0/cfd8d0521eea38eccee989479c903905.jpg",
    },
    {
      name: "Yuno",
      img: "https://i.pinimg.com/564x/4e/f6/f9/4ef6f92278aa4915df091275bbf7bb5c.jpg",
    },
    {
      name: "Langris Vaude",
      img: "https://i.pinimg.com/564x/30/a7/93/30a7931fe1146bf7c66bac166a1e3043.jpg",
    },
    {
      name: "Klaus Lunettes",
      img: "https://i.pinimg.com/564x/97/de/23/97de2378a506316e1b8003cc9bb682e3.jpg",
    },
    {
      name: "Mimosa Vermillion ",
      img: "https://i.pinimg.com/564x/99/da/43/99da4349c7e5a5752f9a37475b9a74ef.jpg",
    },
    {
      name: "Hamon Caseus ",
      img: "https://i.pinimg.com/564x/45/14/36/4514360ec66c32f2b4fa72def698bb2e.jpg",
    },
    {
      name: "Shiren Tium",
      img: "https://i.pinimg.com/564x/9b/e9/3c/9be93c3aadfe7dce827de9239ca5a526.jpg",
    },
    {
      name: "Alecdora Sandler",
      img: "https://i.pinimg.com/564x/31/18/97/311897e8cc58d61f2ed965d37e6c7c15.jpg",
    },
    {
      name: "Letoile Becquerel ",
      img: "https://i.pinimg.com/564x/66/e6/6a/66e66a5e5f71112e692c5edc332a5e81.jpg",
    },
    {
      name: "David Swallow ",
      img: "https://i.pinimg.com/564x/de/33/a4/de33a4b8b3be4224f7bb9ead2bf41eb4.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/clover")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Golden Dawn</h1>
          <div className={scss.characters}>
          {golden.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenDawn;
