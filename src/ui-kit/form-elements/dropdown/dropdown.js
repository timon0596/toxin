export class Dropdown {
	static declensions = {
		bed: [
			["спальня", "спальни", "спален"],
			["кровать", "кровати", "кроватей"],
			["ванная", "ванных", "ванных"],
		],
		guest: [
			["гость", "гостя", "гостей"],
			["младенец", "младенца", "младенцев"],
		],
	};
	constructor(mainDiv, index) {
		this.index = index;
		this.$mainDiv = mainDiv;
		this.$display = this.$mainDiv.find(".dropdown__display");
		this.$expand = this.$mainDiv.find(
			".dropdown__body .dropdown__icon-wrapper"
		);
		this.$expandIcon = this.$expand.find(".icon");
		this.$body = this.$mainDiv.find(".dropdown__body");
		this.$menu = this.$mainDiv.find(".dropdown__menu");
		this.$clear = this.$mainDiv.find(".dropdown__clear");
		this.$apply = this.$mainDiv.find(".dropdown__apply");
		this.$counters = this.$mainDiv.find(".counter");
		this.$minusButtons = this.$counters.find(".counter__button:first-child");
		this.$plusButtons = this.$counters.find(".counter__button:last-child");
		this.$values = this.$counters.find(".counter__button:nth-child(2)");
		this.isGuest = this.$mainDiv.hasClass("dropdown_guest");
		this.dec = Dropdown.declensions[this.isGuest ? "guest" : "bed"];
		this.localStorageName = this.$mainDiv.attr("class").replace(/\s/g, "");
		this.values = this.localStorageValues();
		this.init();
	}
	localStorageValues() {
		const vals = localStorage.getItem(this.localStorageName);
		return vals
			? JSON.parse(vals)
			: this.$values
					.text()
					.split("")
					.map((n) => +n);
	}
	displayValuePart(i) {
		if (this.isGuest) {
			if (i == 0) {
				return this.values[0] + this.values[1]
					? `${this.values[0] + this.values[1]} ${
							this.dec[0][this.modulo((this.values[0] + this.values[1]) % 10)]
					  }, `
					: "";
			} else {
				return this.values[2]
					? `${this.values[2]} ${
							this.dec[1][this.modulo(this.values[2]) % 10]
					  }, `
					: "";
			}
		} else {
			return this.values[i]
				? `${this.values[i]} ${this.dec[i][this.modulo(this.values[i]) % 10]}, `
				: "";
		}
	}
	displayValue() {
		if (this.isGuest) {
			return `${this.displayValuePart(0)}` + `${this.displayValuePart(2)}`;
		} else {
			return (
				`${this.displayValuePart(0)}` +
				`${this.displayValuePart(1)}` +
				`${this.displayValuePart(2)}`
			);
		}
	}
	expand() {
		this.$menu.slideToggle(250);
		this.$body.toggleClass("dropdown__body_active");
		this.$expandIcon.toggleClass("icon_color_dark");
	}
	minus(e) {
		const i = [...this.$minusButtons].indexOf(e.target);
		this.values[i]--;
		this.values[i] = this.values[i] < 0 ? 0 : this.values[i];
		this.render();
	}
	plus(e) {
		const i = [...this.$plusButtons].indexOf(e.target);
		this.values[i]++;
		this.render();
	}
	disableOrEnableMinusButton(i) {
		this.values[i] == 0
			? $(this.$minusButtons[i]).addClass("counter__button_disabled")
			: $(this.$minusButtons[i]).removeClass("counter__button_disabled");
	}
	clear() {
		this.values.fill(0);
		localStorage.removeItem(this.localStorageName);
		this.render();
	}
	apply() {
		localStorage.setItem(this.localStorageName, JSON.stringify(this.values));
	}
	modulo(number) {
		if (number == 1) return 0;
		if (number > 1 && number < 5) return 1;
		else return 2;
	}
	render() {
		this.$values.each((i, el) => {
			$(el).text(this.values[i]);
			this.disableOrEnableMinusButton(i);
		});
		this.$display.text(this.displayValue().trim().slice(0, -1));
		if (this.isGuest) {
			if (this.values.reduce((acc, val) => acc + val) == 0) {
				this.$display.text("Сколько гостей");
			}
		}
	}
	init() {
		this.$expand.on("click.dropdownExpand", this.expand.bind(this));
		this.$plusButtons.on("click.plusButton", this.plus.bind(this));
		this.$minusButtons.on("click.minusButton", this.minus.bind(this));
		this.$clear.on("click.dropdownClear", this.clear.bind(this));
		this.$apply.on("click.dropdownApply", this.apply.bind(this));
		this.render();
	}
}
$(".js-dropdown").each((i, el) => {
	new Dropdown($(el), i);
});
