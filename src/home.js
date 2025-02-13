import { setActiveTab } from "./setActive";

export function loadHome(){


    let schedArray = [ "Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"];
    let container = document.getElementById("content");
    let homeContainer = document.createElement("div");


    // First Block Section
    let resName = document.createElement("h1");
    resName.textContent = "Restaurant Name";

    // Second Block section
    let mainText = document.createElement("p");
    mainText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloribus quaerat odio ut, facilis, magnam ipsum ullam, iusto doloremque cupiditate voluptatum iste tenetur nesciunt perferendis temporibus quis modi excepturi ipsam!";

    homeContainer.appendChild(resName);
    homeContainer.appendChild(mainText);

    // third block section
    let schedule = document.createElement("div");
    schedule.classList.add("schedule");

    let schedHeader = document.createElement("h2");
    schedHeader.textContent = "Hours";

    let hours = document.createElement("ul");
    schedArray.forEach(element => {
        let hourElement = document.createElement("li");
        hourElement.innerText = element;

        hours.appendChild(hourElement);
    });

    schedule.appendChild(schedHeader);
    schedule.appendChild(hours);

    homeContainer.appendChild(schedule);

    // add to page
    container.appendChild(homeContainer);

    // set tab as active
    setActiveTab("home");
}
