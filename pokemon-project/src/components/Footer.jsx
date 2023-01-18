import React from "react"

import Logo from "../images/pokemon-logo.svg"

import "../sass/Footer.scss"

const ano = new Date()

export default function Footer() {
    return <footer className="footer">
        <img src={Logo} alt="logo pokemon" title="Pokédex" />
        <div className="footer-info">
            <h1>© {ano.getFullYear()} POKÉDEX - Todos os Direitos Reservados</h1>
            <p>Powered by Emerson Costa Gonçalves</p>
        </div>

    </footer>
}