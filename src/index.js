import "./styles.css";
import { loadHome } from "./home";
import {loadMenu} from "./menu";
import {loadAbout} from "./about";


loadHome();
addListeners();

function addListeners(){
    let home = document.querySelector("nav button.home");
    let menu = document.querySelector("nav button.menu");
    let about = document.querySelector("nav button.about");

    home.addEventListener("click", loadHome);
    menu.addEventListener("click", loadMenu);
    about.addEventListener("click", loadAbout);



}