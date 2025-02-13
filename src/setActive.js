export function setActiveTab(tabName){
    let buttons = document.querySelectorAll("nav button");
    buttons.forEach( (button)=> {
        button.classList.remove("active");
        if(button.classList.contains(tabName) ) button.classList.add("active");
    }  );
}