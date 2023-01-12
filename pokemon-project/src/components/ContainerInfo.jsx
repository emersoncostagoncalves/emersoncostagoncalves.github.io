import React from "react"

import Pokebal from "../images/pokeball-red.png"
import Shine from "../icons/shine-icon.svg"

import "../sass/ContainerInfo.scss"

export default function ContainerInfo() {
    return <div className="container-info">
        <div className="container-info-text">
            <h1>Quem é este Pokémon?</h1>
            <p>O guia perfeito para quem quer caçar pokémons pelo mundo.</p>
        </div>
        <div className="container-info-img">
            <img className="shine-icon" src={Shine} alt="brilho"  />
            <img src={Pokebal} alt="pokebola" />
        </div>
        
    </div>
}