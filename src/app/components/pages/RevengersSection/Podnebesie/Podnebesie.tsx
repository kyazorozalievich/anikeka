"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Podnebesie = () => {
  const router = useRouter();
  const podnebesie = [
    {
      name: "Izana",
      img: "https://i.pinimg.com/474x/53/9d/fc/539dfce1c4e8ec7d239758907e095d39.jpg",
    },
    {
      name: "Shion",
      img: "https://i.pinimg.com/736x/49/46/8d/49468dec8837e438178428f66db9dfa3.jpg",
    },

    {
      name: "Kakucho",
      img: "https://i.pinimg.com/474x/48/f0/df/48f0df4193c441dcf8e138e293607d0e.jpg",
    },
    {
      name: "Ran Haitani",
      img: "https://i.pinimg.com/474x/06/e9/c8/06e9c8cdeff2d8bb9af3c1713df7b919.jpg",
    },
    {
      name: "Rindou Haitani",
      img: "https://i.pinimg.com/474x/b1/a2/bf/b1a2bf9c3e29481d2afdec97d249003e.jpg",
    },
    {
      name: "Kandji",
      img: "https://i.pinimg.com/474x/66/39/4e/66394e25297b6044be5d742869edcd96.jpg",
    },
    {
      name: "Kisaki",
      img: "https://i.pinimg.com/474x/0c/c8/07/0cc807cbdffcc2aca272262c2527592b.jpg",
    },
    {
      name: "Kokonoi",
      img: "https://i.pinimg.com/474x/6a/79/24/6a79246720edd97a45b250ca2404e016.jpg",
    },
    {
      name: "Yasuhiro",
      img: "https://i.pinimg.com/474x/7d/58/c4/7d58c498514fa88f49f8f798d12ec0db.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/revengers")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>PODNEBESIE</h1>
          <div className={scss.characters}>
          {podnebesie.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Podnebesie;
