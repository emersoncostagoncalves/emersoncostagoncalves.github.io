import React from "react";

import useFunctions from "../../hooks/useFunctions";

import { Container, Filters, Input } from "./styles";
import Filtro from "../filter/Filter";
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"


interface SearchBarProps {
    tasks: any
    setTasks: any
    filter: string
    setFilter: any
    pesquisa: string
    setPesquisa: any
}

export default function SearchBar(props: SearchBarProps) {

    const { searchTask } = useFunctions()

    return (
        <Container>
            <Filters>
                <Filtro filter={props.filter} setFilter={props.setFilter} />
            </Filters>

            <Input>
                <div>
                    <input type="text" value={props.pesquisa} onChange={(e) => searchTask(e, props.pesquisa, props.setPesquisa)} placeholder="Buscar tarefa..." />
                    {props.pesquisa.length > 0 ? <IoMdClose onClick={() => props.setPesquisa("")} color="#969696" size="25px" cursor="pointer" /> : <AiOutlineSearch color="#969696" size="25px" />}
                </div>

            </Input>


        </Container>
    )
}