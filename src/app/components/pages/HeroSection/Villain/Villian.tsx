"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Villian = () => {
  const router = useRouter();
  const villain = [
    {
      name: "Тойя Тодороки",
      img: "https://i.pinimg.com/564x/db/a4/97/dba49711669dc08fa3eeb31ec14b8562.jpg",
    },
    {
      name: "Химико Тога",
      img: "https://i.pinimg.com/236x/66/ac/93/66ac933f3b6b1e88726cf2f6129cb4ff.jpg",
    },
    {
      name: "Томура Шигараки",
      img: "https://i.pinimg.com/736x/6f/23/72/6f23722fef129b5700430dcb57dc1da7.jpg",
    },
    {
      name: "Все За Одного (персонаж)",
      img: "https://i.pinimg.com/736x/63/81/28/638128158418ac945a6824096e561abf.jpg",
    },
    {
      name: "Курогири",
      img: "https://i.pinimg.com/564x/69/88/fc/6988fc51650aafd750b3e5e1fe60075c.jpg",
    },
    {
      name: "Кай Чисаки",
      img: "https://i.pinimg.com/736x/a9/05/5a/a9055a46571254fc45b2573269b64f4a.jpg",
    },
    {
      name: " Чизоме Акагуро",
      img: "https://i.pinimg.com/564x/8b/ea/79/8bea794db2b0eecd1981710b1c555f61.jpg",
    },

    {
      name: "Нежный преступник",
      img: "https://i.pinimg.com/564x/94/56/c7/9456c735f22a5f33935a8bd75264b62d.jpg",
    },
    {
      name: "Леди Наган",
      img: "https://i.pinimg.com/564x/26/f7/58/26f7580186afd490a6e1706692f8cb0f.jpg",
    },
    {
      name: "Джин Бубайгавара",
      img: "https://i.pinimg.com/736x/6e/e5/e1/6ee5e11c089915041e2b6c26abdce93b.jpg",
    },
    {
      name: "Ацухиро Сако",
      img: "https://i.pinimg.com/564x/15/1a/91/151a9137cf986cb04a6d8213322d7efd.jpg",
    },
    {
      name: "Мустард",
      img: "https://i.pinimg.com/564x/53/f8/fe/53f8fe0c3471657fbb8800bbd66fab1f.jpg",
    },
    {
      name: "Хава",
      img: "https://i.pinimg.com/736x/18/8b/e7/188be7640acc47a1d6637a2fca5fa356.jpg",
    },
    {
      name: "Биг Мадам",
      img: "https://i.pinimg.com/736x/60/26/b2/6026b28bc299951661a1fb6920b4716b.jpg",
    },
    {
      name: "Гото",
      img: "https://i.pinimg.com/564x/08/16/93/0816932f701fd90eaadfbf8f7e2a69b2.jpg",
    },
    {
      name: "Рикуя",
      img: "https://i.pinimg.com/564x/3b/37/44/3b374471565a33bc94230d5db8ee9987.jpg",
    },
    {
      name: "Ларият",
      img: "https://i.pinimg.com/564x/22/21/74/2221745d3b5c69b2342cbec838930e57.jpg",
    },

    {
      name: "Гиганто махия",
      img: "https://i.pinimg.com/564x/75/2f/86/752f86ae32f30edad4fb7148a9a84a02.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/hero")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>VILLIANS</h1>
          <div className={scss.characters}>
          {villain.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Villian;
