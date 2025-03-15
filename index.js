let array = [];

document.getElementById("btnAddNumber").addEventListener("click", function () {
    let number = Number(document.getElementById("numberArray").value);
    array.push(number);
    document.getElementById("showArray").innerHTML = array.join(", ");
    document.getElementById("numberArray").value = "";
});

document.getElementById("btnSum").addEventListener("click", function () {
    const sum = array.filter(x => x > 0).reduce((a, b) => a + b, 0);
    document.getElementById("sumPositiveNumber").innerHTML = `Tổng số dương: ${sum}`;
});

document.getElementById("btnCount").addEventListener("click", function () {
    const count = array.filter(x => x > 0).length;
    document.getElementById("countPositiveNumber").innerHTML = `Số lượng số dương: ${count}`;
});

document.getElementById("btnMin").addEventListener("click", function () {
    const min = Math.min(...array);
    document.getElementById("minNumber").innerHTML = `Số nhỏ nhất: ${min}`;
});

document.getElementById("btnMinPositive").addEventListener("click", function () {
    const positiveNumbers = array.filter(x => x > 0);
    if (positiveNumbers.length === 0) {
        document.getElementById("minPositiveNumber").innerHTML = "Không có số dương";
        return;
    }
    const minPositive = Math.min(...positiveNumbers);
    document.getElementById("minPositiveNumber").innerHTML = `Số dương nhỏ nhất: ${minPositive}`;
});

document.getElementById("btnLastEven").addEventListener("click", function () {
    const lastEven = array.slice().reverse().find(x => x % 2 === 0);
    document.getElementById("lastEvenNumber").innerHTML = lastEven !== undefined ? `Số chẵn cuối cùng: ${lastEven}` : "Không có số chẵn";
});

document.getElementById("btnSwap").addEventListener("click", function () {
    let index1 = Number(document.getElementById("swapIndex1").value);
    let index2 = Number(document.getElementById("swapIndex2").value);

    if (isNaN(index1) || isNaN(index2)) {
        alert("Vui lòng nhập vị trí là số!");
        return;
    }

    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        alert("Vị trí không hợp lệ!");
        return;
    }

    [array[index1], array[index2]] = [array[index2], array[index1]];
    document.getElementById("swapResult").innerHTML = `Mảng sau khi đổi: ${array.join(", ")}`;
});

document.getElementById("btnSort").addEventListener("click", function () {
    const sortedArray = [...array].sort((a, b) => a - b);
    document.getElementById("sortedArray").innerHTML = `Mảng sau khi sắp xếp: ${sortedArray.join(", ")}`;
});

document.getElementById("btnFirstPrime").addEventListener("click", function () {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const firstPrime = array.find(x => isPrime(x));
    document.getElementById("firstPrime").innerHTML = firstPrime !== undefined ? `Số nguyên tố đầu tiên: ${firstPrime}` : "Không có số nguyên tố";
});

document.getElementById("btnCountInteger").addEventListener("click", function () {
    let inputNumber = Number(document.getElementById("countIntegerInput").value);

    if (isNaN(inputNumber)) {
        alert("Vui lòng nhập số cần đếm!");
        return;
    }

    const count = array.filter(x => x === inputNumber).length;
    document.getElementById("countInteger").innerHTML = `Số lượng số ${inputNumber}: ${count}`;
});

document.getElementById("btnCompare").addEventListener("click", function () {
    const positiveCount = array.filter(x => x > 0).length;
    const negativeCount = array.filter(x => x < 0).length;

    let result = "";
    if (positiveCount > negativeCount) {
        result = "Số dương nhiều hơn";
    } else if (negativeCount > positiveCount) {
        result = "Số âm nhiều hơn";
    } else {
        result = "Số lượng số dương và số âm bằng nhau";
    }

    document.getElementById("compareResult").innerHTML = result;
});