import React from "react"

import { BsArrowRightShort } from "react-icons/bs"

import "../sass/Header.scss"

import Logo from "../images/pokemon-logo.svg"


export default function Header(){
    return <header className="header">
        <a href="index.html"><img  className="logo" src={Logo} alt="Pokemon-logo" title="Pokémon"/></a>
        <a href="https://emersoncostagoncalves.github.io/" target="_blank" rel="noreferrer">Powered by <BsArrowRightShort className="arrow-icon"/> Emerson Costa</a>
    </header>
}
