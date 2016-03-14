import {ObjectID} from "mongodb";
import * as db from "../db";
import {Card} from "../../shared/card";


export function getCard(id: string, callback: (card: Card) => void) {
	db.collection("cards", function (collectionError, cards) {
		if (collectionError) {
			console.error(collectionError);
			return;
		}
		cards.findOne({"_id": new ObjectID(id)},
			function (error, card) {
				if (error) {
					console.error(error);
					return;
				}
				console.log("gotten " + JSON.stringify(card) + " and error: " + JSON.stringify(error));
				callback(card);
			});
	});
}

export function getCards(callback: (cards: Card[]) => void) {
	db.collection("cards", function (collectionError, cards_collection) {
		if (collectionError) {
			console.error(collectionError);
			return;
		}
		cards_collection.find({}).toArray(function (error, cardobjs) {
			if (error) {
				console.error(error);
				return;
			}
			callback(cardobjs);
		});
	});
}

export function addCard(card: Card, callback: (card: Card) => void) {
	db.collection("cards", function (collectionError, cards) {
		if (collectionError) {
			console.error(collectionError);
			return;
		}
		cards.insertOne(
			card,
			function (error, newCard) {
				if (error) {
					console.error(error);
					return;
				}
				callback(newCard);
			}
		);
	});
}

export function updateCard(card: Card, callback: (card: Card) => void) {
	console.log("in update card db" + JSON.stringify(card));
	card._id = new ObjectID(card._id);
	db.collection("cards", function (collectionError, cards) {
		if (collectionError) {
			console.error(collectionError);
			return;
		}
		cards.findOneAndReplace(
			{"_id": card._id},
			card,
			function (error, updatedCard) {
				if (error) {
					console.error(error);
					return;
				}
				console.log("replaced " + JSON.stringify(updatedCard) + " and error: " + JSON.stringify(error));
				callback(updatedCard.value);
			}
		);
	});
}