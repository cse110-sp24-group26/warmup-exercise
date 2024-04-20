class Day extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const dayNum = parseInt(this.getAttribute("day"));
		const href = this.getAttribute("href");

		this.appendChild(document.createTextNode(`Day ${dayNum}`));
	}
}

customElements.define("my-day", Day);
