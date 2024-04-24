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
		const monthNum = parseInt(this.getAttribute("month"));
		const yearNum = parseInt(this.getAttribute("year"));

		const button = document.createElement("button");
		button.setAttribute("type", "button");
		button.appendChild(document.createTextNode(`${dayNum}`));
		this.appendChild(button);

		this.onclick = function() {
			if (document.getElementById("selected") != null){
				let selected = document.getElementById("selected");
				selected.removeAttribute("id");
			}
			this.setAttribute("id", "selected")
			var win = window.open("index.html","","popup, width=800, height = 600")
			win.document.write(`<h1> Day ${dayNum} </h1>`)
		}
	}
}

customElements.define("my-day", Day);
