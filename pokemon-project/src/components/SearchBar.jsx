import React from "react";
import { useState, useLayoutEffect, useEffect } from "react";
import "../sass/SearchBar.scss";
import searchIcon from "../icons/search-icon.svg";
import { GrFormClose } from "react-icons/gr";

export default function SearchBar({ func, call }) {
  const [text, setText] = useState("");
  const [btn, setBtn] = useState(null);

  function handleInput(e) {
    setText(e.target.value);
  }

  function callAllPokemons(e) {
    setText("");
    call(btn, e);
  }

  useEffect(() => {
    setBtn(document.querySelector("#todos"));
  }, []);

  useLayoutEffect(() => {
    if (text.length > 0) {
      func(text);
    }
  }, [text, func]);

  return (
    <div id="search-bar" className="search-bar">
      <div className="search-bar-info">
        <h1>Selecione o seu Pokémon</h1>
      </div>
      <div className="search-bar-input">
        <div className="search">
          <input
            value={text}
            onChange={(e) => handleInput(e)}
            className="search-input"
            placeholder="Pesquise por nome ou código..."
            type="text"
            name=""
            id=""
          />
          {text.length === 0 ? (
            <img src={searchIcon} alt="search-icon" title="Pesquisar" />
          ) : (
            <GrFormClose
              id="close"
              onClick={(e) => callAllPokemons(e)}
              cursor="pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
