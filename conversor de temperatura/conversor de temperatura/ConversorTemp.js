document.getElementById("inputTemp").addEventListener("input", converter);
document.getElementById("inputUnit").addEventListener("change", converter);

function converter() {
    const temp = parseFloat(document.getElementById("inputTemp").value);
    const unit = document.getElementById("inputUnit").value;

    if (isNaN(temp)) {
        document.getElementById("output1").value = "";
        document.getElementById("output2").value = "";
        return;
    }

    let result1, result2, unit1, unit2;

    switch (unit) {
        case "C":
            result1 = (temp * 9/5) + 32; // Celsius to Fahrenheit
            result2 = temp + 273.15;    // Celsius to Kelvin
            unit1 = "°F";
            unit2 = "K";
            break;
        case "F":
            result1 = (temp - 32) * 5/9;         // Fahrenheit to Celsius
            result2 = (temp - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
            unit1 = "°C";
            unit2 = "K";
            break;
        case "K":
            result1 = temp - 273.15;               // Kelvin to Celsius
            result2 = (temp - 273.15) * 9/5 + 32;  // Kelvin to Fahrenheit
            unit1 = "°C";
            unit2 = "°F";
            break;
        default:
            alert("Unidade inválida!");
            return;
    }

    document.getElementById("output1").value = result1.toFixed(2);
    document.getElementById("output2").value = result2.toFixed(2);

    document.getElementById("outputUnit1").innerHTML = `<option>${unit1}</option>`;
    document.getElementById("outputUnit2").innerHTML = `<option>${unit2}</option>`;
}
