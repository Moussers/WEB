// JavaScript source code

const disp = document.getElementById('calcDisplay');
let operation = "none";
let prev = 0;
let newNum = true;
let memory = 0;
function executeOperation()
{
    cur = Number(disp.value);
    switch (operation)
    {
        case 'plus':
            cur += prev;
            break;
        case 'minus':
            prev -= cur;
            break;
        case 'multi':
            cur *= prev;
            break;
        case 'div':
            cur = prev / cur;
            break;
    }
    disp.value = cur.toString();
}
function setNumber(num)
{
    let text = disp.value;
    if (text == '0' || newNum)
    {
        text = "";
    }
    if (text == '-0')
    {
        text = "-";
    }
    text += num;
    disp.value = text;
    newNum = false;
}
function plusMunus ()
{
    let text = disp.value;
    if (text[0] == '-') {
        text = tex.replace("-", "");    /*replace - заменяет минус на пустую строку*/
    }
    else
    {
        text = '-' + text;
    }
    disp.value = text;
    newNum = false;

}
function setDot()
{
    let text = disp.value;
    if (!text.includes("."))
    {
        text += '.';
    }
    disp.value = text;
    newNum = false;
}
function setOperation(oper)
{
    if (!newNum)
    {
        executeOperation();
        prev = Number(disp.value);        /*Number - это класс который переводит число в строку*/
        newNum = true;
    }
    operation = oper;
    //text = disp.value
    //text += oper.ToString();
    //disp.value = text;
}
function sqrt()
{
    let value = Math.sqrt(Number(disp.value));
    disp.value = value.toString();
}
function invertNum()
{
    let value = 1 / Number(disp.value);
    disp.value = value.toString();
}
function persentFrom()
{
    let value = prev * Number(disp.value) / 100;
    disp.value = value.toString();
}

function BackWard()
{
    let text = disp.value.slice(0, -1);
    /*slice  копирует строку от начала первым аргументом и до последнего аргумента, но не до последнего */
    /*от начала и до конца*/
    if (text == "")
    {
        text = "0";
    }
    if (text == "-")
    {
        text = "-0";
    }
    disp.value = text;
}

function deleteNum()
{
    disp.value = "0";
    newNum = true;
}

function deleteNumAndOper()
{
    disp.value = "0";
    newNum = true;
    prev = "0";
    operation = "none";
}
function clearMemory()
{
    memory = 0;
}
function FromMemInDisplay()
{
    disp.value = memory.toString();
    /*значение из памяти мы записываем дисплэй*/
}

function FromDiplayInMem()
{
    memory = Number(disp.value);
    /*значение устанавливаем в память*/
}

function AddValueInMem()
{
    memory += Number(disp.value);
    /*прибавляем к уже имеющемуся занчению в памяти дополнительное значение */
}

