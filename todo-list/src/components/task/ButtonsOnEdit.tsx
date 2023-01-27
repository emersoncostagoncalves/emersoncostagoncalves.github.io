import React from "react";

import { ButtonOn } from "./styles";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { MdCancel } from "react-icons/md"



export default function ButtonsOnEdit(props:any) {



    return (
        <>
            <ButtonOn id="btn-cancel" onClick={() => props.cancel(props.task)} color="#E34F4F"><MdCancel color="white" size="25px" /></ButtonOn>
            <ButtonOn id="btn-save" onClick={() => props.save(props.task)} color="#5DE290"><BsFillCheckCircleFill color="white" size="22px" /></ButtonOn>
        </>
    )
}