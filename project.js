
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3= document.getElementById("button3"); 
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");

btn1.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent bubbling to body
    console.log("chiku");
    document.body.style.backgroundColor = "red";
});

btn2.addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.style.backgroundColor = "blue";
});

btn3.addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.style.backgroundColor = "orange";
});

btn4.addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.style.backgroundColor = "purple";
});
btn5.addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.style.backgroundColor = "white";
});
