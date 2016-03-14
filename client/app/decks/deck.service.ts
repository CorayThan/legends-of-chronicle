import {Deck} from "./../shared/deck";
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";

@Injectable()
export class DeckService {

	constructor(@Inject(Http) private http: Http) {
	}

	getDecks(callback: (decks: Deck[]) => void) {
		this.http.get("decks")
			.subscribe((res: Response) => callback(res.json()));
	}

	saveDeck(deck: Deck, callback: (deck: Deck) => void) {
		console.log("in update deck angular service" + JSON.stringify(deck));
		this.http.put("decks", JSON.stringify(deck), {
				headers: new Headers({
					"Content-Type": "application/json"
				})
			})
			.subscribe((res: Response) => callback(res.json()));
	}

}
