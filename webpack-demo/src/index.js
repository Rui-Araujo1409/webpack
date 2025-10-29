import _ from "lodash";
import "./style.css";
import teorba from "./teorba.jpg";

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Boas a todos", "webpack"], " ");
    element.classList.add("boas");
    const teorbaHTML = new Image();
    teorbaHTML.src = teorba;


    return element;
}

document.body.appendChild(component());