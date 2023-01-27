


import { ButtonOff } from "./styles";
import { BiTrash } from "react-icons/bi"
import { BiEditAlt } from "react-icons/bi"




export default function ButtonsOffEdit(props:any) {

    

    return (
        <>
            <ButtonOff name="edit" id={props.id} onClick={() => props.edit(props.task)} color="white" width="25%"><BiEditAlt color="#cfcfcf" size="20px" /></ButtonOff>
            <ButtonOff name="delet" id={props.id} onClick={() => props.delete(props.id, props.setbar, props.tasks, props.setTasks)} color="white" width="25%px"><BiTrash color="#cfcfcf" size="20px" /></ButtonOff>
        </>
    )
}