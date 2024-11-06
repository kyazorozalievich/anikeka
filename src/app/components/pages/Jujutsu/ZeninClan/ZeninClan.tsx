"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const ZeninClan = () => {
  const router = useRouter();
  const zenin = [
    {
      name: "Naobito Zen'in",
      img: "https://i.pinimg.com/564x/80/d5/68/80d568127355bf2e188c84d048decf0b.jpg",
    },
    {
      name: "Naoya Zen'in",
      img: "https://i.pinimg.com/564x/b5/68/55/b56855d5792087f76241de269d4e5286.jpg",
    },
    {
      name: "Ogi Zen'in",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/edbed3db-ebcd-44e2-bd1f-56753bc67068/dg171a1-fa3c2cae-8188-4cdb-8dbe-7530da71c697.png/v1/fill/w_1124,h_711,q_70,strp/ogi_zenin_by_noxmatos_dg171a1-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODEwIiwicGF0aCI6IlwvZlwvZWRiZWQzZGItZWJjZC00NGUyLWJkMWYtNTY3NTNiYzY3MDY4XC9kZzE3MWExLWZhM2MyY2FlLTgxODgtNGNkYi04ZGJlLTc1MzBkYTcxYzY5Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KoZPsspiERm2swHyJ5zHNfronsNy-biQahDkzXFYfFc",
    },
    {
      name: "Maki Zen'in ",
      img: "https://i.pinimg.com/736x/7e/79/c3/7e79c3682879ef54a479e815fb8acf02.jpg",
    },
    {
      name: "Mai Zen'in",
      img: "https://i.pinimg.com/736x/a7/d6/c6/a7d6c60da66326e0f81669aadcdf9e10.jpg",
    },
    {
      name: "Jinichi Zen'in",
      img: "https://tiermaker.com/images/chart/chart/jjk-list-15142699/jinichi-zeninpng.png",
    },
    {
      name: "Satoru Gojo (Zen'in)",
      img: "https://i.pinimg.com/736x/ab/9a/b2/ab9ab2c91ec62a64e7dc265315041d25.jpg",
    },
    {
      name: "Yuta Okkotsu (Zen'in)",
      img: "https://i.pinimg.com/736x/65/f2/4a/65f24ade9f7a5dd274d1325ba7e7944e.jpg",
    },
    {
      name: "Toji Fushigura (Zen'in)",
      img: "https://i.pinimg.com/736x/0e/be/d8/0ebed899927920711239c2ccde4178eb.jpg",
    },
    {
      name: "Megumi Fushigura (Zen'in)",
      img: "https://i.pinimg.com/736x/f9/61/cd/f961cdd00cca5f29e4eb8cdb70f7f3a0.jpg",
    },
    {
      name: "Yuji Itodori (Zen'in)",
      img: "https://i.pinimg.com/564x/29/c7/7b/29c77b8df01667d35d50c2b1a59ead35.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/jujutsu")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Zenin Clan</h1>
          <div className={scss.characters}>
          {zenin.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeninClan;
