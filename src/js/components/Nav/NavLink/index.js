import React from "react";
import {NavLink} from "react-router-dom";

export default ({pathUrl, active, icoName, linkName, ...rest}) =>
  <NavLink
    {...rest}
    to={pathUrl}
    activeClassName={active}
    className="equal center-center c-999 nav column"
  >
    <i className={`${icoName} font-42 pb6`} />
    <span className="line-height-single font-24">{linkName}</span>
  </NavLink>;