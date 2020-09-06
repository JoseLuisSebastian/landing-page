import React from "react";

import { Jumbotron } from "./jumbotron.js";

import { Navbar } from "./navbar.js";

import { Footer } from "./footer.js";

import { Card } from "./card.js";

export function Home() {
	let cards = [
		{
			image: "./../../img/rigo-baby.jpg",
			title: "Card  number 1",
			text: "aaaaaaaaaaaa"
		},

		{
			image: "./../../img/rigo-baby.jpg",
			title: "Card  number 2",
			text: "bbbbbbbbbbbb"
		},
		{
			image: "../../img/rigo-baby.jpg",
			title: "Card  number 3",
			text: "ccccccccccccc"
		},
		{
			image: "../../img/rigo-baby.jpg",
			title: "Card  number 4",
			text: "dddddddddddddd"
		}
	];

	let cardsHtml = cards.map(card => {
		return <Card image={card.image} title={card.title} text={card.text} />;
	});
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="card-deck">{cardsHtml}</div>
			<Footer />
		</div>
	);
}
