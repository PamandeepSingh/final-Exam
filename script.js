// Get elements for clock
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const sessionElement = document.getElementById("session");
const toggleButton = document.getElementById("toggle-btn");

// Get elements for date and day
const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");

// Function to update time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hoursElement.textContent = toggleButton.textContent === "12-hr" ? hours : (hours % 12 === 0 ? 12 : hours % 12);//12
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    const session = hours < 12 ? "AM" : "PM";
    sessionElement.textContent = toggleButton.textContent === "12-hr" ? "" : session;//12
}

// Function to update date and day
function updateDateAndDay() {
    const now = new Date();
    const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    dateElement.textContent = `${month} ${day}, ${year}`;
    dayElement.textContent = dayOfWeek;
}

// Toggle button event listener
toggleButton.addEventListener("click", function() {
    if (toggleButton.textContent === "12-hr") {//12
        toggleButton.textContent = "24-hr";//24
    } else {
        toggleButton.textContent = "12-hr";//12
    }
    updateTime();
    updateDateAndDay();
});

// Initial time, date, and seconds update
updateTime();
updateDateAndDay();

// Update clock every second
setInterval(function() {
    updateTime();
}, 1000);





