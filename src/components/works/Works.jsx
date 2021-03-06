import "./works.scss"
import { useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/sewing-machine.png",
            title: "Tailors Union",
            desc: "A web application that connects users to Slow Fashion Artisans in their region. This project was designed and built on WordPress.",
            img: "./assets/tailorsunion.png",
            deployed: "https://TailorsUnion.com",
            github: "https://github.com/janeeart/tailors-union"
        },
        {
            id: 2,
            icon: "./assets/ballfield.png",
            title: "VIP sEATs",
            desc: "This is a web application that allows users to order food, beverages, and merchandise directly to their seat at a sporting event. Technologies used in this project include JavaScript, MERN Stack, Stripe, GraphQL, React-Bootstrap, and Apollo Server",
            img: "./assets/vipseats1.png",
            deployed: "https://vipseats.herokuapp.com/",
            github: "https://github.com/janeeart/VIP_sEATs"
        },
    
        {
            id: 3,
            icon: "./assets/drink.png",
            title: "Five O'Clock Somewhere",
            desc: "A web application for adult beverage connoisseurs who want to find and save cocktail recipes by searching for ingredients or cocktail names. Technologies used in this project include JavaScript, Express.js, Node.js, MySQL, GitKraken, Adobe Dreamweaver, Moqups, and Cocktail DB.",
            img: "./assets/5oclock.png",
            deployed:"https://pure-plains-23888.herokuapp.com/",
            github: "https://github.com/janeeart/5-0-Clock-Drink-Generator"

        },
        {
            id: 4,
            icon: "./assets/music.png",
            title: "Artist Master",
            desc: "A web application for music lovers to find information, including biography and upcoming events, for a chosen music artist. Technologies used in this project include JavaScript, Bulma, and TicketMaster API and AudioDB.",
            img: "./assets/artistmaster.png",
            deployed: "https://edodgion.github.io/Project-1-Global-Music/",
            github: "https://github.com/janeeart/Project-1-Global-Music"
        }
    ];

    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) :
        setCurrentSlide(currentSlide  < data.length -1 ? currentSlide + 1 : 0 )
    }
        

    return (
      
        <div className="works" id="works">
           <span className="title"><h1>Works.</h1></span>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                { data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
    
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            <span><a href={d.deployed}>Deployed Project</a></span>
                            <span><a href={d.github}>GitHub Repository</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />

                        </div>
                    </div>
                    
                </div> ))}
            </div> 
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
        
    )
}
