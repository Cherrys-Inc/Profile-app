import React from "react";
import "./style.css"
export default function Card(){
    return(
        <div className="container">
            <div className="name">Laura Smith</div>
            <div className="role">Frontend developer</div>
            <div className="website">laurasmith.website </div>
            <div className="emailbutton">Email</div>
            <div className="about">About</div>
            <div className="text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
            <div className="about">Interests</div>
            <div className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            
        </div>
    );
}