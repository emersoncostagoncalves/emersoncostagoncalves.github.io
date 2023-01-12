import React from "react"


import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"



import "../sass/App.scss"


export default function App() {
    return <div className="app">
        <Header />
        <Main />
        <Footer />
    </div>
}