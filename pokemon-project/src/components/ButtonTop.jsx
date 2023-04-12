import React from "react";

import { FiArrowUp } from "react-icons/fi";
import "../sass/ButtonTop.scss";

window.onscroll = () => {
  const btnTop = document.querySelector(".btn-scroll-top");
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
};

export default function ButtonTop() {
  return (
    <a href="#pokemons">
      <div className="btn-scroll-top" title="Scroll Top">
        <FiArrowUp className="arrow-up-icon" />
      </div>
    </a>
  );
}
