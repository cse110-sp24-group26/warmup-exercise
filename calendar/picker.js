const year = document.getElementById("picker-year");
const month = document.getElementById("picker-month");
const calendar = document.getElementById("main-calendar");

month.onchange = event => {
	calendar.setAttribute("Month", event.target.value);
}

year.onchange = event => {
	calendar.setAttribute("Year", event.target.value);
}
