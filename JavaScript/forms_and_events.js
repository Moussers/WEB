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
    //let color = document.getElementById("background-color").value;
    //document.body.style.backgroundColor = color;
    //alert("setBackground-color");
}
function setForegroundColor()
{
    document.body.style.color = document.getElementById("foreground-color").value;
}