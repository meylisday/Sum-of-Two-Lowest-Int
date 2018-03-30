function sumTwoSmallestNumbers(numbers) {
    a = 0;
    b = 0;
    sum = 0;
    numbers.sort(function (a, b) { return a - b });
    for (var i = 0; i < numbers.length; i++) {
        a = numbers.slice(0, 1);
        b = numbers.slice(1, 2);
        sum = +a + +b;
    }

    return sum;
};
