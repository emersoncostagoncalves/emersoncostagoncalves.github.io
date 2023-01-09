import React from "react";
import IconMore from "../icons/twitter_29.svg"
import PerfilImage from "../images/perfil.png"
import "../sass/UserLogin.scss"

export default function UserLogin(){
    return <div className="user-login">
        <div className="img-perfil-container">
        <img src={PerfilImage} alt="perfil"/>
        </div>
        
        <div className="user-info">
            <h1>Emerson Costa</h1>
            <p>@EmersonCosta</p>
        </div>
        <img class="icon-more" src={IconMore} alt="icon-more" />
    </div>
}