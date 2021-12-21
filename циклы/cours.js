// от 11 до 33
let i = 11;
for (let i = 11; i <= 33; i++) {
  document.write(i + '<br>');
}
// четные числа от 0 до 100
let num = 0;
while (num <= 100) {
  document.write(num + '<br>');
  num += 2;
}
// сумма чисел от 0 до 100
let a = 1;
let b = 0;
for (let a = 1; a <= 100; a++) {
  b = b + a;
}
alert(b);