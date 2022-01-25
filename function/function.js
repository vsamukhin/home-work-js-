//Произведение двух аргументов


function mul(n, m) {
  return n * m;
}

alert(mul(15, 3))

//Функция которая инвертирует число


function reverse(x) {
  x = x + "";
  return x.split("").reverse().join("");
}
console.log(Number(reverse(12345)));

//Возвращает страну с самым длинным названием


function longestString(strs) {
  let lgth = 0;
  let longest;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > lgth) {
      lgth = strs[i].length;
      longest = strs[i];
    }
  }
  return longest;
}

console.log(longestString(["Australia", "Germany", "United States of America"]));