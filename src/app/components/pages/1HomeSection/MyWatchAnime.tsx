"use client";
import { useRouter } from "next/navigation";
import scss from "./MyWatchAnime.module.scss";
import Image from "next/image";

const MyWatchAnime = () => {
  const router = useRouter();
  const animes = [
    {
      title: "Bleach",
      img: "https://i.pinimg.com/736x/1e/e0/9c/1ee09cfeb1edd079a6e1b3ac7fead4e1.jpg",
      href: "/bleach",
    },
    {
      title: "Tokyo Revengers",
      img: "https://readrate.com/img/pictures/basic/248/248788/2487886/w816-63a825a0.jpg",
      href: "/revengers",
    },
    {
      title: "My Hero Academia",
      img: "https://i.pinimg.com/originals/61/1d/b8/611db80dd755f01b96097db534a890cd.jpg",
      href: "/hero",
    },
    {
      title: "Tokyo Ghoul",
      img: "https://i.pinimg.com/736x/31/9e/a5/319ea505cf7bac0a869261ca7480ad7c.jpg",
      href: "/ghoul",
    },
    {
      title: "Black Clover",
      img: "https://wallpapers.com/images/featured/black-clover-background-biadlcgv9s3fqdw6.jpg",
      href: "/clover",
    },
    {
      title: "Avatar",
      img: "https://mrwallpaper.com/images/hd/all-anime-avatar-last-air-bender-4ttrncxig02r4p1f.jpg",
      href: "/avatar",
    },
    {
      title: "Jujutsu Kaisen",
      img: "https://resizer.mail.ru/p/44169fb6-d534-5756-9bb5-97a5b9f6f1b5/AQACtXBO6m4cxfvl4zmSy1ShllUBaXoUKoES5Jr9pPC4a-pXp1GXPtby_oilU3n1kOSTDcVDUPcmO0YdH_94WGAztFk.png",
      href: "/jujutsu",
    },
    {
      title: "Reincarnated Slime",
      img: "https://imba.shop/image/cache/catalog/blog_custom/anime.%20Tensei%20shitara%20Slime%20Datta%20Ken/tensei-shitara-slime-datta-ken-56-0x0.webp",
      href: "/slime",
    },
    {
      title: "Seven Deadly Sins",
      img: "https://p325k7wa.twic.pics/high/seven-deadly-sins/seven-deadly-sins/00-page-setup/sds_game-thumbnail.jpg?twic=v1/resize=760/step=10/quality=80",
      href: "/sins",
    },
  ];
  return (
    <section className={scss.myWatchAnime}>
      <div className="container">
        <div className={scss.content}>
          <h2>My Watch Anime</h2>
          <div className={scss.blocks}>
            {animes.map((el, idx) => (
              <div
                className={scss.block}
                key={idx}
                onClick={() => router.push(`${el.href}`)}
              >
                <div className={scss.bg}></div>
                <Image src={el.img} alt="" width={470} height={250}/>
                <h1>{el.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWatchAnime;
