import React from "react";
import s from "./layout.module.css";
import cn from "classnames";

const Layout = ({ title, urlBg = null, colorBg = null, children }) => {
  return (
    <section
      className={s.root}
      style={
        urlBg
          ? { backgroundImage: `url(${urlBg})` }
          : { backgroundColor: colorBg }
      }
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.full, s.desc)}>
            <div className={s.p}>{children}</div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
