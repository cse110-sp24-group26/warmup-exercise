import { numDays, dayOfWeek } from './util.js';

const DAYS_IN_WEEK = 7;
const COLUMN_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* attributes: month (e.g. "January") and year (e.g. "2024") */
/* displays a calendar by showing a day for each day of the specified year and month */
/* dynamically updates based on changing months and years */
class Calendar extends HTMLElement {
	static observedAttributes = ["year", "month"];

	constructor() {
		super()
	}

	/* reupdate entire calendar */
	retree() {
		const year = this.getAttribute("year");
		const month = this.getAttribute("month");
		
		const daysInMonth = numDays(year, month);
		const padding = dayOfWeek(year, month, 1);

		const items = [];

		/* column headers */
		for (let i = 0; i < DAYS_IN_WEEK; ++i) {
			const header = document.createElement("h2");
			header.appendChild(document.createTextNode(COLUMN_HEADERS[i]));
			items.push(header);
		}

		/* padding */
		for (let i = 0; i < padding; ++i) {
			const pad = document.createElement("span");
			pad.className = "pad-day"
			items.push(pad);
		}

		for (let i = 1; i <= daysInMonth; ++i) {
			const day = document.createElement("my-day");
			day.setAttribute("day", i);
			day.setAttribute("year", year);
			day.setAttribute("month", month);
			items.push(day);
		}

		/* replace children */
		this.querySelectorAll("h2, span.pad-day, my-day").forEach(e => this.removeChild(e));
		items.forEach(day => this.appendChild(day));
	}

	connectedCallback() {
		this.retree();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.retree();
	}
}

customElements.define("my-calendar", Calendar);
