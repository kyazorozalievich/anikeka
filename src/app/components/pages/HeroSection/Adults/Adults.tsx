"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Adults = () => {
  const router = useRouter();
  const adults = [
    {
      name: "Алый Бунтарь",
      img: "https://pbs.twimg.com/media/Ei7Yff8XYAAVo1x.jpg",
    },
    {
      name: "Бабблгёрл",
      img: "https://sun9-74.userapi.com/s/v1/ig2/G2oWnqJLNoIWWrmpenNz59DeFPSprp62fJ3q6UBpmiH9x1WzBK34Y6TNjk-aEl-YFoC1NeCx5vdWOcFtT4yk0tsF.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,427x427&from=bu&u=9er-p9FnWCVgpsdnCoG9PhuqFlZamDmMNuGCOxuDeTw&cs=427x427",
    },
    {
      name: "Босатка",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YX-60LVfPBR7mcSpULo7CLbcFQCJBjnh0U6sV0M9j3A5kDIUMGy5T9DGrrjL7i0_6l8&usqp=CAU",
    },
    {
      name: " Всемогущий",
      img: "https://cs12.pikabu.ru/post_img/2021/10/25/0/1635110015175172121.jpg",
    },
    {
      name: "Гран Торино",
      img: "https://i.pinimg.com/564x/48/bd/16/48bd16254607a7e558f2b21c8d06d73f.jpg",
    },
    {
      name: "Десутегоро",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-udH9FlAMMjw7gyPNWrAeEbMq-ygrC1F0wgR0OM4MaKgKu0qWTvgIaZlA2SPcebd4NK4&usqp=CAU",
    },
    {
      name: "Древесный Камуи",
      img: "https://tl.rulate.ru/i/translation/23/3/4251.jpg",
    },
    {
      name: "Жирножвач",
      img: "https://i.pinimg.com/564x/83/c0/97/83c097025ec9bc0bfebdd3b4056754e3.jpg",
    },
    {
      name: "Ингениум",
      img: "https://i.pinimg.com/564x/f4/4e/83/f44e8303015190110cf16a50b973fc2a.jpg",
    },
    {
      name: "Исцеляющая Девочка",
      img: "https://sun9-10.userapi.com/impg/2YCAUzr6tFZRFMXer9W8QKQCKogS_aRtLzvZbg/oUZvHlA7N1A.jpg?size=604x604&quality=96&sign=605c3a4520ee17609f526f2d2454ff16&type=album",
    },
    {
      name: "Капитан Знаменитость",
      img: "https://www.goha.ru/s/f/Ca/Gu/jqcZ4h1nYk.jpg",
    },
    {
      name: "Кора",
      img: "https://desu.shikimori.one/uploads/poster/characters/182755/main_alt-0cf81dd28c12fd7f56a3f1bc981e51d7.png",
    },
    {
      name: "Кровавый Король",
      img: "https://sun9-4.userapi.com/impg/S69Wuhprx_Gx3tRczkwz7rTEqgw3W9BEpSkBDg/GcWyFQe4hE0.jpg?size=604x562&quality=96&sign=2d69c189fc1a89fe96c9a6c59d35b3ad&type=album",
    },
    {
      name: "Леди Гора",
      img: "https://i.pinimg.com/564x/ac/fc/e0/acfce046f2bbf341fdbbb51c08db10f4.jpg",
    },
    {
      name: "Меткий Стрелок",
      img: "https://i.pinimg.com/736x/55/79/ba/5579ba932f4b4f200b9f4e170ef71bd3.jpg",
    },
    {
      name: "Мистер Храбрец",
      img: "https://mirai.senkuro.net/characters/52663531891389175/covers/191f99929965a7eacc49ee40d177b55ed6b9bd7a_52837618777326518.jpeg",
    },
    {
      name: "Мируко",
      img: "https://i.pinimg.com/564x/81/e1/9c/81e19c8653d3059d05f0802dcaf3570b.jpg",
    },
    {
      name: "Эми Фукукадо	",
      img: "https://i.pinimg.com/564x/3b/89/c0/3b89c01a38282821e2220a65b5d931d8.jpg",
    },

    {
      name: "Многоног",
      img: "https://i.pinimg.com/564x/60/70/ec/6070ecb7dae178f0886ca5bd28e23ffe.jpg",
    },
    {
      name: "Пиксибоб",
      img: "https://i.pinimg.com/564x/04/f0/0e/04f00eb2a4c572baa1cac65d1bce3c4c.jpg",
    },
    {
      name: "Полночь",
      img: "https://i.pinimg.com/564x/23/b7/f6/23b7f6be89945f6775e68f3dbae11935.jpg",
    },
    {
      name: "Рюкью",
      img: "https://i.pinimg.com/564x/5d/0e/a0/5d0ea0a40d99f0be5d0646af8cbc75fa.jpg",
    },
    {
      name: "Сотриголова",
      img: "https://i.pinimg.com/736x/ef/25/70/ef2570f792c3fa50ccc838d83ab99001.jpg",
    },
    {
      name: "Старатель",
      img: "https://i.pinimg.com/564x/ba/1c/ba/ba1cba76d0a8212b27ea7c0fdacaa6e4.jpg",
    },
    {
      name: "Сущий Мик",
      img: "https://i.pinimg.com/564x/c4/b0/7c/c4b07c4176e35c16bf221cfe81c298c7.jpg",
    },
    {
      name: "Топ Джинс",
      img: "https://i.pinimg.com/564x/54/9a/8e/549a8e75d1e62791a26a6c27ff6a2b71.jpg",
    },
    {
      name: "Ястреб",
      img: "https://i.pinimg.com/564x/2d/4c/10/2d4c101992714b5afdee5cbc91e237f1.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/hero")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>ADULTS HERO</h1>
          <div className={scss.characters}>
          {adults.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adults;
