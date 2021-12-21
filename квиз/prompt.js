let point = 0;
let answer = '';

answer = prompt("1 больше 3");
if (answer == "нет") {
  alert("Верно");
  point = point + 1;
} else {
  alert("Неверно")
}


answer = prompt("5 больше 3");
if (answer == "да") {
  alert("Верно");
  point = point + 1;
} else {
  alert("Неверно")
}

alert("Вы набрали " + point + " баллов ")
