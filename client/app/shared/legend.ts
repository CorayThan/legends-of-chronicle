export class Legend {
	static THE_RAPTOR = new Legend("The Raptor");
	static LINZA = new Legend("Linza");
	static ARIANE = new Legend("Ariane");
	static OZAN = new Legend("Ozan");
	static ALL_LEGENDS = [Legend.THE_RAPTOR, Legend.LINZA, Legend.ARIANE, Legend.OZAN];

	name: string;

	constructor(name: string) {
		this.name = name;
	}

	static legendForName(name: string) {
		for (var x = 0; x < Legend.ALL_LEGENDS.length; x++) {
			if (Legend.ALL_LEGENDS[x].name === name) {
				return Legend.ALL_LEGENDS[x];
			}
		}
		return null;
	}

	static getNames(): string[] {
		return Legend.ALL_LEGENDS.map(legend => legend.name);
	}
}

//still works?