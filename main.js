function avg()
{
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    num3 = parseInt(document.getElementById('num3').value);
    document.getElementById('results').innerHTML = (num1 + num2 + num3) / 3;
}
