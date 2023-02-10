import React from "react"
import { GrFormClose } from "react-icons/gr"


import bgNormal from "../images/bg-normal.svg"
import bgFighting from "../images/bg-fighting.svg"
import bgFlying from "../images/bg-flying.svg"
import bgPoison from "../images/bg-poison.svg"
import bgGround from "../images/bg-ground.svg"
import bgRock from "../images/bg-rock.svg"
import bgBug from "../images/bg-bug.svg"
import bgGhost from "../images/bg-ghost.svg"
import bgSteel from "../images/bg-steel.svg"
import bgFire from "../images/bg-fire.svg"
import bgWater from "../images/bg-water.svg"
import bgGrass from "../images/bg-grass.svg"
import bgElectric from "../images/bg-electric.svg"
import bgPsychic from "../images/bg-psychic.svg"
import bgIce from "../images/bg-ice.svg"
import bgDragon from "../images/bg-dragon.svg"
import bgDark from "../images/bg-dark.svg"
import bgFairy from "../images/bg-fairy.svg"

export default function InfoPokemon({ type, imgType, func, image, name, id, height, weight, abilities, weak, hpStat, attackStat, defenseStat, spAttackStat, spDefensekStat, speedStat }) {

    const bgInfo = [
        { name: "normal", bg: bgNormal },
        { name: "fighting", bg: bgFighting },
        { name: "flying", bg: bgFlying },
        { name: "poison", bg: bgPoison },
        { name: "ground", bg: bgGround },
        { name: "rock", bg: bgRock },
        { name: "bug", bg: bgBug },
        { name: "ghost", bg: bgGhost },
        { name: "steel", bg: bgSteel },
        { name: "fire", bg: bgFire },
        { name: "water", bg: bgWater },
        { name: "grass", bg: bgGrass },
        { name: "electric", bg: bgElectric },
        { name: "psychic", bg: bgPsychic },
        { name: "ice", bg: bgIce },
        { name: "dragon", bg: bgDragon },
        { name: "dark", bg: bgDark },
        { name: "fairy", bg: bgFairy }
    ]

    function setBg(type) {
        const bg = bgInfo.filter(el => el.name === type)
        console.log(bg)
        return bg[0].bg
    }

    console.log(height.toString().split(""))




    return (
        <div className="info-pokemon-bg">
            <div className="info-pokemon-container" >
                <div className="info-pokemon-container-header">
                    <div className="text-container-title">
                        <div className="container-title-type">
                            <div className="title-id"><h1>{name}</h1>
                                <p>#{id}</p>
                            </div>

                            <div className="info-type" >
                                <img className={type} src={imgType} alt="type-icon" title={type} />
                                <p className={type}>{type}</p>
                            </div>
                        </div>

                    </div>
                    <button className="bnt-close" onClick={func}><GrFormClose className="close-icon" title="fechar" /></button>
                </div>
                <div className="info-pokemon-img-container">


                    <img src={image} alt={name} />
                </div>
                <div className="info-pokemon-text-container">

                    <div className="info-pokemon-text-container-main">

                        <div className="text-container-details">
                            <div>
                                <p>Altura</p>
                                <p>{height.toString().split("").length > 1 ? height.toString().slice(0, 1) + "." + height.toString().slice(1, 2) + "m" : "0." + height + "m"}</p>
                            </div>
                            <div>
                                <p>Peso</p>
                                <p>{weight.toString().split("").length > 2 ? weight.toString().slice(0, 2) + "." + weight.toString().slice(2, 3) + "kg" : weight.toString().slice(0, 1) + "." + weight.toString().slice(1, 2) + "kg"}</p>
                            </div>
                            <div>
                                <p>Habilidades</p>
                                <div className="abilities">
                                    {abilities.map(el => (
                                        <p className="options">{el.ability.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-container-weak">
                            <div>
                                {weak}
                            </div>
                        </div>
                        <div className="text-container-stats">
                            <div id="hp" className="stats-container">
                                <p>HP <span>{hpStat}</span></p>

                                <progress id="hp" value={hpStat} max="100"> {hpStat}% </progress>
                            </div>
                            <div id="attack" className="stats-container">
                                <p>Ataque <span>{attackStat}</span></p>
                                <progress id="hp" value={attackStat} max="100"> {attackStat}% </progress>
                            </div>
                            <div id="defense" className="stats-container">
                                <p>Defesa <span>{defenseStat}</span></p>
                                <progress id="hp" value={defenseStat} max="100"> {defenseStat}% </progress>
                            </div>
                            <div id="sp-attack" className="stats-container">
                                <p>Sp. Attack <span>{spAttackStat}</span></p>
                                <progress id="hp" value={spAttackStat} max="100"> {spAttackStat}% </progress>
                            </div>
                            <div id="sp-defense" className="stats-container">
                                <p>Sp. Defesa <span>{spDefensekStat}</span></p>
                                <progress id="hp" value={spDefensekStat} max="100"> {spDefensekStat}% </progress>
                            </div>
                            <div id="speed" className="stats-container">
                                <p>Velocidade <span>{speedStat}</span></p>
                                <progress id="hp" value={speedStat} max="100"> {speedStat}% </progress>
                            </div>

                        </div>
                    </div>
                </div>
                <img className="bg-image" src={setBg(type)} alt="bg-info" />
            </div>

        </div>
    )



}