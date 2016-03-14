import {CardService} from "../cards/card.service";
import {Component, OnInit} from "angular2/core";
import {DeckService} from "./deck.service";
import {Deck} from "./../shared/deck";
import {Card} from "./../shared/card";

@Component({
	selector: "lc-deck",
	templateUrl: "app/decks/deck.html",
	providers: [DeckService],
	inputs: ["deck"]
})
export class DeckComponent implements OnInit {
	public deck: Deck;
	public cards: Card[];
	public errors: string = null;

	constructor(private _deckService: DeckService, private _cardService: CardService) {
	}

	getCards() {
		this._cardService.getCards(cards => this.cards = cards);
	}

	onAddCard(card: Card) {
		var alreadyThere = this.deck.cards.filter(deckCard => deckCard._id === card._id);
		if (alreadyThere.length > 2) {
			this.errors += "Can't add " + card.name + ", you've already added two copies! ";
		} else {
			this.deck.cards.push(card);
			this.deck.cardIds.push(card._id);
		}
	}

	onRemoveCard(card: Card) {
		var toRemove = null;
		for (var x = 0; x < this.deck.cards.length; x++) {
			if (this.deck.cards[x]._id === card._id) {
				toRemove = this.deck.cards[x];
				break;
			}
		}
		if (toRemove !== null) {
			this.deck.cards.splice(this.deck.cards.indexOf(toRemove));
			this.deck.cardIds.splice(this.deck.cardIds.indexOf(toRemove._id));
		} else {
			this.errors += "Can't remove " + card.name + ", you haven't added it! ";
		}
	}

	ngOnInit() {
		this.getCards();
	}

}
