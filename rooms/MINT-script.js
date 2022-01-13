//hide Gang:
WA.room.hideLayer("roofs/Gang");
//show Roofs:
WA.room.showLayer("roofs/Chemie2");
WA.room.showLayer("roofs/Chemie");
WA.room.showLayer("roofs/Bio");
WA.room.showLayer("roofs/Bio2");

//Chemie "Dach":
WA.room.onEnterLayer("trigger/Trigger-Chemie").subscribe(() => {
	WA.room.hideLayer("roofs/Chemie");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Chemie").subscribe(() => {
	WA.room.showLayer("roofs/Chemie");
	WA.room.hideLayer("roofs/Gang");
});

//Bio "Dach":
WA.room.onEnterLayer("trigger/Trigger-Bio").subscribe(() => {
	WA.room.hideLayer("roofs/Bio");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Bio").subscribe(() => {
	WA.room.showLayer("roofs/Bio");
	WA.room.hideLayer("roofs/Gang");
});

//Chemie2 "Dach":
WA.room.onEnterLayer("trigger/Trigger-Chemie2").subscribe(() => {
	WA.room.hideLayer("roofs/Chemie2");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Chemie2").subscribe(() => {
	WA.room.showLayer("roofs/Chemie2");
	WA.room.hideLayer("roofs/Gang");
});

//Physik "Dach":
WA.room.onEnterLayer("trigger/Trigger-Physik").subscribe(() => {
	WA.room.hideLayer("roofs/Physik");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Physik").subscribe(() => {
	WA.room.showLayer("roofs/Physik");
	WA.room.hideLayer("roofs/Gang");
});

//Bio "Dach":
WA.room.onEnterLayer("trigger/Trigger-Bio2").subscribe(() => {
	WA.room.hideLayer("roofs/Bio2");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Bio2").subscribe(() => {
	WA.room.showLayer("roofs/Bio2");
	WA.room.hideLayer("roofs/Gang");
});

//TestPopup:
let EasterEggPopup;

// Open the popup when we enter a given zone

EasterEggPopup = WA.room
	.onEnterLayer("easterEggs/Physik-Trigger")
	.subscribe(() => {
		WA.ui.openPopup("EasterEgg-Physik", `${pickSpruch()}`, [
			{
				label: "Close",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
				},
			},
		]);
	});

let indexOfSpruch = 0;
function pickSpruch() {
	var spruch = sprueche[indexOfSpruch];
	indexOfSpruch++;
	if (indexOfSpruch >= sprueche.length) {
		sprueche.sort(() => Math.random() - 0.5);
		indexOfSpruch = 0;
	}
	return `${spruch.text}`;
}

var sprueche = [
	{
		text: "Kann ich auf die Toilette? \n Ich weiß nicht, ob du kannst.",
		from: "~",
	},
	{
		text: "5 + 5 = 10 \n 10 .. was? Birnen?",
		from: "~Jeder Mathelehrer",
	},
	{
		text: "Ihr müsst 5 Minuten vor dem Unterricht bereits in der Klasse sein",
		from: "~Lehrer, die immer 10 Minuten zu spät sind",
	},
	{
		text: "Runter vom Mattenwagen!",
		from: "~jeder Sportlehrer",
	},
	{
		text: "Ich beende den Unterricht",
		from: "~Jeder Lehrer",
	},
	{
		text: "Es kommt alles in der Klausur dran was wir bis jetzt besprochen haben. Ich mache keine Checkliste, ihr seid alt genug.",
		from: "~",
	},
	{
		text: "Wenn ich euch in der Nacht frage muss es wie aus der Pistole geschossen kommen",
		from: "~",
	},
	{
		text: "Glauben kannst du in Religonsunterricht",
		from: "~Herr Akyildiz",
	},
	{
		text: "Gleich setze ich euch auseinander",
		from: "~",
	},
	{
		text: "Denk nochmal nach, du weißt es",
		from: "~",
	},
	{
		text: "In english please",
		from: "~jeder Englischlehrer",
	},
	{
		text: "Wenn ihr keine Fragen stellt dann kann ich euch auch nicht helfen",
		from: "~",
	},
	{
		text: "So ich rede jetzt auf Deutsch damit ihr mich versteht",
		from: "~jeder Englischlehrer",
	},
	{
		text: "Warum lacht ihr? Ich will auch mitlachen können",
		from: "~",
	},
	{
		text: "Ich glaub es hackt",
		from: "~",
	},
	{
		text: "Das ist unter aller Kanone",
		from: "~",
	},
	{
		text: "Pschhhhhhhtttttttt",
		from: "~Frau Dauck",
	},
	{
		text: "Wenn ihr keine Fragen habt, stell ich welche",
		from: "~",
	},
	{
		text: "How much is the fish?",
		from: "~Herr Dörnte",
	},
	{
		text: "Menschenskinter",
		from: "~",
	},
	{
		text: "In meinem Unterricht kommst du nicht zu spät! Rausgehen! Anklopfen! Und nochmal Entschuldigen!",
		from: "~",
	},
	{
		text: "FALSCHE RICHTUNG!",
		from: "~jeder Lehrer in der Pause, der die Regeln zu ernst nimmt",
	},
	{
		text: "Du Pflaume",
		from: "~Herr Del Borello",
	},
	{
		text: "Lehrer: Tut mir leid, dass ich den Unterricht störe \n anderer Lehrer: Machen sie doch immer ",
		from: "~",
	},
	{
		text: "Tip Top",
		from: "~Frau Stücher",
	},
	{
		text: "Legenden besagen dass Französisch nie im Unterricht gesprochen wurde",
		from: "~",
	},
	{
		text: "In meinem Unterricht wird nicht gegeseen",
		from: "~Frau Hamann",
	},
	{
		text: "Schadeeeeeee",
		from: "~Herr Lenz",
	},
	{
		text: "Dann ist hier Schicht im Schacht haben wir uns verstanden",
		from: "~",
	},
	{
		text: "Sammel nochmal deine Gedanken",
		from: "~",
	},
];

sprueche.sort(() => Math.random() - 0.5);
