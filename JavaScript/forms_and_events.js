// JavaScript source code
function Factorial()
{
    let numberElement = document.getElementById("number");
    let number = numberElement.value;
    let resultElement = document.getElementById("factorial-result");
    let f = BigInt(1);
    for (let i = 1n; i <= number; i++) {
        f *= i;
    }
    /*n - обозначает, что число записано как BigInt*/
    //resultElement.value = `${number}! = ${f}`;
    resultElement.innerHTML = `${number}! = ${f}`;
}

function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("image").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackgroundColor(event) 
{
    document.body.style.backgroundColor = event.target.value;
    console.log(event.target.e);
    //let color = document.getElementById("background-color").value;
    //document.body.style.backgroundColor = color;
    //alert("setBackground-color");
}
function setForegroundColor()
{
    document.body.style.color = document.getElementById("foreground-color").value;
}
let colors = document.getElementById("foreground-color");
colors.addEventListener("input", setColor);
function setColor(event)
{
    /*
    ----------------------------------------------------
    == - сравнивает два значения;
    === - сравнивает два значения и типы этих значений.
    === - возвращает 'true' только в том случае,
            если совпадают как значения, так и типы;
    ----------------------------------------------------
    */
    document.body.style[(event.target.id === 'background-color' ? 'backgroundColor' : 'color')] = event.target.value;
    //(event.target.id === 'background-color' ? document.body.style.backgroundColor :
    //    document.body.style.color) = event.target.value;
    /*
    if (event.target.id === 'background-color')
        document.body.style.backgroundColor = event.target.value;
    else
        document.body.style.color = event.target.value;
    */
    console.log(event.target.ids);
    //alert("setColor");
}
document.addEventListener("mousemove", traceMouse);  /*addEventListener - подписка на событие*/
function traceMouse(e)
{
    document.getElementById("mouse").innerHTML = (`X = ${e.clientX}, Y = ${e.clientY}`);
}

document.getElementById("switch-background").addEventListener("click", switchBackground);

function switchBackground(e)
{
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.className = document.body.className === "dark" ? "light" : "dark";
    /*let skin = document.body.id;
    let switchButton = document.getElementById("switch-background");
    switchButton.src = skin === "dark" ? "moon.png" : "sun.png";
    document.body.className = skin === "dark" ? "light" : "dark";
    //document.getElementById("debug-background").innerHTML = switchButton.src;
    document.getElementById("debug-background").innerHTML = document.body.className;*/
}
document.getElementById("switch-background-delay").addEventListener("change", setDelay);
function setDelay(e)
{
    let delay = e.target.value;
    //alert(`Delay: ${delay}`);
    document.body.style.transition = document.getElementById('switch-background').style.transition =
        `color ${delay}s, background-color ${delay}s, background-image ${delay}s`;
    console.log(document.body.style);
    console.log(document.getElementById('#switch-background')).style;
}

/* ///////////////////////////////////////////////////////////////////////////////////////////////// */

function AddLeadingZero(number)
{
    return number < 10 ? "0" + `${number}` : `${number}`;
}
function tickTimer()
{
    let date = new Date();
    document.getElementById("raw-date").innerHTML = date.toString();

    document.getElementById("hours").innerHTML =    AddLeadingZero(date.getHours());
    document.getElementById("minutes").innerHTML =  AddLeadingZero(date.getMinutes());
    document.getElementById("seconds").innerHTML = AddLeadingZero(date.getSeconds());

    document.getElementById("years").innerHTML = AddLeadingZero(date.getFullYear());
    document.getElementById("months").innerHTML = AddLeadingZero(date.getMonth() + 1);
    document.getElementById("days").innerHTML = AddLeadingZero(date.getDate());
    setTimeout(tickTimer, 100);
}
tickTimer();