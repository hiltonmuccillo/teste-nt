// Placeholder - Acessar conta com:
(function(){

    let substPlaceholder = document.querySelector("#subst-pholder");
    let coop = document.querySelector("#coop");
    let cnpj = document.querySelector("#cnpj");

    coop.addEventListener("click", function(){
        substPlaceholder.placeholder = "Coop e conta";
    });

    cnpj.addEventListener("click", function(){
        substPlaceholder.placeholder = "CNPJ";
    });

})();

// Variaveis Menu e Search 
var menuList = document.querySelector(".btn-list");
var menuSearch = document.querySelector(".btn-search");
var menuInvisible = document.querySelector(".invisible");
var menuInvisibleSearch = document.querySelector(".invisible-search");
var fechar = document.querySelector(".fechar");
var fecharSearch = document.querySelector(".fechar-search");

// Abre Menu 
(function(){
    menuList.addEventListener("click", function () {
        if (menuInvisible.className === "invisible") {
            menuInvisible.classList.replace("invisible", "visible");
            document.querySelector("body").style.cssText = "overflow-y: hidden";
            document.querySelector(".opacity").className = "opacity opacityIn";
        }
    });
})();

// Fecha Menu 
(function(){
    fechar.addEventListener("click", function () {
        if (menuInvisible.className === "visible") {
            menuInvisible.classList.replace("visible", "invisible");
            document.querySelector("body").style.cssText = "overflow-y: normal";
            document.querySelector(".opacity").className = "opacity";
        }        
    });    
})();


// Abre Search
(function(){
    menuSearch.addEventListener("click", function () {
        if (menuInvisibleSearch.className === "invisible-search") {
            menuInvisibleSearch.classList.replace("invisible-search", "visible-search");
            document.querySelector("body").style.cssText = "overflow-y: hidden";
            document.querySelector(".opacity").className = "opacity opacityIn";
        }
    });
})();

// Fecha search 
(function(){
    fecharSearch.addEventListener("click", function () {
        if (menuInvisibleSearch.className === "visible-search") {
            menuInvisibleSearch.classList.replace("visible-search", "invisible-search");
            document.querySelector("body").style.cssText = "overflow-y: normal";
            document.querySelector(".opacity").className = "opacity";
        }        
    });    
})();
