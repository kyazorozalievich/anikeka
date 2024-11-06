"use client";
import BlockCard from "../../BlockCard";
import scss from "./../../GlobalDetail.module.scss";
import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Tosva = () => {
  const router = useRouter();
  const tosva = [
    {
      name: "Mayki",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6542223149df61093e70bb61_65423fdf9f0fcd51c8d922b5/scale_1200",
    },
    {
      name: "Draken",
      img: "https://i.pinimg.com/736x/50/2c/d8/502cd8b29c231b72d20723185463e527.jpg",
    },
    {
      name: "Takemichi",
      img: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/677687805981435581/b05fae3c-0367-5d61-bed3-59508d27e26d.jpeg",
    },

    {
      name: "Chifuyu",
      img: "https://i.pinimg.com/736x/df/27/ef/df27efd5f1be03e0887bae0736fd6b7b.jpg",
    },

    {
      name: "Badji",
      img: "https://i.pinimg.com/736x/66/41/c0/6641c09920b6116abdd973a9f7b84f5e.jpg",
    },
    {
      name: "Atsushi",
      img: "https://sun9-41.userapi.com/impg/-XdQm-iyAVzze-hS_Qzov278mHi52pW838-YuQ/dduEKsKPCws.jpg?size=540x540&quality=96&sign=c759006e28e2f11d7d67d55b98a70c61&type=album",
    },
    {
      name: "Kisaki",
      img: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/678023217157454858/649bbe10-defe-509f-9847-a30f7e563c8e.jpeg",
    },
    {
      name: "Hanma",
      img: "https://i.pinimg.com/1200x/4e/1c/e7/4e1ce7aa1173e229eaba279ec6be3514.jpg",
    },
    {
      name: "Kazutoro",
      img: "https://i.pinimg.com/736x/5d/2b/41/5d2b41fa14a185831b013a34f5db8524.jpg",
    },
    {
      name: "Kokonoi",
      img: "https://sticker-collection.com/stickers/plain/Hajime_Kokonoi_anime/thumbs/d4064b56-9bbb-41dc-905a-5c7e8867736cfile_4224167.webp",
    },
    {
      name: "Kazushi",
      img: "https://i.pinimg.com/originals/6d/c4/e6/6dc4e6bf9b9bd22bb0a3d2186d2106ee.jpg",
    },
    {
      name: "Makoto",
      img: "https://assets.mycast.io/characters/makoto-suzuki-6952522-normal.jpg?1654083384",
    },
    {
      name: "Nahoya",
      img: "https://i.pinimg.com/736x/64/49/45/6449450278c3984120190f8473376947.jpg",
    },
    {
      name: "Soya",
      img: "https://img.wattpad.com/c541feac4f05d9ee3990773814918d26042b35eb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f454e697a383336364959313135413d3d2d313139353030353039312e313664356365633635646232303437323835363631353334393339362e6a7067?s=fit&w=720&h=720",
    },
    {
      name: "Ryohei",
      img: "https://i.pinimg.com/736x/07/c6/98/07c698e4844132584d04845294758325.jpg",
    },
    {
      name: "Mitsuya",
      img: "https://i.pinimg.com/736x/d3/0e/43/d30e43ef38272a8722fd795aaf17d903.jpg",
    },
    {
      name: "Hakkai",
      img: "https://cdn.myanimelist.net/r/200x268/images/characters/6/527757.jpg?s=ded9054f0c0bc38bb475b199ab8e9bcf",
    },
    {
      name: "Hayashida",
      img: "https://i.pinimg.com/originals/6a/0c/63/6a0c630ea2d0bc37d8cacab3a1322dfe.jpg",
    },
    {
      name: "Sanzu",
      img: "https://i.pinimg.com/736x/19/fb/32/19fb32480927b3aafa1631e283b73cfe.jpg",
    },
  ];
  return (
    <section className={scss.detailMain}>
      <div className="container">
        <div className={scss.detail}>
          <a onClick={() => router.push("/revengers")}>
            <PiArrowFatLinesLeftFill />
          </a>
          <h1>TOSVA</h1>
          <div className={scss.characters}>
          {tosva.map((el, idx) => (
              <BlockCard el={el} key={idx}/>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Tosva;
