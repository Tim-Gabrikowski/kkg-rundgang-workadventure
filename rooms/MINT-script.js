//hide Gang:
WA.room.hideLayer("roofs/Gang");
//show Roofs:
WA.room.showLayer("roofs/Chemie2");
WA.room.showLayer("roofs/Chemie");
WA.room.showLayer("roofs/Bio");
WA.room.showLayer("roofs/Bio2");
WA.room.showLayer("roofs/Physik");
WA.room.showLayer("roofs/Physik2");

/*
 *
 *================"DÄCHER"================
 *
 */

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

//Physik2 "Dach":
WA.room.onEnterLayer("trigger/Trigger-Physik2").subscribe(() => {
	WA.room.hideLayer("roofs/Physik2");
	WA.room.showLayer("roofs/Gang");
});
WA.room.onLeaveLayer("trigger/Trigger-Physik2").subscribe(() => {
	WA.room.showLayer("roofs/Physik2");
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

/*
 *
 *================"POPUPS/EASTEREGGS"================
 *
 */
let EasterEggStuhl;
EasterEggStuhl = WA.room
	.onEnterLayer("easterEggs/Stuhl-EasterEgg")
	.subscribe(() => {
		WA.ui.openPopup("badge3", `Tim: Das ist mein Platz!`, [
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
	
	
// -------------------Popup Badges im Mint Bereich ----------------	
let physikBadgePopup;
physikBadgePopup = WA.room
	.onEnterLayer("easterEggs/badgePhysik")
	.subscribe(() => {
		WA.ui.openPopup("badge3", 'ein(e) Buchstabe/Zahl des Lösungswortes: T', [
			{
				label: "Schliessen",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
				},
			},
		]);
	});
	
let chemieBadgePopup;
chemieBadgePopup = WA.room
	.onEnterLayer("easterEggs/badgeChemie")
	.subscribe(() => {
		WA.ui.openPopup("badge4", 'ein(e) Buchstabe/Zahl des Lösungswortes: 2', [
			{
				label: "Schliessen",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
				},
			},
		]);
	});
//------------- Ende Popup Badges Mint	--------------------------------------

//Sprüche Popup:
let EasterEggPopup;
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
		setTimeout(() => {
			EasterEggPopup.close();
		}, 5000);
	});

let indexOfSpruch = 0;
function pickSpruch() {
	var spruch = sprueche[indexOfSpruch];
	indexOfSpruch++;
	if (indexOfSpruch >= sprueche.length) {
		sprueche.sort(() => Math.random() - 0.5);
		indexOfSpruch = 0;
	}
	return `Lehrer-Spruch #${spruch.no}:\n${spruch.text}`;
}
//Sprüche:\/
var sprueche = [
	{
		text: "Kann ich auf die Toilette? \n Ich weiß nicht, ob du kannst.",
		from: "~",
		no: 0,
	},
	{
		text: "5 + 5 = 10 \n 10 .. was? Birnen?",
		from: "~Jeder Mathelehrer",
		no: 0,
	},
	{
		text: "Ihr müsst 5 Minuten vor dem Unterricht bereits in der Klasse sein",
		from: "~Lehrer, die immer 10 Minuten zu spät sind",
		no: 0,
	},
	{
		text: "Runter vom Mattenwagen!",
		from: "~jeder Sportlehrer",
		no: 0,
	},
	{
		text: "Ich beende den Unterricht",
		from: "~Jeder Lehrer",
		no: 0,
	},
	{
		text: "Es kommt alles in der Klausur dran was wir bis jetzt besprochen haben. Ich mache keine Checkliste, ihr seid alt genug.",
		from: "~",
		no: 0,
	},
	{
		text: "Wenn ich euch in der Nacht frage muss es wie aus der Pistole geschossen kommen",
		from: "~",
		no: 0,
	},
	{
		text: "Glauben kannst du im Religonsunterricht",
		from: "~Herr Akyildiz",
		no: 0,
	},
	{
		text: "Gleich setze ich euch auseinander",
		from: "~",
		no: 0,
	},
	{
		text: "Denk nochmal nach, du weißt es",
		from: "~",
		no: 0,
	},
	{
		text: "In english please",
		from: "~jeder Englischlehrer",
		no: 0,
	},
	{
		text: "Wenn ihr keine Fragen stellt dann kann ich euch auch nicht helfen",
		from: "~",
		no: 0,
	},
	{
		text: "So ich rede jetzt auf Deutsch damit ihr mich versteht",
		from: "~jeder Englischlehrer",
		no: 0,
	},
	{
		text: "Warum lacht ihr? Ich will auch mitlachen können",
		from: "~",
		no: 0,
	},
	{
		text: "Ich glaub es hackt",
		from: "~",
		no: 0,
	},
	{
		text: "Das ist unter aller Kanone",
		from: "~",
		no: 0,
	},
	{
		text: "Pschhhhhhhtttttttt",
		from: "~Frau Dauck",
		no: 0,
	},
	{
		text: "Wenn ihr keine Fragen habt, stell ich welche",
		from: "~",
		no: 0,
	},
	{
		text: "How much is the fish?",
		from: "~Herr Dörnte",
		no: 0,
	},
	{
		text: "Menschenskinter",
		from: "~",
		no: 0,
	},
	{
		text: "In meinem Unterricht kommst du nicht zu spät! Rausgehen! Anklopfen! Und nochmal Entschuldigen!",
		from: "~",
		no: 0,
	},
	{
		text: "FALSCHE RICHTUNG!",
		from: "~jeder Lehrer in der Pause, der die Regeln zu ernst nimmt",
		no: 0,
	},
	{
		text: "Du Pflaume",
		from: "~Herr Del Borello",
		no: 0,
	},
	{
		text: "Lehrer: Tut mir leid, dass ich den Unterricht störe \n anderer Lehrer: Machen sie doch immer ",
		from: "~",
		no: 0,
	},
	{
		text: "Tip Top",
		from: "~Frau Stücher",
		no: 0,
	},
	{
		text: "Legenden besagen dass Französisch nie im Unterricht gesprochen wurde",
		from: "~",
		no: 0,
	},
	{
		text: "In meinem Unterricht wird nicht gegeseen",
		from: "~Frau Hamann",
		no: 0,
	},
	{
		text: "Schadeeeeeee",
		from: "~Herr Lenz",
		no: 0,
	},
	{
		text: "Dann ist hier Schicht im Schacht haben wir uns verstanden",
		from: "~",
		no: 0,
	},
	{
		text: "Sammel nochmal deine Gedanken",
		from: "~",
		no: 0,
	},
];
//Sprüche Ende /\
//assign Indexes to Sprüche
for (var i = 0; i < sprueche.length; i++) {
	sprueche[i].no = i + 1;
}
//randomise the Array:
sprueche.sort(() => Math.random() - 0.5);



