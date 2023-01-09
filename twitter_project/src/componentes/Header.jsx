import { Component } from "react"


import "../sass/header.scss"

import TwitterLogo from "../icons/twitter_logo.svg"
import TopTweets from "../icons/twitter_10.svg"
import SearchIcon from "../icons/search.svg"



export default class Header extends Component {

    constructor(props){
        super(props)
        this.setFocus = this.setFocus.bind(this)
    }

    state = {
        focus: this.props.focus
    }

    setFocus(){
        console.log("setei o focus")
        this.setState({focus: "oi"})
        const img = document.querySelector(".search-icon")
        const input = document.querySelector(".search-bar")
        input.placeholder = "Buscar no Twitter"
        img.setAttribute("focus","")
        console.log(img)
    }

    removeFocus(){
        const img = document.querySelector(".search-icon")
        img.removeAttribute("focus")
        const input = document.querySelector(".search-bar")
        input.placeholder = "Buscar no Twitter"
    }
    
    render(){

        return  (<header className="header">
        <section className="header-left">
            <div className="logo-container">
            <img className="twitter-logo" src={TwitterLogo} alt="Twitter Logo" />
            </div>
            
        </section>
        <section className="header-center">
            <h1>Página Inicial</h1>
            <img className="top-tweets" src={TopTweets} alt="Top Tweets" />

        </section>
        <section className="header-right">
            <img className="search-icon" src={SearchIcon} alt="Pesquisar" />
            <input className="search-bar" type="text" onFocus={this.setFocus} onBlur={this.removeFocus} placeholder="Buscar no Twitter" />
        </section>
    </header>
        )
    }
      
        
    

    
}

