var colors=random(6);
var pickedColor=pickcolor();
var display=document.getElementById("display");
display.textContent=pickedColor;
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".squares");
var message=document.getElementById("message");
var resetbutton=document.getElementById("resetbutton");
resetbutton.addEventListener("click",function(){
    colors=random(6);
    pickedColor=pickcolor(colors.length);
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];}
    h1.style.background="#232323";
    resetbutton.textContent="new colours";
});
var easybin=document.getElementById("easy");
var hardbin=document.getElementById("hard");
hardbin.addEventListener("click",function(){
     easybin.classList.remove("selected");
    hardbin.classList.add("selected");
    colors=random(6);
    //prompt(colors.length);
    pickedColor=pickcolor(6);
    display.textContent=pickedColor;
    //prompt(squares.length);
    for(var i=0;i<squares.length;i++){
        //prompt(colors[i]);
        squares[i].style.background=colors[i];}
h1.style.background="#232323";
});

easybin.addEventListener("click",function(){
    easybin.classList.add("selected");
    hardbin.classList.remove("selected");
    colors=random(3);
    pickedColor=pickcolor(3);
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.background=colors[i];}
    else
       squares[i].style.background="#232323"; 
    }
    h1.style.background="#232323";
});


for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var color=this.style.background;
        if(color===pickedColor){
            message.textContent="correct";
            changecolor(pickedColor);
            h1.style.background=pickedColor;
            resetbutton.textContent="try again?";
        }
        else{
            message.textContent="try again";
            this.style.background= "#232323";
        }
    });
}
function changecolor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
};
function pickcolor(num){
    var random= Math.floor(Math.random()*num);
    return colors[random];
}
function random(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr[i]=randomcolor();
    }
    return arr;
};
function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r+", " +g+", " +b+")";
}