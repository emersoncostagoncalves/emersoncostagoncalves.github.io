import React from "react";

import { FiArrowUp } from "react-icons/fi"
import "../sass/ButtonTop.scss"





window.onscroll = () => {
    const btnTop = document.querySelector(".btn-scroll-top")
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnTop.style.display = "flex"
    } else {
        btnTop.style.display = "none"
    }
}


function scrollTop() {
window.scrollTo(0,0)
}


export default function ButtonTop() {
    return (
        <div className="btn-scroll-top" onClick={scrollTop} title="Scroll Top">
            <FiArrowUp className="arrow-up-icon" />
        </div>
    )
}