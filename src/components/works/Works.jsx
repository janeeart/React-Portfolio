import "./works.scss"
import { useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/music.png",
            title: "Artist Master",
            desc: "A web application for music lovers to find information, including biography and upcoming events, for a chosen music artist. Technologies used in this project include JavaScript, Bulma, and TicketMaster API and AudioDB.",
            img: "./assets/artistmaster.png",
            deployed: "https://edodgion.github.io/Project-1-Global-Music/",
            github: "https://github.com/janeeart/Project-1-Global-Music"
        },
    
        {
            id: 2,
            icon: "./assets/drink.png",
            title: "Five O'Clock Somewhere",
            desc: "A web application for adult beverage connoisseurs who want to find and save cocktail recipes by searching for ingredients or cocktail names. Technologies used in this project include JavaScript, Express.js, Node.js, MySQL, GitKraken, Adobe Dreamweaver, Moqups, and Cocktail DB.",
            img: "./assets/5oclock.png",
            deployed:"https://pure-plains-23888.herokuapp.com/",
            github: "https://github.com/janeeart/5-0-Clock-Drink-Generator"

        },
        {
            id: 3,
            icon: "./assets/weathericon.png",
            title: "Weather Dashboard",
            desc: "This web application is a weather dashboard that features dynamically updated HTML and CSS. This web app uses OpenWeather API to retrieve weather data for cities and local storage to store persistent data.",
            img: "./assets/weather.png",
            deployed: "https://janeeart.github.io/Server-Side-APIs-Weather-Dashboard-HW-6/",
            github: "https://github.com/janeeart/Server-Side-APIs-Weather-Dashboard-HW-6"
        },
        {
            id: 4,
            icon: "./assets/teamicon.png",
            title: "Team Profile Generator",
            desc: "This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
            img: "./assets/teamprofile.png",
            deployed: "https://drive.google.com/file/d/1iRAx2_duwoUUXHs2DOWCWXFJJnDjmQ9M/view",
            github: "https://github.com/janeeart/Object-Oriented-Programming-Team-Profile-Generator-HW-10"
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
