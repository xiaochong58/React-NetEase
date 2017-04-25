import React from "react";
import {Link} from "react-router-dom";

export default ({text, path}) =>
  <div className="center-center-column ptb20">
    <div className="c999">{text ? text : "暂无数据，敬请期待！"}</div>
    {
      path &&
      <div className="mt10">
        您可以去 <Link to={path} className="c-main font-28">这里</Link> 逛逛
      </div>
    }
  </div>;