"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Youngs = () => {
  const router = useRouter();
  const young = [
    {
      name: "Анима",
      img: "https://i.pinimg.com/564x/8c/13/12/8c1312d99b70428636ef1128c259cf16.jpg",
    },
    {
      name: "Боевой Кулак",
      img: "https://i.pinimg.com/564x/fd/8f/98/fd8f98bdeb54e36da27299e5b20b2079.jpg",
    },
    {
      name: "Вантаблэк",
      img: "https://i.pinimg.com/564x/dc/a7/62/dca762fd3bfc791221d0f2e745633125.jpg",
    },
    {
      name: "Виноградный Сок",
      img: "https://i.pinimg.com/564x/ea/d6/0a/ead60af430efb7f678ad40d88a0f91f9.jpg",
    },
    {
      name: "Деку",
      img: "https://i.pinimg.com/564x/4c/bc/12/4cbc12abe065f29d37d647f6b060f068.jpg",
    },
    {
      name: "Драконья Шкура",
      img: "https://i.pinimg.com/564x/7c/fb/15/7cfb15d6caca6aa4baf9a1d3dfec65d0.jpg",
    },
    {
      name: "Жеводан",
      img: "https://i.pinimg.com/564x/43/ff/c6/43ffc69201a17e4af1a74d3bd24089f0.jpg",
    },
    {
      name: "Ингениум",
      img: "https://i.pinimg.com/736x/9a/48/de/9a48de436b6f0c4e61ca29e48fd35b63.jpg",
    },
    {
      name: "Красный Бунтарь",
      img: "https://i.pinimg.com/564x/97/5b/0a/975b0aa15862ef280031fa2466abbb29.jpg",
    },
    {
      name: "Креатив",
      img: "https://i.pinimg.com/736x/ac/39/ec/ac39ec705b5f0f825d0cfca437f0c7c7.jpg",
    },
    {
      name: "Лемиллион",
      img: "https://i.pinimg.com/564x/ab/c1/f3/abc1f389f9cd609216b483bd75d6d236.jpg",
    },
    {
      name: "Лоза",
      img: "https://i.pinimg.com/564x/26/d2/4d/26d24d47f7cb55201ce344b33c143db1.jpg",
    },
    {
      name: "Настоящая Сталь",
      img: "https://i.pinimg.com/564x/cb/c7/e6/cbc7e61add6e5240c66b6e160590171f.jpg",
    },
    {
      name: "Наушный Разъём",
      img: "https://i.pinimg.com/564x/29/fc/ef/29fcef9a736ca7793d7e35421d26290a.jpg",
    },
    {
      name: "Не могу перестать блистать",
      img: "https://i.pinimg.com/564x/28/22/9b/28229bd7aa356ed5f9a07203e0464e6a.jpg",
    },
    {
      name: "Невидимая Девочка",
      img: "https://i.pinimg.com/564x/93/cd/67/93cd67a2a9349713f71fb996c788a4b6.jpg",
    },
    {
      name: "Неджире-чан",
      img: "https://i.pinimg.com/564x/5e/4d/e0/5e4de0d207c8d39d62dbc07657bb1962.jpg",
    },
    {
      name: "Пинки",
      img: "https://i.pinimg.com/564x/a8/0b/fc/a80bfcc17901957052661ed2f914c95b.jpg",
    },
    {
      name: "Призрачный Вор",
      img: "https://i.pinimg.com/564x/59/16/16/5916164fd571da6eccc5ae9bb5ee3eff.jpg",
    },
    {
      name: "Повелитель Грязи",
      img: "https://i.pinimg.com/564x/3f/cd/12/3fcd127849bce27ee763c1b5a5c92ddd.jpg",
    },
    {
      name: "Пожиратель Солнца",
      img: "https://i.pinimg.com/564x/30/cc/32/30cc322774417eee479050c77fd42b08.jpg",
    },
    {
      name: "Уравити",
      img: "https://i.pinimg.com/564x/ab/a5/87/aba5874a6a264683da23cdbcca045057.jpg",
    },
    {
      name: "Целлофан",
      img: "https://i.pinimg.com/564x/90/8a/0e/908a0e360c099fa6d1b09b5bc65b8eb5.jpg",
    },
    {
      name: "Цукуёми",
      img: "https://i.pinimg.com/564x/d9/54/dd/d954dd1ec45951a3632a6d651dec853a.jpg",
    },
    {
      name: "Человек-сахар",
      img: "https://i.pinimg.com/564x/50/b4/93/50b49301684a24c212790d95bfe3dbd2.jpg",
    },
    {
      name: "Человек-хвост",
      img: "https://i.pinimg.com/736x/c2/2c/b8/c22cb8fde513c84c06c88d6ba4159815.jpg",
    },
    {
      name: "Шимеджи",
      img: "https://i.pinimg.com/564x/b9/c6/cb/b9c6cb39e10bc2e3a8b7b2f40945ab63.jpg",
    },
    {
      name: "Шото",
      img: "https://i.pinimg.com/564x/b5/42/1f/b5421f81d1a8743609e9f346e0870fcf.jpg",
    },
    {
      name: "Щупальце",
      img: "https://i.pinimg.com/564x/da/a7/17/daa717e826eb53156c9b518111fb8e49.jpg",
    },
    {
      name: "Электрозаряд",
      img: "https://i.pinimg.com/564x/68/3c/5f/683c5f9c28759c47252f94b765057a20.jpg",
    },
    {
      name: "Динамит",
      img: "https://i.pinimg.com/736x/ca/cb/b3/cacbb3b7abf658199667678217c59350.jpg",
    },
    {
      name: "Косей Цубураба",
      img: "https://i.pinimg.com/564x/4d/2f/f2/4d2ff29de1a4046e14957bfede7e9933.jpg",
    },
    {
      name: "Мэй Хацуме",
      img: "https://i.pinimg.com/564x/86/1f/de/861fde1f93cc71d4faeffe149cbdcf6d.jpg",
    },
    {
      name: "Ниренгеки Шода",
      img: "https://i.pinimg.com/564x/11/02/91/1102919f7e1d7b2b51bed18a46574541.jpg",
    },
    {
      name: "Пони Цунотори",
      img: "https://i.pinimg.com/564x/e1/a9/07/e1a9079594c00ddeccea817880faaace.jpg",
    },
    {
      name: "Рейко Янаги",
      img: "https://i.pinimg.com/564x/98/90/a5/9890a5d185d4cecd13fbed671ea053ee.jpg",
    },
    {
      name: "Сецуна Токаге",
      img: "https://i.pinimg.com/564x/e8/27/7e/e8277e54724f2a9ff82fd21710cc3b17.jpg",
    },
    {
      name: "Тогару Камакири",
      img: "https://i.pinimg.com/564x/db/0b/91/db0b912a589cd9386b2beefafce6d895.jpg",
    },
    {
      name: "Хитоши Шинсо",
      img: "https://i.pinimg.com/736x/8e/7c/43/8e7c43c133f20f35be0ac243b9de2c23.jpg",
    },
    {
      name: "Юи Кодай",
      img: "https://i.pinimg.com/564x/f3/a3/58/f3a358904e31aba0c5bf7cb365c10bc7.jpg",
    },
  ];

  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/hero")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>YOUNGS HERO</h1>
          <div className={scss.characters}>
          {young.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youngs;
