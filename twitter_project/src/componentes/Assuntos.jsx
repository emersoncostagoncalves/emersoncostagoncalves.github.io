import React from "react"

import "../sass/Assuntos.scss"
import IconMais from "../icons/twitter_29.svg"
export default function assuntos() {

    const assuntos = [
        { genero: "Televisão - Noite Anterior", titulo: "The Voice Brasil", tweets: "8.322 Tweets" },
        { genero: "Assunto do Momento em Brasil", titulo: "Sapata", tweets: "7.587 Tweets" },
        { genero: "Política - Assunto do momento", titulo: "R$7,40 ", tweets: "3.461 Tweets" },
        { genero: "Só no Twitter - Assunto do Momento", titulo: "#MySchoolPresidentEP5", tweets: "199 mil Tweets" },
        { genero: "Assunto do Momento em Brasil", titulo: "Nalu", tweets: "3.339 Tweets" }
    ]


    return <div className="assuntos">
        <div className="assuntos-titulo">
            <h1>O que está acontecendo</h1>
        </div>
        {assuntos.map(el => (
            <div className="assuntos-card">
                <div className="assuntos-info">
                    <h2>{el.genero}</h2>
                    <h1>{el.titulo}</h1>
                    <h3>{el.tweets}</h3>
                </div>
                <div className="icon-mais" title="Mais">
                    <img src={IconMais} alt="icon-mais" />
                </div>
            </div>
        ))}
        <div className="assuntos-footer">
            <p>Mostrar mais</p>
        </div>
    </div>
}