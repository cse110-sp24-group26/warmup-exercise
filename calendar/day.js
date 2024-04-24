class Day extends HTMLElement {
	static observedAttributes = ["year", "month", "day"];

	constructor() {
		super()
	}

	connectedCallback() {
		const dayNum = parseInt(this.getAttribute("day"));
		const monthNum = parseInt(this.getAttribute("month"));
		const yearNum = parseInt(this.getAttribute("year"));

		this.appendChild(document.createElement("button"));
		const button = document.getElementsByTagName("button")[dayNum - 1];
		button.setAttribute("type", "button");
		button.appendChild(document.createTextNode(`${dayNum}`));

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
