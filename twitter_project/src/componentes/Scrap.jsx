import React from "react";

import "../sass/Scrap.scss"

import imagePerfil from "../images/perfil.png"
import iconStats from "../icons/twitter_21.svg"
import iconResp from "../icons/twitter_22.svg"
import iconRet from "../icons/twitter_23.svg"
import iconCurtir from "../icons/twitter_24.svg"
import iconShare from "../icons/twitter_25.svg"
import iconMore from "../icons/twitter_29.svg"

export default function Scrap(props) {
    return <div key={props.key} number={props.number}  className="scrap-container">
        <div className="scrap-img-perfil-container">
            <div className="scrap-img-perfil">
                <img src={imagePerfil} alt="image-perfil" />
            </div>
        </div>
        <div className="scrap-info-container">
            <div className="scrap-info-header">
                <h1>Emerson Costa</h1>
                <p>@EmersonCosta</p>
                <p>time</p>
            </div>
            <div className="scrap-info-center">
                <p>{props.msg}</p>
            </div>
            <div className="scrap-info-footer">
                <div class="scrap-icons">
                    <img src={iconStats} alt="icon-stats" />
                </div>
                <div class="scrap-icons">
                    <img src={iconResp} alt="icon-resp" />
                </div>
                <div class="scrap-icons">
                    <img src={iconRet} alt="icon-ret" />
                </div>
                <div class="scrap-icons">
                    <img src={iconCurtir} alt="icon-curtir" />
                </div>
                <div class="scrap-icons">
                    <img src={iconShare} alt="icon-share" />
                </div>

            </div>
        </div>
        <div className="scrap-options">
            <div className="scrap-icon-more">
                <img src={iconMore} alt="more-icon" />
            </div>
        </div>
    </div>
}