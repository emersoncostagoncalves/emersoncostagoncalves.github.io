import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../sass/MenuMobileToggle.scss";

export default function MenuMobileToggle() {
  const [menuMobile, setmenuMobile] = useState("");

  useEffect(() => {
    setmenuMobile(document.querySelector(".menu-mobile-container"));
  }, []);

  function displayMenuMobile() {
    menuMobile.classList.toggle("display");
    console.log("cliquei no label");
  }

  return (
    <div className="menu-toggle-container">
      <input onChange={displayMenuMobile} id="checkbox" type="checkbox"></input>
      <label className="menu-label" htmlFor="checkbox">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
