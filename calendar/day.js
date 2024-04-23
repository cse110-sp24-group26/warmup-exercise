class Day extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const dayNum = parseInt(this.getAttribute("day"));
		// Should add month attribute
		const monthNum = parseInt(this.getAttribute("month"));
		// Should add year attribute
		const yearNum = parseInt(this.getAttribute("year"));
		// Not needed
		//const href = this.getAttribute("href");

		this.appendChild(document.createElement("button"));
		const button = document.getElementsByTagName("button")[dayNum - 1];
		button.setAttribute("type", "button");
		button.appendChild(document.createTextNode(`${dayNum}`));
		button.onclick = function() {
			if (document.getElementById("selected") != null){
				selected = document.getElementById("selected");
				selected.removeAttribute("id");
			}
			this.setAttribute("id", "selected")
			var win = window.open("index.html","","popup, width=800, height = 600")
			win.document.write(`<h1> Day ${dayNum} </h1>`)
		}
	}
}

customElements.define("my-day", Day);
