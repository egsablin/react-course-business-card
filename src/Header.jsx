import React from "react"

export default function Header() {
    return (
        <div className="header">
            <img src="./src/assets/f3.jpg" className="headerImg" alt="Evgenii's Photo" />
            <h1 className="title">Evgenii Sablin</h1>
            <h3 className="job">Full-stack developer</h3>
            <div className="website">
                <a href="https://esablin.website" className="link">esablin.website</a>
            </div>
            <div className="buttons">
                <button className="button1"><i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;Email</button>
                <button className="button2"><i class="bi bi-linkedin"></i>&nbsp;&nbsp;LinkedIn</button>
            </div>
            <div className="textBox">
            <h3 className="about">About</h3>
            <h5 className="smallText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium culpa laboriosam unde nemo. Iusto expedita numquam quam a esse.</h5>
            <h3 className="interests">Interests</h3>
            <h5 className="smallText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolores.</h5>
            </div>
        </div>
    )
}