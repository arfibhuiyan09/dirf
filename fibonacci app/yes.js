document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const termCountInput = document.getElementById("termCount");
    const resultDiv = document.getElementById("result");

    generateBtn.addEventListener("click", function () {
        const n = parseInt(termCountInput.value);

        if (isNaN(n) || n <= 0) {
            resultDiv.textContent = "Please enter a positive number.";
        } else {
            const fibonacciSequence = generateFibonacciSequence(n);
            resultDiv.textContent = "Fibonacci Sequence: " + fibonacciSequence.join(", ");
        }
    });

    function generateFibonacciSequence(n) {
        const sequence = [0, 1];
        while (sequence.length < n) {
            const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            sequence.push(nextNumber);
        }
        return sequence;
    }
});
