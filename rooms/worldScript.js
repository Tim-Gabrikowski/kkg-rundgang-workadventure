/*
 *==========RÄTSEL BADGES==========
 */

// ------------------- Mint Bereich (badge3/4) ----------------
let physikBadgePopup;
physikBadgePopup = WA.room
	.onEnterLayer("easterEggs/badgePhysik")
	.subscribe(() => {
		WA.ui.openPopup(
			"badge3",
			"ein(e) Buchstabe/Zahl des Lösungswortes: T",
			[
				{
					label: "Schliessen",
					className: "primary",
					callback: (popup) => {
						// Close the popup when the "Close" button is pressed.
						popup.close();
					},
				},
			]
		);
	});

let chemieBadgePopup;
chemieBadgePopup = WA.room
	.onEnterLayer("easterEggs/badgeChemie")
	.subscribe(() => {
		WA.ui.openPopup(
			"badge4",
			"ein(e) Buchstabe/Zahl des Lösungswortes: 2",
			[
				{
					label: "Schliessen",
					className: "primary",
					callback: (popup) => {
						// Close the popup when the "Close" button is pressed.
						popup.close();
					},
				},
			]
		);
	});
//------------- Ende Mint --------------------------------------
//------------- Aula (badge 2)----------------
let badgeAulaPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeAulaPopup = WA.room.onEnterLayer("badgeAula").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup(
			"badge2",
			"ein(e) Buchstabe/Zahl des Lösungswortes: T",
			[
				{
					label: "schliessen",
					className: "primary",
					callback: (popup) => {
						WA.controls.restorePlayerControls();
						// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
						popup.close();
					},
				},
			]
		);
	});
	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("badgeAula").subscribe(() => {
		badgeAulaPopup.close();
	});
});
//--------------------ENDE Aula ----------------
//--------------------Bibliothek (badge 5)----------------
let badgeBibliothekPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeBibliothekPopup = WA.room
		.onEnterLayer("badgeBibliothek")
		.subscribe(() => {
			WA.controls.disablePlayerControls();
			WA.ui.openPopup(
				"badge5",
				"ein(e) Buchstabe/Zahl des Lösungswortes:  BIBLIOTHEK",
				[
					{
						label: "schliessen",
						className: "primary",
						callback: (popup) => {
							WA.controls.restorePlayerControls();
							// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
							popup.close();
						},
					},
				]
			);
		});
	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("badgeBibliothek").subscribe(() => {
		badgeBibliothekPopup.close();
	});
});
//--------------------ENDE Bibliothek-----------
//--------------------Informatik (badge 6)----------------
let badgeInformatikPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeInformatikPopup = WA.room
		.onEnterLayer("badgeInformatik")
		.subscribe(() => {
			WA.controls.disablePlayerControls();
			WA.ui.openPopup(
				"badge6",
				"ein(e) Buchstabe/Zahl des Lösungswortes:  INFORMATIK",
				[
					{
						label: "schliessen",
						className: "primary",
						callback: (popup) => {
							WA.controls.restorePlayerControls();
							// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
							popup.close();
						},
					},
				]
			);
		});
	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("badgeInformatik").subscribe(() => {
		badgeInformatikPopup.close();
	});
});
//--------------------ENDE Informatik-----------
//--------------------Klassenraum(badge 7)----------------
let badgeKlassenraumPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeKlassenraumPopup = WA.room
		.onEnterLayer("badgeKlassenraum")
		.subscribe(() => {
			WA.controls.disablePlayerControls();
			WA.ui.openPopup(
				"badge7",
				"ein(e) Buchstabe/Zahl des Lösungswortes:  KLASSENRAUM",
				[
					{
						label: "schliessen",
						className: "primary",
						callback: (popup) => {
							WA.controls.restorePlayerControls();
							// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
							popup.close();
						},
					},
				]
			);
		});
	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("badgeKlassenraum").subscribe(() => {
		badgeKlassenraumPopup.close();
	});
});
//--------------------ENDE Klassenraum-----------
//--------------------Eingang (badge 1)--------------------
let badgeEingangPopup;
badgeEingangPopup = WA.room.onEnterLayer("badgeEingang").subscribe(() => {
	WA.controls.disablePlayerControls();
	WA.ui.openPopup("badge1", "ein(e) Buchstabe/Zahl des Lösungswortes: 2", [
		{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
				popup.close();
			},
		},
	]);
});

// Schließe Popup, wenn man map verlässt.
WA.room.onLeaveLayer("badgeEingang").subscribe(() => {
	badgeEingangPopup.close();
});
//---------------ENDE Eingang----------------
/*
 *==========ENDE RÄTSEL BADGES==========
 */
//Anleitung im Menü:
const menu = WA.ui.registerMenuCommand("Anleitung", {
	iframe: "../intro.html",
});
/*
 *==========EasterEggs-Tim==========
 */
//Aula-Welcome:
WA.room.onEnterLayer("stageTrigger").subscribe(() => {
	WA.chat.sendChatMessage(`Welcome On Stage, ${WA.player.name}! `, "GSSM");
});

//EasterEgg Stuhl (MINT/Physik2)
let EasterEggStuhl;
EasterEggStuhl = WA.room
	.onEnterLayer("easterEggs/Stuhl-EasterEgg")
	.subscribe(() => {
		console.log("STUHL");
		WA.ui.openPopup("meinStuhl", `Tim: Das ist mein Platz!`, [
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

//Sprüche Popup (MINT/Physik1)
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
let EasterEggSprueche;
EasterEggSprueche = WA.room
	.onEnterLayer("easterEggs/Physik-Trigger")
	.subscribe(() => {
		console.log("SPRÜCHE!");
		WA.ui.openPopup("sprueche", `${pickSpruch()}`, [
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
			EasterEggSprueche.close();
		}, 5000);
	});

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

/*
 *==========ENDE EasterEggs Tim==========
 */
