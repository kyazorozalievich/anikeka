"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter()
  return (
    <section className={scss.header}>
      <div className={scss.bg}>

      <div className="container">
        <div className={scss.content}>
          <h1 onClick={()=> router.push('/')}>AniKeka</h1>
          <div className={scss.components}>
            <Link href="/">Home</Link>
            <Link href="/">Categories</Link>
            <Link href="/">About</Link>
            <Link href="/">Word</Link>
          </div>
          <div className={scss.actions}>
            <div className={scss.input}>
              <input type="text" placeholder="Search anime" />
              <span>
                <FiSearch />
              </span>
            </div>
            <a className={scss.world}>
              <GiWorld />
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Header;
