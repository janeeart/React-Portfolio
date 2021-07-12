import "./topbar.scss"
import {FilterVintage, Person, Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className= {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">sublime.<FilterVintage className="icon1"/></a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span><a href="sms:+17204022589&body=Hello">(720)-402-2589</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:janeeartis@gmail.com">JaneeArtis@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                    <LinkedInIcon className="icon"/>
                    <span><a href="https://www.linkedin.com/in/janeeartis/">LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                    <GitHubIcon className="icon"/>
                    <span><a href="https://github.com/janeeart">GitHub</a></span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
