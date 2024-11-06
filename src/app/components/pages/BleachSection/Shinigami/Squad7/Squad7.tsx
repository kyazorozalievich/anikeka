"use client";
import BlockCard from "../../../BlockCard";
import scss from "../../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Squad7 = () => {
  const router = useRouter();
  const Squad = [
    {
      name: " Sadjin Kamamura",
      img: "https://i.pinimg.com/736x/33/2c/4c/332c4c3c6ab62eec9184a4fdb5ac8f46.jpg",
    },
    {
      name: "Tetsuzaemon Iba",
      img: "https://i.pinimg.com/originals/ff/31/f9/ff31f9e538a3f26f0e0a611a50f0667a.png",
    },
    {
      name: "Atau Rindo",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/8/8c/N9_S2EetWjc.jpg/revision/latest?cb=20230904180128&path-prefix=ru",
    },
    {
      name: "Nobutsuna",
      img: "https://i.pinimg.com/564x/07/bd/b5/07bdb561c81055aa003a6e035cfd878b.jpg",
    },
    {
      name: "Aikawa",
      img: "https://i.pinimg.com/564x/e4/f3/98/e4f398e4fd0fc2616c64036b6a9a9712.jpg",
    },
    {
      name: "Jin'emon Kotsubaki",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/4/4b/MASKEDJin%27emon.png/revision/latest?cb=20180225202427&path-prefix=ru",
    },
    {
      name: "Ikkanzaka",
      img: "https://static.wikia.nocookie.net/bleachpedia/images/a/aa/Ep28Jir%C5%8Db%C5%8DIkkanzaka.png/revision/latest?cb=20180308065213&path-prefix=ru",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/bleach/shinigami")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>Squad 7</h1>
          <div className={scss.characters}>
          {Squad.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad7;
