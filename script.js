var a = 10;
var b = 20;
document.write("Значение a = " + a + "<br\/> Значение b = " + b + "<br\/> Сумма a и b = " + Number(a + b) + "<br\/>");
window.alert("Hello world");
var name = prompt("Введите ваше имя");
document.write("Добро пожаловать, " + name);
var result = confirm("Вывести максимум?");
if (result){
    document.write('<br\/>Максимальное число = ' + b);
}
else{
    document.write('<br\/>Минимальное число = ' + a);
}