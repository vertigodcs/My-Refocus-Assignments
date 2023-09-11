<!DOCTYPE html>
<html>
<head>
    <title>BMI Calculator</title>
</head>
<body>
    <h1>BMI Calculator</h1>
    <p>Calculate your BMI (Body Mass Index)</p>

    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" placeholder="Enter your weight in kg">

    <label for="height">Height (cm):</label>
    <input type="number" id="height" placeholder="Enter your height in cm">

    <button onclick="calculateBMI()">Calculate BMI</button>

    <p>Your BMI is: <span id="result"></span></p>

    <script>
        function calculateBMI() {
            // Get user input
            var weight = parseFloat(document.getElementById("weight").value);
            var height = parseFloat(document.getElementById("height").value);

            // Check if the inputs are valid
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                alert("Please enter valid weight and height.");
                return;
            }

            // Calculate BMI
            var bmi = weight / ((height / 100) * (height / 100));

            // Display the result
            document.getElementById("result").textContent = bmi.toFixed(2);
        }
    </script>
</body>
</html>
