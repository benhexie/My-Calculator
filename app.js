const c = document.getElementById("c");
    const plusOrMinus = document.getElementById("plusOrMinus");
    const percentage = document.getElementById("percentage");
    const divide = document.getElementById("divide");
    const multiply = document.getElementById("multiply");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const equals = document.getElementById("equals");
    const result = document.getElementById("result");
    var totalString = "";
    var totalValue = 0;
    var operation = "";

    c.addEventListener("click", () => {
        totalString = "";
        totalValue = 0;
        operation = "";
        result.innerText = totalValue;
    });

    plusOrMinus.addEventListener("click", () => {
        if (totalString !== "") {
            totalValue = parseFloat(totalString);
            totalString = "";
        } 
        totalValue *= -1;
        result.innerText = totalValue;
    });
    percentage.addEventListener("click", () => {
        totalValue *= 100;
        result.innerText = totalValue;
    });
    divide.addEventListener("click", () => {
        if (totalString !== "") {
            if (operation === "") {
                totalValue = parseFloat(totalString);
                totalString = "";
            }
            else if (operation !== "=" && totalString !== "") {
                totalValue /= parseFloat(totalString);
                totalString = "";
            }
        }
        result.innerText = totalValue;
        operation = "/";
    });
    multiply.addEventListener("click", () => {
        if (totalString !== "") {
            if (operation === "") {
                totalValue = parseFloat(totalString);
                totalString = "";
            }
            else if (operation !== "=" && totalString !== "") {
                totalValue *= parseFloat(totalString);
                totalString = "";
            }
        }
        result.innerText = totalValue;
        operation = "*";
    });
    minus.addEventListener("click", () => {
        if (totalString !== "") {
            if (operation === "") {
                totalValue = parseFloat(totalString);
                totalString = "";
            }
            else if (operation !== "=" && totalString !== "") {
                totalValue -= parseFloat(totalString);
                totalString = "";
            }
        }
        result.innerText = totalValue;
        operation = "-";
    });
    plus.addEventListener("click", () => {
        if (totalString !== "") {
            if (operation !== "=" && totalString !== "") {
                totalValue += parseFloat(totalString);
                totalString = "";
            }
        }
        result.innerText = totalValue;
        operation = "+";
    });

    equals.addEventListener("click", () => {
        result.style.fontSize = "55px";
        if (totalString !== "" && operation !== "") {
            switch (operation) {
            case "+":
                totalValue += parseFloat(totalString);
                break;
            case "-":
                totalValue -= parseFloat(totalString);
                break;
            case "/":
                totalValue /= parseFloat(totalString);
                break;
            case "*":
                totalValue *= parseFloat(totalString);
                break;
            default:
                console.log("An error occured!");
                break;
            }
        }
        else if (totalString !== "" && operation == "") {
            totalValue = parseFloat(totalString);
            result.innerText = totalValue;
        }
        result.innerText = totalValue;
        operation = "=";
        totalString = "";
    });

    function number(number) {
        result.style.fontSize = "45px";
        switch (number) {
            case 1:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 1;
                    result.innerText = totalString;
                }
                else {
                    totalString += 1;
                    result.innerText = totalString;
                }
                break;
            case 2:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 2;
                    result.innerText = totalString;
                }
                else {
                    totalString += 2;
                    result.innerText = totalString;
                }
                break;
            case 3:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 3;
                    result.innerText = totalString;
                }
                else {
                    totalString += 3;
                    result.innerText = totalString;
                }
                break;
            case 4:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 4;
                    result.innerText = totalString;
                }
                else {
                    totalString += 4;
                    result.innerText = totalString;
                }
                break;
                case 5:
                    if (operation === "=") {
                        totalValue = 0;
                        operation = "";
                        totalString += 5;
                        result.innerText = totalString;
                    }
                    else {
                        totalString += 5;
                        result.innerText = totalString;
                    }
                    break;
                case 6:
                    if (operation === "=") {
                        totalValue = 0;
                        operation = "";
                        totalString += 6;
                        result.innerText = totalString;
                    }
                    else {
                        totalString += 6;
                        result.innerText = totalString;
                    }
                break;
            case 7:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 7;
                    result.innerText = totalString;
                }
                else {
                    totalString += 7;
                    result.innerText = totalString;
                }
                break;
            case 8:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 8;
                    result.innerText = totalString;
                }
                else {
                    totalString += 8;
                    result.innerText = totalString;
                }
                break;
            case 9:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 9;
                    result.innerText = totalString;
                }
                else {
                    totalString += 9;
                    result.innerText = totalString;
                }
                break;
            case 0:
                if (operation === "=") {
                    totalValue = 0;
                    operation = "";
                    totalString += 0;
                    result.innerText = totalString;
                }
                else {
                    totalString += 0;
                    result.innerText = totalString;
                }
                break;
            default:

                break;
        }
    }