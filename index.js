// const home = document.getElementById("home");
// const work = document.getElementById("work");
// const blog = document.getElementById("blog");
// const about = document.getElementById("about");

const menus = document.querySelectorAll(".menu");
const images = document.querySelectorAll(".pictures img");

menus.forEach(menu=>{
    menu.addEventListener("click", ()=>{
        removeMenuActive();
        menu.classList.add("active");
        removeImgVisible();
        const img = document.getElementById(`${menu.id}img`);
        img.classList.add("visible");
    });
});

function removeMenuActive(){
    menus.forEach(menu =>{
        menu.classList.remove("active");
    });
}

function removeImgVisible(){
    images.forEach(img =>{
        img.classList.remove("visible");
    });
}