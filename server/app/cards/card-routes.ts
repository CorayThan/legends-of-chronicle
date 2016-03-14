import * as db from "./card-db";
import * as express from "express";

var router = express.Router();

router.get("/:id", (req, res) => {
	console.log("getting card " + req.params.id);
	db.getCard(req.params.id, card => {
		res.json(card);
	});
});

router.get("/", (req, res) => {
	db.getCards(cards => {
		res.json(cards);
	});
});

router.post("/", (req, res) => {
	db.addCard(req.body, card => {
		res.json(card);
	});
});

router.put("/", (req, res) => {
	console.log("in update card app" + req.headers);
	db.updateCard(req.body, card => {
		res.json(card);
	});
});

export = router;