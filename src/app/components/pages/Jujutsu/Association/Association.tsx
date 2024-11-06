"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Association = () => {
  const router = useRouter();
  const association = [
    {
      name: "Kenjaki",
      img: "https://i.pinimg.com/736x/20/06/28/200628d98151f07f2811e0b35eac3b6e.jpg",
    },
    {
      name: "Mohito",
      img: "https://i.pinimg.com/736x/2f/06/22/2f062257fa07ab435f111dc7bde01195.jpg",
    },
    {
      name: "Jogo",
      img: "https://i.pinimg.com/564x/55/7c/c2/557cc2d2a61b6f715ee911876815d009.jpg",
    },
    {
      name: "Hanami",
      img: "https://i.pinimg.com/564x/8e/54/2a/8e542a0b460f5866e41dfcf5f8564e34.jpg",
    },
    {
      name: "Choso",
      img: "https://i.pinimg.com/736x/f0/d0/95/f0d0955f03afbb4232aaaf42e54f519d.jpg",
    },

    {
      name: "Uraume",
      img: "https://i.pinimg.com/736x/b5/24/52/b5245229899121794af7974b8880b8bd.jpg",
    },
    {
      name: "Juzo",
      img: "https://i.pinimg.com/564x/c8/ac/18/c8ac18ebb5289d8d0c534a3cc203a269.jpg",
    },
    {
      name: "Miguel",
      img: "https://i.pinimg.com/564x/7f/56/7a/7f567a8450d93cbb7d5274882ac5594c.jpg",
    },
    {
      name: "Dagon",
      img: "https://i.pinimg.com/736x/51/f6/b1/51f6b17c51740d58ffd7f71cbb64660d.jpg",
    },
    {
      name: "Eso jjk",
      img: "https://i.pinimg.com/564x/c2/8b/c8/c28bc8bb0bc9cd8e831200f1ae7bf6b4.jpg",
    },
    {
      name: "Haruta",
      img: "https://i.pinimg.com/564x/88/ae/76/88ae7625352d1307005927faccee83de.jpg",
    },
    {
      name: " Jiro Awasaka ",
      img: "https://i.pinimg.com/564x/8e/cb/d3/8ecbd36a8b702850c780ec36143b0846.jpg",
    },
    {
      name: "Ogami",
      img: "https://i.pinimg.com/564x/64/4b/a8/644ba8b442d62ed1010c8281fcf47995.jpg",
    },
    {
      name: "Ogamis Grandson",
      img: "https://cdn.anisearch.com/images/character/cover/97/97820_400.webp",
    },
    {
      name: "Bayer",
      img: "https://i.pinimg.com/564x/5c/8f/d1/5c8fd1a03d34b46d3a5fd04a9fc16ea4.jpg",
    },
    {
      name: "Kokun",
      img: "https://i.pinimg.com/564x/69/cf/e0/69cfe06c754efbd3fca2288cba241122.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/jujutsu")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Association Curses</h1>
          <div className={scss.characters}>
          {association.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Association;
