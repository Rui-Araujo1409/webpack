import _ from "lodash";

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Boas a todos", "webpack"], " ");

    return element;
}

document.body.appendChild(component());