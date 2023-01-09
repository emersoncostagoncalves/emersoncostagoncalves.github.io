import React from "react"



import "../sass/ContainerCenter.scss"
import "../sass/Scrap.scss"
import "../sass/MenuPost.scss"

import ImgPerfil from "../images/perfil.png"

import IconMidia from "../icons/twitter_12.svg"
import IconGif from "../icons/twitter_13.svg"
import IconEnquete from "../icons/twitter_14.svg"
import IconEmoji from "../icons/twitter_15.svg"
import IconProgramar from "../icons/twitter_16.svg"
import IconLocal from "../icons/twitter_17.svg"

import imagePerfil from "../images/perfil.png"
import iconStats from "../icons/twitter_21.svg"
import iconResp from "../icons/twitter_22.svg"
import iconRet from "../icons/twitter_23.svg"
import iconCurtir from "../icons/twitter_24.svg"
import iconShare from "../icons/twitter_25.svg"
import iconMore from "../icons/twitter_29.svg"


import iconDelete from "../icons/icon-delete.svg"
import iconFixar from "../icons/fixar-icon.svg"
import iconAdd from "../icons/add-icon.svg"
import iconChange from "../icons/icon-change.svg"
import iconIncor from "../icons/icon-incor.svg"
import iconStats2 from "../icons/icon-stats.svg"

import "../sass/Tweetar.scss"






function Tweetar() {


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

let id = 0

function SendScrap(e) {
    id++

    const tempoPost = new Date()

    const textarea = document.querySelector(".input-tweetar")
    const container = document.querySelector(".container-center")
    const scraps = document.createElement("div")
    scraps.className = "scrap-container"
    scraps.id = `${id}-post`


    scraps.innerHTML = `
    
    <div class="scrap-img-perfil-container">
            <div class="scrap-img-perfil">
                <img src=${imagePerfil} alt="image-perfil" />
            </div>
        </div>
        <div class="scrap-info-container">
            <div class="scrap-info-header">
                <h1>Emerson Costa</h1>
                <p>@EmersonCosta</p>
                <p class="timer">${tempoPost.getUTCDate()}/${tempoPost.getMonth() + 1}/${tempoPost.getFullYear()}</p>
            </div>
            <div class="scrap-info-center">
                <p>${textarea.value}</p>
            </div>
            <div class="scrap-info-footer">
                <div class="scrap-icons">
                    <img src=${iconStats} alt="icon-stats" />
                </div>
                <div class="scrap-icons">
                    <img src=${iconResp} alt="icon-resp" />
                </div>
                <div class="scrap-icons">
                    <img src=${iconRet} alt="icon-ret" />
                </div>
                <div class="scrap-icons">
                    <img src=${iconCurtir} alt="icon-curtir" />
                </div>
                <div class="scrap-icons">
                    <img src=${iconShare} alt="icon-share" />
                </div>

            </div>
        </div>
        <div id=${id}-scrap-options class="scrap-options">
            <div id=${id}-post-bnt-more class="scrap-icon-more">
                <img src=${iconMore} alt="more-icon" />
            </div>
            
        </div>
    
    `
    if (textarea.value.length > 0) {
        container.appendChild(scraps)
    }

    console.log(textarea.value)

    const btnPostMore = document.querySelectorAll(".scrap-icon-more")
    btnPostMore.forEach(el => {
        el.onclick = e => {
            const id = parseInt(el.id)

            const menuPost = document.createElement("div")
            menuPost.className = "menu-post"
            menuPost.id = `${el.id}-menu-post`
            menuPost.innerHTML = `
            <div id=${id}-btn-excluir-post class="menu-post-item excluir">
                  <img src=${iconDelete} title="icon-delet"
                  <p>Excluir</p>
               </div>
               <div class="menu-post-item fixar">
                  <img src=${iconFixar} title="icon-fixar"
                  <p>Fixar no seu perfil</p>
               </div>
               <div class="menu-post-item add">
                  <img src=${iconAdd} title="icon-fixar"
                  <p>Adicionar/remover @EmersonCosta das Listas</p>
               </div>
               <div class="menu-post-item alterar">
                  <img src=${iconChange} title="icon-alterar"
                  <p>Altere quem pode responder</p>
               </div>
               <div class="menu-post-item incorporar">
                  <img src=${iconIncor} title="icon-alterar"
                  <p>Incorporar Tweet</p>
               </div>
               <div class="menu-post-item stats">
                  <img src=${iconStats2} title="icon-stats"
                  <p>Ver estatísticas do Tweet</p>
               </div>
            `
            const postOptions = document.getElementById(`${id}-scrap-options`)
            postOptions.appendChild(menuPost)

            const btnExcluir = document.querySelectorAll(".excluir")

            btnExcluir.forEach(el => {
                el.onclick = e => {
                    const id = parseInt(el.id, 10)
                    console.log(id)
                    const post = document.getElementById(`${id}-post`)
                    post.remove()
                }
            })

            menuPost.onmouseleave = e => {
                e.target.remove()
            }

            /*
            
            */
        }
    })


}



export default function ContainerCenter() {

    return <div className="container-center">
        <Tweetar />

    </div>


}


