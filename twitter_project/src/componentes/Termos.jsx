import React from "react";
import IconMore from "../icons/twitter_29.svg"
import "../sass/Termos.scss"

export default function Termos() {
    return <div className="termos-container">
        <div>
            <a href="https://twitter.com/tos">Termos de Serviço</a>
            <a href="https://twitter.com/privacy">Política de Privacidade</a>
            <a href="https://support.twitter.com/articles/20170514">Política de cookies</a>
            <a href="https://help.twitter.com/resources/accessibility">Acessibilidade</a>
            <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Informações de anúncios</a>
            <a className="link-icon" href="#">Mais <img src={IconMore} alt="mais-icon" /></a>
        </div>
        <p>© 2023 Twitter, Inc.</p>
    </div>
}