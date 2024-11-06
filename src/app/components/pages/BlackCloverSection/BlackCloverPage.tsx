"use client";
import { useRouter } from "next/navigation";
import scss from "././../GloabalPage.module.scss";
import DetailCard from "../DetailCard";

const BlackCloverPage = () => {
  const router = useRouter();

  const Otdel = [
    {
      title: "Golden Dawn",
      img: "https://i.pinimg.com/564x/f4/1d/e9/f41de9bb342be3f1ad53d833d6b9f8b8.jpg",
      href: "/clover/goldendawn",
    },
    {
      title: "Black Bulls ",
      img: "https://i.pinimg.com/564x/09/7c/c2/097cc2d1af0cf45abe86516926297066.jpg",
      href: "/clover/blackbulls",
    },
    {
      title: "Crimson Lion Kings ",
      img: "https://i.pinimg.com/564x/a9/75/77/a975775972253f878804b5df1dbaec98.jpg",
      href: "/clover/crimsonlion",
    },
    {
      title: "Silver Eagles",
      img: "https://i.pinimg.com/564x/0a/16/ac/0a16ac4d7f21bc780fe9ff00cc1918d8.jpg",
      href: "/clover/silvereagles",
    },
    {
      title: "Blue Rose Knights ",
      img: "https://i.pinimg.com/564x/68/2c/9d/682c9da98e58f5a76754a8664e2ad898.jpg",
      href: "/clover/bluerose",
    },
    {
      title: "Green Mantis",
      img: "https://animesolution.com/wp-content/uploads/2020/09/Black-Clover-142_12.29_2020.09.08_15.51.20stitch.jpg",
      href: "/clover/greenmantis",
    },
    {
      title: "Purple Orcas",
      img: "https://i.ytimg.com/vi/8fnUZxa8x-c/sddefault.jpg",
      href: "/clover/purpleorcas",
    },
    {
      title: "Aqua Deer",
      img: "https://i.pinimg.com/564x/27/00/b3/2700b383267ca205b285ee49e1ca6376.jpg",
      href: "/clover/aquadeer",
    },
    {
      title: "Eye of the Midnight Sun",
      img: "https://i.pinimg.com/564x/4c/8a/b1/4c8ab19d9ba25bec36c8b56cf78efe9c.jpg",
      href: "/clover/midnight",
    },
    {
      title: " Diamond Kingdom",
      img: "https://i.pinimg.com/564x/7a/ba/96/7aba9607a12a523e489ee1fc063294c9.jpg",
      href: "/clover/diamond",
    },
    {
      title: "Spade Kingdom",
      img: "https://i.pinimg.com/564x/da/78/6e/da786ef75a3f9cfd965cc6fe491e727d.jpg",
      href: "/clover/spade",
    },
    {
      title: "Heart Kingdom",
      img: "https://i.pinimg.com/564x/c2/33/00/c233003cd4d909d0befc7b79a8ce3cbc.jpg",
      href: "/clover/heart",
    },
    {
      title: "Eryushia",
      img: "https://i.pinimg.com/564x/de/39/a8/de39a884753b9bf65410145178cf3500.jpg",
      href: "/clover/eryushia",
    },
    {
      title: "Seabed Tample",
      img: "https://i.pinimg.com/564x/7c/56/da/7c56da1d9bd6cffb042e2cb6526d53e3.jpg",
      href: "/clover/tample",
    },
  ];

  return (
    <section className={scss.page}>
      <div className="container">
        <div className={scss.main}>
          <h6 onClick={() => router.push("/")}>Home</h6> /<h6>Black Clover</h6>
        </div>
        <h1>Black Clover</h1>
        <div className={scss.content}>
          {Otdel.map((el, idx) => (
            <DetailCard el={el} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackCloverPage;
