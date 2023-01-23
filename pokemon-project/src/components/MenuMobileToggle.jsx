import React from "react";

import "../sass/MenuMobileToggle.scss"

export default function MenuMobileToggle() {



function displayMenuMobile(){
    const menuMobile = document.querySelector(".menu-mobile-container")
    const inputMenu = document.querySelector("#checkbox")
    console.log("Cliquei no menu mobile")
    

if(inputMenu.checked === true){
    menuMobile.classList.toggle("display")
}else{
    menuMobile.classList.toggle("display")
}

    
}


    return (
        <div  className="menu-toggle-container" for="checkbox">
            <input id="checkbox" type="checkbox"></input>
            <label class="menu-label" onClick={displayMenuMobile} for="checkbox">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}