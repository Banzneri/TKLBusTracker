import React from 'react';

const DropDownButton = props => (
    <button id="drop-button" onClick={toggleMenu}>SHOW</button>
);

function toggleMenu() {
    console.log("Toggle");
    let menu = document.getElementById("buttons");
    let button = document.getElementById("drop-button");
    let hide = menu.classList.contains("hide");
    if (hide) {
        button.innerText = 'HIDE';
        menu.classList.remove("hide");
    } else {
        button.innerText = 'SHOW';
        menu.classList.add("hide");
    }
}

export default DropDownButton;