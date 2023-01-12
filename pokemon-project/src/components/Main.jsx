import React from "react"

import ContainerInfo from "./ContainerInfo"
import ContainerItems from "./ContainerItems"


export default function Main() {
    return <div className="main">
        <ContainerInfo />
        <ContainerItems />
    </div>
}