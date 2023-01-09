import React from "react";
import { useState } from "react";


import ImgPerfil from "../images/perfil.png"

import IconMidia from "../icons/twitter_12.svg"
import IconGif from "../icons/twitter_13.svg"
import IconEnquete from "../icons/twitter_14.svg"
import IconEmoji from "../icons/twitter_15.svg"
import IconProgramar from "../icons/twitter_16.svg"
import IconLocal from "../icons/twitter_17.svg"
import Scrap from "./Scrap";
import "../sass/Tweetar.scss"

export default function Tweetar() {

    const [contador, setContador] = useState(0)



    let scraps = []


    function inputautoHeight() {
        console.log("desparada")
        const textarea = document.querySelector(".input-tweetar")
        const btn = document.querySelector(".btn-tweetar")

        textarea.style.height = "14px";
        textarea.style.height = (textarea.scrollHeight) + "px";

        if (textarea.value.length > 0) {
            btn.setAttribute("btn-active", "")
        } else {
            btn.removeAttribute("btn-active")
        }

    }


    function SendScrap(e) {
        const textarea = document.querySelector(".input-tweetar")
        console.log(textarea.value)
        console.log(contador)
        setContador((count) => count + 1)

        for (let i = 0; i < contador; i++) {
            scraps.push(<Scrap key={i} number={i} msg={textarea.value}/>)
        }

        

        return {scraps}
    }



    return <div className="tweetar-container">
        <div className="tweetar-img-perfil-container">
            <div className="tweetar-img-perfil">
                <img src={ImgPerfil} alt="img-perfil" />
            </div>
        </div>
        <div class="tweetar-input-tools">

            <div className="input-container">

                <textarea class="input-tweetar" placeholder="O que está acontecendo?" onInput={inputautoHeight}></textarea>


            </div>
            <div className="tools-container">
                <div className="tools-img">
                    <div class="btn-tools">
                        <img src={IconMidia} alt="midia" title="Mídia" />
                    </div>
                    <div class="btn-tools">
                        <img src={IconGif} alt="gif" title="Gif" />
                    </div>
                    <div class="btn-tools">
                        <img src={IconEnquete} alt="enquete" title="Enquete" />
                    </div>
                    <div class="btn-tools">
                        <img src={IconEmoji} alt="emoji" title="Emoji" />
                    </div>
                    <div class="btn-tools">
                        <img src={IconProgramar} alt="programar" title="Programar" />
                    </div>
                    <div class="btn-tools-local">
                        <img src={IconLocal} alt="local" />
                    </div>
                </div>
                <button className="btn-tweetar" onClick={SendScrap}>Tweetar</button>
            </div>
        </div>
    </div>
}