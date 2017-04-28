import React from "react";
import NavLink from "./NavLink";
import s from "./index.scss";

export default () =>
  <nav style={{height:'0.98rem'}} className="flex border-top">
    <NavLink
      exact
      pathUrl="/"
      icoName={"i-home"}
      active={s.home}
      linkName="首页"
    />
    <NavLink
      pathUrl="/hot"
      icoName="i-hot"
      active={s.hot}
      linkName="要闻"
    />
    <NavLink
      pathUrl="/me"
      icoName="i-user"
      active={s.me}
      linkName="我"
    />
  </nav>;
