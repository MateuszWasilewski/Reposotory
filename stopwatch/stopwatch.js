const time =
{
    min:0,
    s:0
}
let way=true
let interval;

let startButton = document.querySelector(".startButton")
let resetButton = document.querySelector(".resetButton")
startButton.addEventListener("click",click)
resetButton.addEventListener("click",reset)

function update()
{
    time.s++;
    if(time.s==60)
    {
        time.s=0;
        time.min++;
    }
    print()
}
function print()
{
    if(time.s<10)
    {
       document.querySelector(".s").innerHTML="0"+time.s; 
    }
    else
    {
        document.querySelector(".s").innerHTML=time.s;
    }
    document.querySelector(".min").innerHTML=time.min;
}
function start()
{
    interval=setInterval(update,1000)
    document.querySelector(".startButton").innerHTML="Stop";
}


function stop()
{
    document.querySelector(".startButton").innerHTML="Start";
    clearInterval(interval)
}
function click()
{
    if(way==true)
    {
        start()
    }
    else
    {
        stop()
    }
    way=!way;
}
function reset()
{
    stop()
    time.s=0;
    time.min=0;
    print()
}
