"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const SoloUsers = () => {
  const router = useRouter();
  const solo = [
    {
      name: "Toji Fushiguro",
      img: "https://i.pinimg.com/736x/54/31/4b/54314b606e4d7310bf43504a6ecb07e2.jpg",
    },
    {
      name: "Geto",
      img: "https://i.pinimg.com/564x/39/31/5d/39315d3abbad84cab22991a9b3e7158e.jpg",
    },
    {
      name: "Shiu Kong",
      img: "https://i.pinimg.com/564x/51/62/92/516292a74484c83f1cbcc0f63ab97b7d.jpg",
    },
    {
      name: "Nanami",
      img: "https://i.pinimg.com/736x/65/07/48/650748913dd56e9f26c8e9db8514e989.jpg",
    },
    {
      name: "Sukuna",
      img: "https://i.pinimg.com/564x/a5/fd/bc/a5fdbcd0e9808982535b96528d96b495.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/jujutsu")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Solo Users</h1>
          <div className={scss.characters}>
          {solo.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloUsers;
