import {Component, OnInit} from "angular2/core";
import {CardService} from "./card.service";
import {Card} from "./../shared/card";
import {CardComponent} from "./card.component";

@Component({
	selector: "lc-cards-list",
	templateUrl: "app/cards/cards-list.html",
	directives: [CardComponent],
	providers: [CardService]
})
export class CardsListComponent implements OnInit {
	public title = "Chronicle Cards";
	public cards: Card[];

	constructor(private _cardService: CardService) {
	}

	getCards() {
		this._cardService.getCards(cards => this.cards = cards);
	}

	ngOnInit() {
		this.getCards();
	}

}
