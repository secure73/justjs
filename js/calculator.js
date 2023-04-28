const firstNumber = parseFloat(document.getElementById("firstInput").value);
    const secondNumber = parseFloat(
      document.getElementById("secondInput").value
    );

    function addFunction() {
        window.alert(firstNumber + secondNumber);
    }

    function minusFunction() {
        window.alert(firstNumber - secondNumber);
    }

    function multipleFunction() {
        window.alert(firstNumber * secondNumber);
    }

    function devideFunction() {
        window.alert( firstNumber / secondNumber);
    }
