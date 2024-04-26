/* Day is a native web component */
/* attributes: year (e.g. "2024"), month (e.g. "January"), and day ("e.g." "1", "31") */
/* when this page is clicked, it will open a custom window for this day */
class Day extends HTMLElement {
	static observedAttributes = ["year", "month", "day"];

	constructor() {
		super()
	}

	connectedCallback() {
		const dayNum = parseInt(this.getAttribute("day"));
		const month = this.getAttribute("month");
		const year = parseInt(this.getAttribute("year"));

		const button = document.createElement("button");
		button.setAttribute("type", "button");
		button.appendChild(document.createTextNode(`${dayNum}`));
		this.appendChild(button);

		this.onclick = function() {
			if (document.getElementById("selected") != null){
				const selected = document.getElementById("selected");
				selected.removeAttribute("id");
			}
			if (document.getElementById("form") != null){
				const old_form = document.getElementById("form")
				old_form.remove()
			}
			this.setAttribute("id", "selected")
			calendar.insertAdjacentHTML("afterend", `<section id=form> <h1> ${month} ${dayNum}, ${year} </h1>
			<form><fieldset><textarea></textarea><br>
			<button>Save Entry</button></fieldset></form></section>`);
		}
	}
}

customElements.define("my-day", Day);
