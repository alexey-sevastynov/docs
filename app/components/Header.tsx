import React from "react";
import "./Header.css";
import { MyContext } from "./MyContext";

export function Header() {
  const { setTab } = React.useContext(MyContext);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper__count" onClick={() => setTab(true)}>
          РАХУНОК
        </div>
        <div className="wrapper__act" onClick={() => setTab(false)}>
          АКТ
        </div>
      </div>
    </div>
  );
}

export default Header;
