import React from "react";

import { Container, Data } from "./styles";


export default function Header() {
    const dataAtual = new Date()

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

    return (



        <Container>
            <Data>
                <h1>{dataAtual.getDate()}</h1>
                <div>
                    <span>{meses[dataAtual.getMonth()]}</span>
                    <span>{dataAtual.getFullYear()}</span>
                </div>
            </Data>
            <h1>{dias[dataAtual.getDay()]}</h1>
        </Container>
    )
}