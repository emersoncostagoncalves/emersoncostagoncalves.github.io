import React from "react"
import { Component } from "react"

import SearchBar from "./SearchBar"
import ButtonMenu from "./ButtonMenu"
import Cards from "./Cards"


import "../sass/ContainerItems.scss"
import "../sass/Cards.scss"

import iconNormal from "../icons/normal-icon.svg"
import iconFighting from "../icons/fighting-icon.svg"
import iconFlying from "../icons/flying-icon.svg"
import iconPoison from "../icons/poison-icon.svg"
import iconGround from "../icons/ground-icon.svg"
import iconRock from "../icons/rock-icon.svg"
import iconBug from "../icons/bug-icon.svg"
import iconGhost from "../icons/ghost-icon.svg"
import iconSteel from "../icons/steel-icon.svg"
import iconFire from "../icons/fire-icon.svg"
import iconWater from "../icons/water-icon.svg"
import iconGrass from "../icons/grass-icon.svg"
import iconEletric from "../icons/eletric-icon.svg"
import iconPhyschic from "../icons/physchic-icon.svg"
import iconIce from "../icons/ice-icon.svg"
import iconDragon from "../icons/dragon-icon.svg"
import iconDark from "../icons/dark-icon.svg"
import iconFairy from "../icons/fairy-icon.svg"
import iconUnknown from "../icons/normal-icon.svg"
import iconShadow from "../icons/normal-icon.svg"
import Logo from "../images/pokemon-logo.svg"
import pokeballBlue from "../icons/pokeball-blue.svg"

import pokebalRedIcon from "../icons/pokeball-red-icon.svg"

export default class ContainerItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dados: [],
            pokemonData: [],
            pokemonsQnt: "",
            pokemonAll: [],
            pages: [],
            btn: []
        }
        this.saudacao = this.saudacao.bind(this)
        this.loadPages = this.loadPages.bind(this)
        this.pesquisar = this.pesquisar.bind(this)
        this.iconPokemons = this.iconPokemons.bind(this)
        this.callAllPokemons = this.callAllPokemons.bind(this)

    }

    componentDidMount() {
        if (this.loadAllPokemons) {
            return
        }

        const btnTodos = document.querySelector("#todos")
        btnTodos.setAttribute("actived","")

        const urlType = "https://pokeapi.co/api/v2/type/"
        fetch(urlType)
            .then(resp => resp.json())
            .then(data => {

                this.setState({ dados: data.results })
            })


        // Carrega todos pokemons


        this.loadAllPokemons = fetch("https://pokeapi.co/api/v2/pokemon")
            .then(resp => resp.json())
            .then(dados => {

                //console.log(dados.next)

                this.state.btn.push(<button onClick={this.loadPages} className="btn-more" url={dados.next} ><img src={pokebalRedIcon} alt="icon pokebola" />Carregar Mais Pokémons</button>)
                this.setState({ btn: this.state.btn })


                this.setState({ pokemonsQnt: dados.count })
                this.state.pages.push(dados.next)
                this.setState({ pages: this.state.pages })


                dados.results.forEach(el => {
                    fetch(el.url)
                        .then(resp => resp.json())
                        .then(dados => {

                            this.state.pokemonData.push(<Cards name={dados.name} type={dados.types[0].type.name} imgType={this.iconPokemons(dados.types[0].type.name)} id={`#${dados.id}`} image={dados.sprites.other.home.front_default ? dados.sprites.other.home.front_default : Logo} />)
                            this.setState({ pokemonData: this.state.pokemonData })
                            //console.log(dados.types[0].type.name)
                        })

                })




            })

    }


    callAllPokemons(e) {
        document.title = `${e.target.innerText} - Pokédex`
        const allBtns = document.querySelectorAll(".btn-menu")
        allBtns.forEach(el => {
            el.removeAttribute("actived")
        })
        e.currentTarget.setAttribute("actived","")

        this.setState({ pokemonData: [] })
        this.loadAllPokemons = fetch("https://pokeapi.co/api/v2/pokemon")
        .then(resp => resp.json())
        .then(dados => {

            //console.log(dados.next)

            this.state.btn.push(<button onClick={this.loadPages} className="btn-more" url={dados.next}><img src={pokebalRedIcon} alt="icon pokebola" />Carregar mais Pokémons</button>)
            this.setState({ btn: this.state.btn })


            this.setState({ pokemonsQnt: dados.count })
            this.state.pages.push(dados.next)
            this.setState({ pages: this.state.pages })


            dados.results.forEach(el => {
                fetch(el.url)
                    .then(resp => resp.json())
                    .then(dados => {

                        this.state.pokemonData.push(<Cards name={dados.name} type={dados.types[0].type.name} imgType={this.iconPokemons(dados.types[0].type.name)} id={`#${dados.id}`} image={dados.sprites.other.home.front_default ? dados.sprites.other.home.front_default : Logo} />)
                        this.setState({ pokemonData: this.state.pokemonData })
                        //console.log(dados.types[0].type.name)
                    })

            })




        })
    }


    saudacao(e) {
        document.title = `${e.target.innerText} - Pokédex`

        const allBtns = document.querySelectorAll(".btn-menu")
        allBtns.forEach(el => {
            el.removeAttribute("actived")
        })
        e.currentTarget.setAttribute("actived","")

        this.setState({ btn: [] })
        this.setState({ pokemonData: [] })
        const url = e.target.attributes.url.value

        //console.log(url)
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ pokemonsQnt: data.pokemon.length })
                if (data.pokemon.length > 0) {
                    data.pokemon.forEach(el => {
                        const url = Object.values(el)[0].url
                        fetch(url)
                            .then(resp => resp.json())
                            .then(dados => {
                                this.state.pokemonData.push(<Cards name={dados.name} id={`#${dados.id}`} type={dados.types[0].type.name} imgType={this.iconPokemons(dados.types[0].type.name)} image={dados.sprites.other.home.front_default ? dados.sprites.other.home.front_default : Logo} />)
                                this.setState({ pokemonData: this.state.pokemonData })
                                //console.log(dados)
                            })
                            .catch(error => console.log("Lista não encontrada"))
                    })
                } else {
                    this.state.pokemonData.push(<p>Desculpe, lista não disponível...</p>)
                    this.setState({ pokemonData: this.state.pokemonData })
                }

            })



    }

    iconPokemons(type) {
        const icon = [{ name: "normal", icon: iconNormal }, { name: "fighting", icon: iconFighting }, { name: "flying", icon: iconFlying }, { name: "poison", icon: iconPoison },
        { name: "ground", icon: iconGround }, { name: "rock", icon: iconRock }, { name: "bug", icon: iconBug }, { name: "ghost", icon: iconGhost }, { name: "steel", icon: iconSteel }, { name: "fire", icon: iconFire },
        { name: "water", icon: iconWater }, { name: "grass", icon: iconGrass }, { name: "electric", icon: iconEletric }, { name: "psychic", icon: iconPhyschic }, { name: "ice", icon: iconIce },
        { name: "dragon", icon: iconDragon }, { name: "dark", icon: iconDark }, { name: "fairy", icon: iconFairy }, { name: "unknown", icon: iconUnknown }, { name: "shadow", icon: iconShadow }

        ]

        const pokeType = icon.filter(el => el.name === type)
        console.log(pokeType[0].icon)
        return pokeType[0].icon

    }



    loadPages(e) {
        const url = e.target.attributes.url.value

        fetch(url)
            .then(resp => resp.json())
            .then(dados => {


                this.state.btn.push(<button onClick={this.loadPages} className="btn-more" url={dados.next} ><img src={pokebalRedIcon} alt="icon pokebola" />Carregar Mais Pokémons</button>)
                this.setState({ btn: this.state.btn })

                console.log(dados)
                dados.results.forEach(el => {
                    fetch(el.url)
                        .then(resp => resp.json())
                        .then(data => {
                            this.state.pokemonData.push(<Cards name={data.name} id={`#${data.id}`} type={data.types[0].type.name} imgType={this.iconPokemons(data.types[0].type.name)} image={data.sprites.other.home.front_default ? data.sprites.other.home.front_default : Logo} />)
                            this.setState({ pokemonData: this.state.pokemonData })
                            //console.log(data)

                        })
                })
            })

        //console.log(e.target.attributes.url.value)
    }

    pesquisar(e) {
        
        this.setState({ btn: [] })


        if (e.keyCode === 13) {
            document.title = `Pesquisa - Pokédex`
            const url = `https://pokeapi.co/api/v2/pokemon/${e.target.value}`

            this.setState({ pokemonData: [] })
            this.setState({ pokemonsQnt: 1 })

            //console.log(url)
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    this.state.pokemonData.push(<Cards name={data.name} id={`#${data.id}`} type={data.types[0].type.name} imgType={this.iconPokemons(data.types[0].type.name)} image={data.sprites.other.home.front_default ? data.sprites.other.home.front_default : Logo} />)
                    this.setState({ pokemonData: this.state.pokemonData })

                })
                .catch(error => {
                    this.setState({ pokemonsQnt: 0 })
                    this.state.pokemonData.push(<p>Nenhum pokemon encontrado...</p>)
                    this.setState({ pokemonData: this.state.pokemonData })
                    console.log(error)
                })
        }
    }




    render() {





        const { dados, pokemonData, pokemonsQnt } = this.state

        const icon = [iconNormal, iconFighting, iconFlying, iconPoison,
            iconGround, iconRock, iconBug, iconGhost, iconSteel, iconFire,
            iconWater, iconGrass, iconEletric, iconPhyschic, iconIce,
            iconDragon, iconDark, iconFairy, iconUnknown, iconShadow
        ]


        return (
            <div className="container-items">
                <SearchBar func={this.pesquisar} />
                <div className="container-list">
                    <aside className="menu">
                        <nav>
                            <ButtonMenu classe="todos" image={pokeballBlue} key="todos" id="todos" name="todos" func={this.callAllPokemons} />
                            {dados.map((el, i) => (
                                <ButtonMenu  image={icon[i]} key={el.name} id={el.name} name={el.name} url={el.url} func={this.saudacao} />
                            ))}
                        </nav>

                    </aside>
                    <div className="container-list-items">
                        <div className="container-list-items-header">
                            <img src={pokebalRedIcon} alt="Pokeball" />
                            <h1>{pokemonsQnt > 1 ? pokemonsQnt + " Pokémons" : pokemonsQnt + " Pokémon" }  </h1>
                        </div>

                        <div className="container-cards">
                            {[...pokemonData]}


                        </div>
                        <div className="container-cards-footer">
                            {[this.state.btn[this.state.btn.length - 1]]}
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}

