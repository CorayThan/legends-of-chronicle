import {Component} from "angular2/core";
import {CardService} from "./card.service";
import {Card} from "./../shared/card";
import {Legend} from "./../shared/legend";
import {validateCard} from "./../shared/card-validation";

@Component({
	selector: "lc-card",
	templateUrl: "app/cards/card.html",
	providers: [CardService],
	inputs: ["card"]
})
export class CardComponent {
	public card: Card;
	public legendValues: string[] = Legend.getNames();
	public errors: string = null;

	constructor(private _cardService: CardService) {
	}

	onSave(card: Card) {
		this.errors = null;
		var errors = validateCard(card);
		if (errors) {
			this.errors = errors;
		} else {
			this._cardService.saveCard(card, function (updated) {
				//got updated
			});
		}
	}

}
