import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

import "../sass/Cards.scss"
import "../sass/InfoPokemon.scss"
import InfoPokemon from './InfoPokemon'
import Logo from "../images/pokemon-logo.svg"


import iconNormal from "../icons/normal-icon.svg"
import iconFighting from "../icons/fighting-icon.svg"
import iconFlying from "../icons/flying-icon.svg"
import iconPoison from "../icons/poison-icon.svg"
import iconGround from "../icons/ground-icon.svg"
import iconRock from "../icons/rock-icon.svg"
import iconBug from "../icons/bug-icon.svg"
import iconGhost from "../icons/ghost-icon.svg"
import iconSteel from "../icons/steel-icon.svg"
import iconFire from "../icons/fire-icon.svg"
import iconWater from "../icons/water-icon.svg"
import iconGrass from "../icons/grass-icon.svg"
import iconEletric from "../icons/eletric-icon.svg"
import iconPhyschic from "../icons/physchic-icon.svg"
import iconIce from "../icons/ice-icon.svg"
import iconDragon from "../icons/dragon-icon.svg"
import iconDark from "../icons/dark-icon.svg"
import iconFairy from "../icons/fairy-icon.svg"
import iconUnknown from "../icons/normal-icon.svg"
import iconShadow from "../icons/normal-icon.svg"

export default function Cards({ name, image, id, type, imgType }) {

    let [info, setInfo] = useState(false)
    let [arr, setArr] = useState([])



    function iconPokemons(type) {
        const icon = [{ name: "normal", icon: iconNormal }, { name: "fighting", icon: iconFighting }, { name: "flying", icon: iconFlying }, { name: "poison", icon: iconPoison },
        { name: "ground", icon: iconGround }, { name: "rock", icon: iconRock }, { name: "bug", icon: iconBug }, { name: "ghost", icon: iconGhost }, { name: "steel", icon: iconSteel }, { name: "fire", icon: iconFire },
        { name: "water", icon: iconWater }, { name: "grass", icon: iconGrass }, { name: "electric", icon: iconEletric }, { name: "psychic", icon: iconPhyschic }, { name: "ice", icon: iconIce },
        { name: "dragon", icon: iconDragon }, { name: "dark", icon: iconDark }, { name: "fairy", icon: iconFairy }, { name: "unknown", icon: iconUnknown }, { name: "shadow", icon: iconShadow }

        ]

        const pokeType = icon.filter(el => el.name === type)
        console.log(pokeType[0].icon)
        return pokeType[0].icon

    }



    function RenderInfoCard(e) {
        if (arr.length > 0) {
            return
        }
        e.preventDefault()
        setArr([])
        const id = parseInt(e.currentTarget.attributes.id.value.replace("#", ""), 10)
        console.log(id)
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        fetch(url)
            .then(resp => resp.json())
            .then(dados => {
                document.title = `${dados.name.charAt(0).toUpperCase()}${dados.name.slice(1, dados.name.lenght)} - Pokédex`
                arr.push(<InfoPokemon type={dados.types[0].type.name} imgType={iconPokemons(dados.types[0].type.name)} func={removerInfoCard} abilities={dados.abilities} weight={dados.weight} height={dados.height} speedStat={dados.stats[5].base_stat} spDefensekStat={dados.stats[4].base_stat} spAttackStat={dados.stats[3].base_stat} defenseStat={dados.stats[2].base_stat} attackStat={dados.stats[1].base_stat} hpStat={dados.stats[0].base_stat} name={dados.name} id={dados.id} image={dados.sprites.other.home.front_default ? dados.sprites.other.home.front_default : Logo} />)
                setArr(arr)
                console.log(dados.stats[0].base_stat)
            })

        setInfo(info = true)

        console.log(info)

    }

    function removerInfoCard() {
        const tag = document.querySelector("[actived='']")
        document.title = `${tag.innerText ?? "Início"} - Pokédex`
        if (arr.length === 0) {
            return
        }
        const infoCard = document.querySelector(".info-pokemon-container")
        infoCard.setAttribute("info-close", "")

        infoCard.onanimationend = e => {
            if (e.animationName === "animaOut") {
                setArr([])
                
            }

        }



    }



    return <div id={id} onClick={RenderInfoCard} className='card'>
        <div className='card-img'>
            <img src={image} alt={name} />
        </div>
        <div className='card-id'>
            <p>{id}</p>
        </div>
        <div className='card-footer-info'>
            <h1>{name}</h1>
            <img className={type} src={imgType} alt={type} />
        </div>
        {info && ReactDOM.createPortal([...arr], document.querySelector(".app"))}
    </div>
}




