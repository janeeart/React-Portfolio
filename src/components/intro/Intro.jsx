import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react" 

export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCurser: true,
            strings: ["Web Developer", "Creative", "Lifelong Learner"]
        })
    },[])

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/me.jpg" alt="" />
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hello, I'm</h2>
                   <h1>Janée Artis</h1>
                   <h3><span ref={textRef}></span></h3>
               </div>
               <a href="#aboutme">
                   <img src="assets/down.png" alt=""/>
               </a>
           </div>
        </div>
    )
}
