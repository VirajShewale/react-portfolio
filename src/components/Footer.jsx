import React from 'react'
import {AiOutlineArrowUp, AiFillYoutube, AiFillInstagram, AiFillGithub} from "react-icons/ai"
import def from "../assets/default.jpg"

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={def} alt="Founder" />
            <h2>Viraj Shewale</h2>

            <p>Happiness doesn't Come You Choose it !</p>
        </div>

        <aside>
            <h2>Social Media</h2>

            <article>
                <a href="https://youtube.com" target={"blank"}><AiFillYoutube /></a>
                <a href="https://instagram.com" target={"blank"}><AiFillInstagram /></a>
                <a href="https://github.com" target={"blank"}><AiFillGithub /></a>
            </article>
        </aside>

        <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer