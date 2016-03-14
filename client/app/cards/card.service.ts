import {Card} from "./../shared/card";
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";

@Injectable()
export class CardService {

	constructor(@Inject(Http) private http: Http) {
	}

	getCards(callback: (cards: Card[]) => void) {
		this.http.get("cards")
			.subscribe((res: Response) => callback(res.json()));
	}

	saveCard(card: Card, callback: (card: Card) => void) {
		console.log("in update card angular service" + JSON.stringify(card));
		this.http.put("cards", JSON.stringify(card), {
				headers: new Headers({
					"Content-Type": "application/json"
				})
			})
			.subscribe((res: Response) => callback(res.json()));
	}

}
