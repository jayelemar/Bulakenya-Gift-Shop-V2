
const exploreBtn = document.querySelector("#explore-btn");
const logo = document.querySelector(".logo");
const navList = document.querySelector("nav");

exploreBtn.addEventListener("mouseover", showNavLis)
function showNavLis(){
    logo.style.visibility = "hidden";
    exploreBtn.style.visibility = "hidden";
    navList.style.visibility = "visible";
    navList.classList.toggle('open');
};


navList.addEventListener("mouseleave", hideList)


function hideList() {
    exploreBtn.style.visibility = "visible";
    exploreBtn.style.zIndex = "4"
    logo.style.visibility = "visible";
    navList.style.visibility = "hidden";
    navList.classList.remove('open');
    // navList.style.transition = "all .5s ease"
    // navList.style.display = "none"

};