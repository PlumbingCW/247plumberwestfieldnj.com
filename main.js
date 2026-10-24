(function(){
"use strict";
var BP=768;
document.documentElement.className+=" js";
var drawer=document.getElementById("mobDrawer"),overlay=document.getElementById("mobOverlay"),burger=document.getElementById("burger"),closeBtn=document.getElementById("mobClose");
function openMenu(){if(!drawer)return;drawer.classList.add("open");overlay.classList.add("open");burger.setAttribute("aria-expanded","true");document.documentElement.style.overflow="hidden";closeBtn.focus();}
function closeMenu(){if(!drawer)return;drawer.classList.remove("open");overlay.classList.remove("open");burger.setAttribute("aria-expanded","false");document.documentElement.style.overflow="";}
if(burger){burger.addEventListener("click",openMenu);closeBtn.addEventListener("click",closeMenu);overlay.addEventListener("click",closeMenu);
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu();});
window.addEventListener("resize",function(){if(window.innerWidth>BP)closeMenu();});
var links=drawer.querySelectorAll("a");for(var i=0;i<links.length;i++){links[i].addEventListener("click",closeMenu);}}
var items=document.querySelectorAll(".faq-item");
function setH(item,open){var a=item.querySelector(".faq-a"),q=item.querySelector(".faq-q");
item.classList.toggle("open",open);q.setAttribute("aria-expanded",open?"true":"false");a.style.maxHeight=open?a.scrollHeight+"px":"0px";}
for(var j=0;j<items.length;j++){(function(item){var q=item.querySelector(".faq-q");
if(item.classList.contains("open")){item.querySelector(".faq-a").style.maxHeight=item.querySelector(".faq-a").scrollHeight+"px";}
q.addEventListener("click",function(){setH(item,!item.classList.contains("open"));});})(items[j]);}
window.addEventListener("resize",function(){for(var k=0;k<items.length;k++){if(items[k].classList.contains("open")){var a=items[k].querySelector(".faq-a");a.style.maxHeight=a.scrollHeight+"px";}}});
})();
