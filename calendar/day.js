class Day extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const dayNum = parseInt(this.getAttribute("day"));
		// Should add month attribute
		const monthNum = parseInt(this.getAttribute("month"));
		const href = this.getAttribute("href");

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
			button.setAttribute("style", "border:10px, border-color: 141418")
			var win = window.open("index.html","","popup, width=800, height = 600")
			win.document.write(`<h1> Day ${dayNum} </h1>`)
			const form = document.createElement("img");
			//document.appendChild(form)
			form.innerHTML = `<h1> Day ${dayNum} </h1>`
			calendar = document.getElementById("main-calendar");
			calendar.after(form)
		}
	}
}

customElements.define("my-day", Day);