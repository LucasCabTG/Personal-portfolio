import React from "react";
import { DiReact } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiPython } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiHtml5 } from "react-icons/di"
import { DiGithub } from "react-icons/di"
import { DiNodejsSmall } from "react-icons/di"
import '../styles/carrousel.css'






export function Carrousel() {
    return (
        <div className="carrusel-container">
            <DiJavascript1/>
            <DiReact/>
            <DiHtml5/>
            <DiCss3/>
            <DiPython/>
            <DiGithub/>
            <DiMysql/>
            <DiNodejsSmall/>
        </div>
    )
}
