import React from "react";

import useFunctions from "../../hooks/useFunctions";

import { Button } from "./styles";

interface FiltroProps {
    filter: string
    setFilter: any
}



export default function Filtro(props:FiltroProps) {

const { setFilterTasks } = useFunctions()

    return (
        <>
        <Button filter={props.filter} id="done" onClick={(e) => setFilterTasks(e, props.filter, props.setFilter)}>Concluidas</Button>
        <Button filter={props.filter} id="pendent" onClick={(e) => setFilterTasks(e,props.filter, props.setFilter)}>Pendentes</Button>
        
        </>
        
    )
}