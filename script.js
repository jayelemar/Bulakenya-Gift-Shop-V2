
const exploreBtn = document.querySelector("#explore-btn");
const logo = document.querySelector(".logo");
const navList = document.querySelector("nav");

exploreBtn.addEventListener("mouseover", showNavLis)
function showNavLis(){
    // logo.style.visibility = "hidden";
    exploreBtn.style.visibility = "hidden";
    navList.style.visibility = "visible";
    navList.classList.toggle('open');
};


navList.addEventListener("mouseleave", hideList)


function hideList() {
    exploreBtn.style.visibility = "visible";
    exploreBtn.style.zIndex = "4"
    // logo.style.visibility = "visible";
    navList.style.visibility = "hidden";
    navList.classList.remove('open');
    // navList.style.transition = "all .5s ease"
    // navList.style.display = "none"

};

const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
    scrollAmount = 0;
    let slideTimer = setInterval( () => {
        slider.scrollLeft += 10;
        scrollAmount += 10;

        if(scrollAmount >= 100) {
            window.clearInterval(slideTimer);
        }
    }, 25);
});

prevBtn.addEventListener("click", () => {
    scrollAmount = 0;
    let slideTimer = setInterval( () => {
        slider.scrollLeft -= 10;
        scrollAmount += 10;

        if(scrollAmount >= 100) {
            window.clearInterval(slideTimer);
        }
    }, 25);
});



// Slider Width Values
function sw() {  /*sw = scroll-width function name*/ 
    alert(slider.scrollWidth)
}
function sl() { /*sw = scroll-left function name*/
    alert(slider.scrollLeft)
}
function cw() { /*cw = client-width function name*/
    alert(slider.clientWidth)
}
function calc() {
    alert(slider.scrollWidth - slider.clientWidth);
}

// Autoplay Function
function autoPlay() {
    if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth -1)) { 
        /*if slider goes at the ends, i want it go back in the beginning*/ 
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 10);

// Pause the slide on Hover
for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play);
    })
    thumbnails[i].addEventListener("mouseout", () => {
        play = setInterval(autoPlay, 30);
    })
}

// sticky Navbar
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var headerOffset = header.offsetTop;
  
    if (window.pageYOffset > headerOffset) {
      header.classList.add('sticky');
      main.style.marginTop = header.offsetHeight + 'px';
    } else {
      header.classList.remove('sticky');
      main.style.marginTop = '0';
      main.style.opacity = ".9"
    }
  });