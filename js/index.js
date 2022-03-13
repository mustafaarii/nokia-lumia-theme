const state = {
    menuOpened : false,
    navbarOpened : false,
}

// Toggle Window Button

function windowButtonHandler(e){
    const menus = document.querySelector(".menus");
    
    if(state.menuOpened){
        menus.classList.add("gridMenu");
        menus.classList.remove("flexMenu");
        menus.removeEventListener("mousedown",menuOperations)
    }else{
        menus.classList.add("flexMenu");
        menus.classList.remove("gridMenu");
        menus.childNodes.forEach(child=>{
            if(child.tagName === "DIV"){
                // child.classList.remove("bigMenu");
            }
        });
        menus.addEventListener("mousedown",menuOperations)
    } 
        

    state.menuOpened = !state.menuOpened;
}

// Flex menus hold down action
function menuOperations(e){
    const rect = e.target.getBoundingClientRect();
    const so = document.querySelector(".selectedOperations");
    
    so.style.position = "absolute";
    so.style.top = rect.top+'px';
    so.style.left = '0px';
    so.style.display = "flex";
}    

// Back button action
function backButtonHandler (e){
    const menus = document.querySelector(".menus");
    menus.classList.add("gridMenu");
    menus.classList.remove("flexMenu");
    menus.removeEventListener("mousedown",menuOperations);
    state.menuOpened = false;
}

const menuButton = document.querySelector(".windowButton");
menuButton.addEventListener("click",windowButtonHandler);

const backButton = document.querySelector(".backButton");
backButton.addEventListener("click",backButtonHandler);

const menus = document.querySelector(".menus");

menus.addEventListener("mouseup",function(e){
    const so = document.querySelector(".selectedOperations");
    so.style.display = "none";
})

const lockscreen = document.querySelector(".lockscreen");
const menusWrapper = document.querySelector(".screen-wrapper");

// Open lock screen
lockscreen.addEventListener("click",function(){
    lockscreen.style.height = "0px";
    menus.style.zIndex = 1;
    setTimeout(() => {
        lockscreen.style.display = "none";
        menusWrapper.style.overflowY = "scroll";
    }, 1000);
})

// Open-close navbar
const navicon = document.querySelector(".navicon");

navicon.addEventListener("click",function(){
    const navbar = document.querySelector(".navbar");
    if(!state.navbarOpened){
        navbar.style.height = "70vh";
        navbar.style.display = "grid";
        menusWrapper.style.overflowY = "hidden";
    }else{
        navbar.style.display = "none";
        navbar.style.height = "0px"
        menusWrapper.style.overflowY = "scroll";
    }

    state.navbarOpened = !state.navbarOpened;
})

const navbarCloserLayer = document.querySelector(".navbar .toggle");
navbarCloserLayer.addEventListener("click",function(){
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "none";
    navbar.style.height = "0px"
    menusWrapper.style.overflowY = "scroll";

    state.navbarOpened = false;
})