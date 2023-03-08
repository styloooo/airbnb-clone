import React from "react"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"

import cardData from "./data"

export default function App() {
    const cardElements = cardData.map(item => 
        <Card 
            key={item.id}
            {...item}
        />
    )
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}
