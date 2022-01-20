/*
 *==========RÄTSEL BADGES==========
 */

function popup(code, idx)
{
	WA.controls.disablePlayerControls();
	WA.ui.openPopup(
		"Badge" + (idx + 1),
		(1 + idx) + ". Buchstabe/Zahl des Lösungswortes: " + code[idx],
		[
			{
				label: "Schliessen",
				className: "primary",
				callback: (popup) =>
				{
					WA.controls.restorePlayerControls();
					popup.close();
				},
			},
		]
	);
}

function badge(idx)
{
	/*var code = localStorage.getItem("code");
	if(code == null)
	{
		var req = new XMLHttpRequest();
		req.addEventListener("load", function()
		{
			localStorage.setItem("code", this.responseText);
			popup(this.responseText, idx);
		});

		req.open("GET", "https://antoninformatik.net/badges/get/");
		req.send();
		return;
	}

	popup(code, idx);*/

	popup("ABCDEFG", idx);
}

let physikBadgePopup, chemieBadgePopup, badgeAulaPopup,
	badgeBibliothekPopup, badgeInformatikPopup,
	badgeKlassenraumPopup, badgeEingangPopup;

WA.onInit().then(() =>
{
	/* Badge Physik */
	physikBadgePopup = WA.room.onEnterLayer("easterEggs/badgePhysik").subscribe(() =>
	{
		badge(0);
	});

	WA.room.onLeaveLayer("easterEggs/badgePhysik").subscribe(() =>
	{
		if(physikBadgePopup != null) { physikBadgePopup.close(); }
	});

	/* Badge Chemie */
	chemieBadgePopup = WA.room.onEnterLayer("easterEggs/badgeChemie").subscribe(() =>
	{
		badge(1);
	});

	WA.room.onLeaveLayer("easterEggs/badgeChemie").subscribe(() =>
	{
		if(chemieBadgePopup != null) { chemieBadgePopup.close(); }
	});

	/* Badge Aula */
	badgeAulaPopup = WA.room.onEnterLayer("badgeAula").subscribe(() =>
	{
		badge(2);
	});

	WA.room.onLeaveLayer("badgeAula").subscribe(() =>
	{
		if(badgeAulaPopup != null) { badgeAulaPopup.close(); }
	});

	/* Badge Bibliothek */
	badgeBibliothekPopup = WA.room.onEnterLayer("badgeBibliothek").subscribe(() =>
	{
		badge(3);
	});

	WA.room.onLeaveLayer("badgeBibliothek").subscribe(() =>
	{
		if(badgeBibliothekPopup != null) { badgeBibliothekPopup.close(); }
	});

	/* Badge Informatik */
	badgeInformatikPopup = WA.room.onEnterLayer("badgeInformatik").subscribe(() =>
	{
		badge(4);
	});

	WA.room.onLeaveLayer("badgeInformatik").subscribe(() =>
	{
		if(badgeInformatikPopup != null) { badgeInformatikPopup.close(); }
	});

	/* Badge Klassenraum */
	badgeKlassenraumPopup = WA.room.onEnterLayer("badgeKlassenraum").subscribe(() =>
	{
		badge(5);
	});

	WA.room.onLeaveLayer("badgeKlassenraum").subscribe(() =>
	{
		if(badgeKlassenraumPopup != null) { badgeKlassenraumPopup.close(); }
	});

	/* Badge Eingang */
	badgeEingangPopup = WA.room.onEnterLayer("badgeEingang").subscribe(() =>
	{
		badge(6);
	});

	WA.room.onLeaveLayer("badgeEingang").subscribe(() =>
	{
		if(badgeEingangPopup != null) { badgeEingangPopup.close(); }
	});
});

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