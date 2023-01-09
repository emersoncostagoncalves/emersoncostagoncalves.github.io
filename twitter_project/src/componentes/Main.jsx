import React from "react"


import SideLeft from "./SideLeft"
import ContainerCenter from "./ContainerCenter"
import SideRight from "./SideRight"

import "../sass/Main.scss"

export default function Main() {
    return <main className="main">
        <SideLeft />
        <ContainerCenter />
        <SideRight />
        
    </main>
}