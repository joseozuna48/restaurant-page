import { setActiveTab } from "./setActive";
import tacos1 from "./tacos1.jpg"
import tacos2 from "./tacos2.jpg"
import tacos3 from "./tacos3.jpg"

export function loadMenu(){

    let menuItems = [
        {
            title: "Taco Package 1",
            image: tacos1,
            alt:"taco package 1",
            price: "5.99"
        },
        {
            title: "Taco Package 2",
            image: tacos2,
            alt:"taco package 2",
            price: "8.99"
        },
        {
            title: "Taco Package 3",
            image: tacos3,
            alt:"taco package 3",
            price:"4.99"
        }

    ]

    let menuContent = {}
    let container = document.getElementById("content");
    let menuContainer = document.createElement("div");

    container.innerHTML = "";


    // Title section
    let resName = document.createElement("h1");
    resName.textContent = "Take a look at our menu!";
    menuContainer.appendChild(resName);

    // Menu items section
    menuItems.forEach( (item)=>{
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("menu-item");

        let title = document.createElement("h2");
        title.innerText = item.title;

        let price = document.createElement("p");
        price.innerText = `$${item.price}`;
        price.classList.add("price")

        let image = document.createElement("img");
        image.src = `${item.image}`;
        image.alt = `${item.alt}`;
        image.width ="300";
        image.height = "300";

        itemContainer.appendChild(title);
        itemContainer.appendChild(price);
        itemContainer.appendChild(image);

        menuContainer.appendChild(itemContainer);
    } ); 





    container.appendChild(menuContainer)
    // set tab as active
    setActiveTab("menu");
}
