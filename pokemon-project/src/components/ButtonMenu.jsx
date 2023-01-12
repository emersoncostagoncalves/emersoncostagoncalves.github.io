import React from "react";
import "../sass/Cards.scss"



export default function ButtonMenu({name,id,url,func,image,classe}){
    
    return <button onClick={func} className="btn-menu" id={id} url={url}>
        <img className={classe} src={image} alt="normal-icon" />
        {name}
        </button>
}
