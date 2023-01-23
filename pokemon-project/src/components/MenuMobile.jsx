import React from "react";
import "../sass/MenuMobile.scss"

export default function MenuMobile(props) {

    return (
        <div className="menu-mobile-container">
            {props.children}
        </div>
    )
}