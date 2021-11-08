const passwordRange = document.getElementById("passwordRange");
const passwordRangeNumber = document.getElementById("passwordRangeNumber");
const form = document.getElementById("form");
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay")
const lowerCaseCodes = arrayFromLowtoHigh(97, 122)
const upperCaseCodes = arrayFromLowtoHigh(65, 90)
const numberCaseCodes = arrayFromLowtoHigh(48, 57)
const symbolCaseCodes = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64)).concat(arrayFromLowtoHigh(91, 96)).concat(arrayFromLowtoHigh(123, 126))

passwordRange.addEventListener("input", sync);
passwordRangeNumber.addEventListener("input", sync);

function sync(e) {
    const value = e.target.value;
    passwordRangeNumber.value = value;
    passwordRange.value = value;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmout = passwordRangeNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmout, includeUpperCase, includeNumbers, includeSymbols);
    passwordDisplay.innerHTML = password;
});

function generatePassword(characterAmout, includeUpperCase, includeNumbers, includeSymbols) {
    let charCodes = lowerCaseCodes;
    if (includeUpperCase) {
        charCodes = charCodes.concat(upperCaseCodes);
    }
    if (includeNumbers) {
        charCodes = charCodes.concat(numberCaseCodes);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(symbolCaseCodes)
    }
    const passwordCharacters = [];
    for (let i = 0; i < characterAmout; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
}

function arrayFromLowtoHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}



