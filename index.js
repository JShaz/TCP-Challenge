let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let boxAll = document.getElementById("boxAll")
let boxH1 = document.getElementById("boxH1")
let boxH2 = document.getElementById("boxH2")
let boxH3 = document.getElementById("boxH3")
let boxHAll = document.getElementById("boxHAll")
let resetAll = document.getElementById("resetColors")
let showAll = document.getElementById("showAll")

 box1.addEventListener("click", () => {
    red.style.backgroundColor = "pink"
    red.style.border = "5px dotted yellow"
 }) 
 box2.addEventListener("click", () => {
    blue.style.backgroundColor = "grey"
    blue.style.border = "5px solid yellow"
 }) 
 box3.addEventListener("click", () => {
    green.style.backgroundColor = "purple"
    green.style.border = "5px dashed orange"
 }) 
 boxAll.addEventListener("click", () => {
    red.style.backgroundColor = "grey"
    blue.style.backgroundColor = "purple"
    green.style.backgroundColor = "pink"
    red.style.border = "5px dotted yellow"
    blue.style.border = "5px solid yellow"
    green.style.border = "5px dashed orange"
 }) 
 boxH1.addEventListener("click", () => {
    red.style.visibility = "hidden"
    
 }) 
 boxH2.addEventListener("click", () => {
    blue.style.visibility = "hidden"
 }) 
 boxH3.addEventListener("click", () => {
    green.style.visibility = "hidden"
 }) 
 boxHAll.addEventListener("click", () => {
    red.style.visibility = "hidden"
    blue.style.visibility = "hidden"
    green.style.visibility = "hidden"
    
 }) 
 resetAll.addEventListener("click", () => {
    red.style.backgroundColor = "#FF2400"
    blue.style.backgroundColor = "#1035AC"
    green.style.backgroundColor = "#00FF00"
    red.style.border = "5px solid black"
    blue.style.border = "5px dashed yellow"
   green.style.border = "5px solid fuchsia"
    
  
 }) 
 showAll.addEventListener("click", () => {
    red.style.visibility = "visible"
    blue.style.visibility = "visible"
    green.style.visibility = "visible"
 }) 

