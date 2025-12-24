let btn=document.querySelector("button");
console.dir(btn);

btn.onclick=function(){
    console.log("button was clicked");
}

btn.onmouseenter=function(){
    console.log("leave button");
}