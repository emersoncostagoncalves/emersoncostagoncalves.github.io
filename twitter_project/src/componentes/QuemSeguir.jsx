import React from "react"

import IconVerificado from "../icons/twitter_27.svg"
import "../sass/QuemSeguir.scss"

export default function SugestaoSeguidores() {

    const users = [
        { nome: "Nuuvem.com", icon: IconVerificado, id: "@nuuvem" },
        { nome: "UpdateCharts", icon: IconVerificado, id: "@updatecharts" },
        { nome: "Planeta do Futebol", icon: IconVerificado, id: "@futebol_info" }
    ]

    return <div className="segestao-container">
        <div className="segestao-container-titulo">
            <h1>Quem seguir</h1>
        </div>
        <div>
            {users.map(el => (
                <div className="segestao-container-card">
                    <div className="segestao-container-card-main">
                        <div className="img-perfil"></div>
                        <div className="titulo-id">
                            <div class="titulo">
                                <h1>{el.nome}</h1>
                                <img class="icon-verificado" src={IconVerificado} alt="verificado" />
                            </div>

                            <p>{el.id}</p>
                        </div>
                    </div>


                    <button className="btn-seguir">Seguir</button>
                </div>
            ))}
            
        </div>
        <div className="seguidores-footer">
                <p>Mostrar mais</p>
            </div>
    </div>
}