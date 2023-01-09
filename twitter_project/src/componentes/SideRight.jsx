import React from "react"

import Assuntos from "./Assuntos"
import QuemSeguir from "./QuemSeguir"
import Termos from "./Termos"

import "../sass/SideRight.scss"

export default function SideRight() {
    return <div className="side-right">
        <Assuntos />
        <QuemSeguir />
        <Termos/>
    </div>
}