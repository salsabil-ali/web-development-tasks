let counting = localStorage.getItem('counting') || '';
displayCalculation();

function updateCalculation(value) {
    counting += value;
    displayCalculation();
    localStorage.setItem('counting', counting);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = counting;
}

function calculateResult() {
    try {
        counting = eval(counting).toString();
    } catch {
        counting = "Error";
    }
    displayCalculation();
    localStorage.setItem('counting', counting);
}

function deleteLast() {
    counting = counting.slice(0, -1);
    displayCalculation();
    localStorage.setItem('counting', counting);
}

function clearCalculation() {
    counting = '';
    displayCalculation();
    localStorage.setItem('counting', counting);
}

// === Keyboard Support ===
document.addEventListener("keydown", function(e) {
    const key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        updateCalculation(key);
    }
    else if (key === "Enter" || key === "=") {
        calculateResult();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
    else if (key.toLowerCase() === "c") {
        clearCalculation();
    }
});
