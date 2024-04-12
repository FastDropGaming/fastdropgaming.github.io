document.addEventListener("DOMContentLoaded", function() {
    // Function um das Jahr der letzten Erhöhung zu speichern
    function setLastUpdatedYear(year) {
        localStorage.setItem("lastUpdatedYear", year);
    }

    // Function um das Jahr der letzten Erhöhung abzurufen
    function getLastUpdatedYear() {
        return localStorage.getItem("lastUpdatedYear");
    }

    // Function um die Nummer zu erhöhen und das Jahr zu speichern
    function increaseNumber() {
        var currentYear = (new Date()).getFullYear().toString();
        var lastUpdatedYear = getLastUpdatedYear();

        var numberElement = document.getElementById("birth");
        var currentNumber = parseInt(numberElement.textContent);

        // Wenn das letzte aktualisierte Jahr nicht dem aktuellen Jahr entspricht, erhöhen Sie die Zahl und speichern Sie sie im Local Storage
        if (!lastUpdatedYear || currentYear !== lastUpdatedYear) {
            var newNumber = currentNumber + 1;
            numberElement.textContent = newNumber;
            setLastUpdatedYear(currentYear);
            localStorage.setItem("incrementedNumber", newNumber); // Speichern der neuen Zahl im Local Storage
            alert("Happy Birthday Francesco! The number has been incremented by +1. New number: " + newNumber);
            console.log("Happy Birthday Francesco! The number has been incremented by +1. New number: " + newNumber);
        }
    }

    // Funktion zum Anzeigen der aktuellen Zahl aus dem Local Storage
    function displayNumberFromLocalStorage() {
        var numberElement = document.getElementById("birth");
        var incrementedNumber = localStorage.getItem("incrementedNumber");
        if (incrementedNumber !== null) {
            numberElement.textContent = incrementedNumber;
        }
    }

    // Bei DOM-Inhaltsladen die aktuelle Zahl anzeigen
    displayNumberFromLocalStorage();

    function checkDate() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1; // Monat ist null-basiert, daher +1
        var currentDay = currentDate.getDate();

        var targetYear = 2024; // Jahr, in dem die Erhöhung beginnen soll
        var targetMonth = 4; // April
        var targetDay = 20; // 20. April

        if (currentYear >= targetYear && currentMonth === targetMonth && currentDay === targetDay) {
            increaseNumber();
        }
    }

    // Manuell einmal überprüfen
    checkDate();

    // Interval, um jeden Tag um Mitternacht zu überprüfen
    setInterval(checkDate, 24 * 60 * 60 * 1000); // 24 Stunden * 60 Minuten * 60 Sekunden * 1000 Millisekunden
});