import React from "react"
import { GrFormClose } from "react-icons/gr"


export default function InfoPokemon({ type, imgType, func, image, name, id, height, weight, abilities, weak, hpStat, attackStat, defenseStat, spAttackStat, spDefensekStat, speedStat }) {


    console.log(height.toString().split(""))

    return <div className="info-pokemon-bg">
        <div className="info-pokemon-container">
            <div className="info-pokemon-container-header">
                <div className="text-container-title">
                    <div className="container-title-type">
                        <div className="title-id"><h1>{name}</h1>
                            <p>#{id}</p>
                        </div>

                        <div class="info-type" >
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
                        <p>Fraquezas</p>
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
        </div>
    </div>
}