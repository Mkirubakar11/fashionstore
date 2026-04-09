let count=0

function addCart(){
count++
document.querySelector(".cart").innerText="Cart ("+count+")"
}

function like(el){
if(el.innerText=="♡"){
el.innerText="♥"
}else{
el.innerText="♡"
}
}

function view(name,stock,img){
document.getElementById("popup").style.display="block"
document.getElementById("title").innerText=name
document.getElementById("stock").innerText="Approx Stock: "+stock
document.getElementById("popup-img").src=img
}

function closePopup(){
document.getElementById("popup").style.display="none"
}