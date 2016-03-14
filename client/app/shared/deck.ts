import {Card} from "./card";

export interface Deck {
	_id: string;
	name: string;
	cardIds: string[];
	cards: Card[];
}
