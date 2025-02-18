import { setActiveTab } from "./setActive";

export function loadAbout(){

    let menuContent = {}
    let container = document.getElementById("content");
    let menuContainer = document.createElement("div");

    container.innerHTML = "";


    // Title section
    let title = document.createElement("h1");
    title.textContent = "Contact Us";
    menuContainer.appendChild(title);


    let card = document.createElement("div");
    let location = document.createElement("h2");
    location.textContent = "Location 1";

    let phone = document.createElement("p");
    phone.textContent = "Call us at 555-55-555"


    let addres = document.createElement("p");
    addres.textContent = "Find us at fake location #35"

    card.appendChild(location);
    card.appendChild(phone)
    card.appendChild(addres)

    menuContainer.appendChild(card);





    container.appendChild(menuContainer)
    // set tab as active
    setActiveTab("about");
}
