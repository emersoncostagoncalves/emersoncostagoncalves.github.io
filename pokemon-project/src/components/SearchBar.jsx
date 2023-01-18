import React from "react"

import "../sass/SearchBar.scss"
import searchIcon from "../icons/search-icon.svg"

export default function SearchBar({func}) {
    return <div id="search-bar" className="search-bar">
        <div className="search-bar-info">
            <h1>Selecione o seu Pokémon</h1>
        </div>
        <div className="search-bar-input">
            <input onKeyUp={func} className="search-input" placeholder="Pesquise por nome ou código..." type="text" name="" id="" />
            <img src={searchIcon} alt="search-icon" title="Pesquisar" />
        </div>
    </div>
}