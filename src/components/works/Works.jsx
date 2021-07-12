import "./works.scss"
import { useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/music.png",
            title: "Artist Master",
            desc: "A web application for music lovers to find information, including biography and upcoming events, for a chosen music artist.",
            img: "./assets/artistmaster.png"
        },
    
        {
            id: 2,
            icon: "./assets/drink.png",
            title: "Five O'Clock Somewhere",
            desc: "A web application for adult beverage connoisseurs who want to find and save cocktail recipes by searching for ingredients or cocktail names.",
            img: "./assets/5oclock.png"
        },
        {
            id: 3,
            icon: "./assets/mobile.png",
            title: "Project 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit aperiam sapiente nesciunt ducimus consectetur, sed ut tempora nulla in incidunt architecto? Illo, eveniet. Nobis non omnis corrupti hic temporibus?",
            img: "./assets/website.jpg"
        },
        {
            id: 4,
            icon: "./assets/weathericon.png",
            title: "Weather Dashboard",
            desc: "This web application is a weather dashboard that features dynamically updated HTML and CSS. This web app uses OpenWeather API to retrieve weather data for cities and local storage to store persistent data.",
            img: "./assets/weather.png"
        },
        {
            id: 5,
            icon: "./assets/teamicon.png",
            title: "Team Profile Generator",
            desc: "This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
            img: "./assets/teamprofile.png"
        },
        {
            id: 6,
            icon: "./assets/globe.png",
            title: "Placeholder",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit aperiam sapiente nesciunt ducimus consectetur, sed ut tempora nulla in incidunt architecto? Illo, eveniet. Nobis non omnis corrupti hic temporibus?",
            img: "./assets/website.jpg"
        }
    ];

    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 5) :
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
                            <span>Deployed Project</span>
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
