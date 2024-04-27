document.addEventListener("DOMContentLoaded", function() {
    const currentDateParagraph = document.getElementById("current-date");
    const dateOptionsSelectElement = document.getElementById("date-options");

    // Function to format the current date
    function getCurrentFormattedDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return {
            "dd-mm-yyyy": `${day}-${month}-${year}`,
            "yyyy-mm-dd": `${year}-${month}-${day}`,
            "mm-dd-yyyy-h-mm": `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`
        };
    }

    // Set initial date value
    currentDateParagraph.textContent = getCurrentFormattedDate()["dd-mm-yyyy"];

    // Event listener for select element
    dateOptionsSelectElement.addEventListener("change", () => {
        const selectedFormat = dateOptionsSelectElement.value;
        const formattedDate = getCurrentFormattedDate()[selectedFormat];
        currentDateParagraph.textContent = formattedDate;
    });
});
