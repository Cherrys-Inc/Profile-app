import React from "react";
import "./style.css"
import twitter from "./Twitter Icon.png";
import facebook from "./Facebook Icon.png";
import instagram from "./Instagram Icon.png";
import linkedin from "./Linkedin Icon.png";
import github from "./GitHub Icon.png";


export default function Footersec(){
    return(
        <footer className="container">
            
                <div className="row justify-content-center">
                    <div className="col-2">
                        <img src={twitter}></img>
                    </div>
                    <div className="col-2">
                        <img src={facebook}></img>
                    </div>
                    <div className="col-2">
                        <img src={instagram}></img>
                    </div>
                    <div className="col-2">
                        <img src={linkedin}></img>
                    </div>
                    <div className="col-2">
                        <img src={github}></img>
                    </div>
                </div>
            
        </footer>
    );

}