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
    document.getElementById("debug-background").innerHTML =
        document.getElementById("switch-background").src;
}