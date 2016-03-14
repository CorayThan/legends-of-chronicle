import {Card} from "./card";
import {Legend} from "./legend";

export function validateCard(card: Card): string {
	var errors = "";
	if (card.name) {
		card.name = card.name.trim();
	}
	if (!card.name) {
		errors += "Invalid card name. ";
	}
	if (Legend.legendForName(card.legendName) === null) {
		errors += "Invalid legend. ";
	}
	if (errors.length === 0) {
		errors = null;
	}
	return errors;
}