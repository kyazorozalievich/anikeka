"use client";
import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={scss.welcome}> 
    <div className={scss.bg}></div>
      <div className="container">
        <div className={scss.content}>
          <h1>Welcome to my World Anime</h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
