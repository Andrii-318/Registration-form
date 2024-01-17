document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formInputData").onsubmit = function (event) {
    event.preventDefault(); // Запобігання стандартному надсиланню форми

    // Отримання даних з полів введення
    let text1 = document.getElementById("text1").value;
    let text2 = document.getElementById("text2").value;
    let text3 = document.getElementById("text3").value;
    let number = document.getElementById("number").value;

    // Виведення рядків у довільному порядку
    let strings = [text1, text2, text3];
    let randomOrderStrings = strings.sort(() => 0.5 - Math.random()).join(" ");
    document.getElementById("concatenatedStrings").textContent =
      randomOrderStrings;

    // Розбиття п'ятизначного числа на цифри та виведення через пробіл
    if (number.length === 5 && !isNaN(number)) {
      let separatedDigits = number.split("").join(" ");
      document.getElementById("separatedNumbers").textContent = separatedDigits;
    } else {
      document.getElementById("separatedNumbers").textContent =
        "Будь ласка, введіть правильне п'ятизначне число.";
    }
  };
});
