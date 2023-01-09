import React from "react"
import Twitter1 from "../icons/twitter_1.svg"
import Twitter2 from "../icons/twitter_2.svg"
import Twitter3 from "../icons/twitter_3.svg"
import Twitter4 from "../icons/twitter_4.svg"
import Twitter5 from "../icons/twitter_5.svg"
import Twitter6 from "../icons/twitter_6.svg"
import Twitter7 from "../icons/twitter_7.svg"
import Twitter8 from "../icons/twitter_8.svg"

import "../sass/SideLeft.scss"
import UserLogin from "./UserLogin"

export default function SideLeft(){

    const menuList = [
        {nome: "Página inicial", icon: Twitter1},
        {nome: "Explorar", icon: Twitter2},
        {nome: "Notificações", icon: Twitter3},
        {nome: "Mensagens", icon: Twitter4},
        {nome: "Itens Salvos", icon: Twitter5},
        {nome: "Lista", icon: Twitter6},
        {nome: "Perfil", icon: Twitter7},
        {nome: "Mais", icon: Twitter8}
    ]
    return <div className="side-left">
        <div className="menu-btn-tweet">
        <nav className="menu">
            {menuList.map(el => (
                <span id={el.nome} key={el.nome}><img src={el.icon} alt={el.nome}/><a href="#">{el.nome}</a></span>
            ))}
        </nav>
        <div className="btn-tweet">
            <a href="#">Tweet</a>
        </div>
        </div>
        
        <UserLogin />
    </div>
}