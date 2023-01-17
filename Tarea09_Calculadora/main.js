function numberScreen (number) {
    let screenResult = document.getElementsByClassName("calculator__result");
    console.log(number)
    screenResult.textContent = number;
}

document.querySelector('.button--operand').addEventListener("click", numberScreen(document.querySelector('.button--operand').textContent));