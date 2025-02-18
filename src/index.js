import "./styles.css";
import { loadHome } from "./home";
import {loadMenu} from "./menu";


loadHome();
addListeners();

function addListeners(){
    let home = document.querySelector("nav button.home");
    let menu = document.querySelector("nav button.menu");

    home.addEventListener("click", loadHome);
    menu.addEventListener("click", loadMenu);



}