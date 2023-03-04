
var allproducts = document.querySelectorAll("h5");
var content = document.querySelector("#content");
var btn = document.querySelector("#btn1")
var totalprice = 0


allproducts.forEach( function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent

        if (content.innerHTML !=""){
            btn.style.display = "block"
            btn.style.background = "#d1ac9a"
            btn.style.color = "white"
            btn.style.margin = "auto"
            btn.style.border = "solid 1px white"
        }
    }
})

btn.onclick = function(){
    document.getElementById("content").innerHTML=totalprice
}