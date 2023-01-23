import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../sass/MenuMobileToggle.scss"

export default function MenuMobileToggle() {

const [menuMobile, setmenuMobile] = useState("")
const [inputMenu, setinputMenu] = useState("")


useEffect(() => {
    setmenuMobile(document.querySelector(".menu-mobile-container"))
    setinputMenu(document.querySelector("#checkbox"))
})

function displayMenuMobile(){
    

 menuMobile.classList.toggle("display")
    


    
}


    return (
        <div className="menu-toggle-container" >
            <input id="checkbox" type="checkbox" ></input>
            <label onClick={displayMenuMobile}  class="menu-label" for="checkbox">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}