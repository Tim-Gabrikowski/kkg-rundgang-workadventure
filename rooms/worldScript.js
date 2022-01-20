/* Badges */
let physikBadgePopup, chemieBadgePopup, badgeAulaPopup,
	badgeBibliothekPopup, badgeInformatikPopup,
	badgeKlassenraumPopup, badgeEingangPopup;

function popup(code, idx)
{
	WA.controls.disablePlayerControls();
	WA.ui.openPopup(
		"badge" + (idx + 1),
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

/* Badge Eingang */
badgeEingangPopup = WA.room.onEnterLayer("badgeEingang").subscribe(() =>
{
	badge(0);
});

/* Badge Aula */
badgeAulaPopup = WA.room.onEnterLayer("badgeAula").subscribe(() =>
{
	badge(1);
});

/* Badge Chemie */
chemieBadgePopup = WA.room.onEnterLayer("easterEggs/badgeChemie").subscribe(() =>
{
	badge(2);
});

/* Badge Physik */
physikBadgePopup = WA.room.onEnterLayer("easterEggs/badgePhysik").subscribe(() =>
{
	badge(3);
});

/* Badge Bibliothek */
badgeBibliothekPopup = WA.room.onEnterLayer("badgeBibliothek").subscribe(() =>
{
	badge(4);
});

/* Badge Informatik */
badgeInformatikPopup = WA.room.onEnterLayer("badgeInformatik").subscribe(() =>
{
	badge(5);
});

/* Badge Klassenraum */
badgeKlassenraumPopup = WA.room.onEnterLayer("badgeKlassenraum").subscribe(() =>
{
	badge(6);
});

/* Eingang Popup */
let eingangsPopup = WA.room.onEnterLayer("eingang").subscribe(() =>
{
	WA.controls.disablePlayerControls();
	WA.ui.openPopup("popupStart", 'Herzlich Willkommen!',
	[
		{
			label: "schliessen",
			className: "primary",
			callback: (popup) =>
			{
				WA.controls.restorePlayerControls();
				popup.close();
			}
		}
	]);
});

/* Intro */
const menu = WA.ui.registerMenuCommand("Anleitung",
{
	iframe: "../intro.html",
});

/* Welcome on Stage */
WA.room.onEnterLayer("stageTrigger").subscribe(() =>
{
	WA.chat.sendChatMessage(`Welcome On Stage, ${WA.player.name}! `, "GSSM");
});

/* Easter Egg: Tim's Stuhl */
let EasterEggStuhl = WA.room.onEnterLayer("easterEggs/Stuhl-EasterEgg").subscribe(() =>
{
	WA.controls.disablePlayerControls();
	WA.ui.openPopup("meinStuhl", `Tim: Das ist mein Platz!`,
	[
		{
			label: "Close",
			className: "primary",
			callback: (popup) =>
			{
				WA.controls.restorePlayerControls();
				popup.close();
			}
		}
	]);
});

/* Easter Egg: Lehrersprüche */
let indexOfSpruch = 0;

function pickSpruch()
{
	let spruch = sprueche[indexOfSpruch];
	if(++indexOfSpruch >= sprueche.length)
	{
		sprueche.sort(() => Math.random() - 0.5);
		indexOfSpruch = 0;
	}

	return `Lehrer-Spruch #${spruch.no}:\n${spruch.text}`;
}

let EasterEggSprueche = WA.room.onEnterLayer("easterEggs/Physik-Trigger").subscribe(() =>
{
	WA.controls.disablePlayerControls();
	WA.ui.openPopup("sprueche", `${pickSpruch()}`,
	[
		{
			label: "Close",
			className: "primary",
			callback: (popup) =>
			{
				WA.controls.restorePlayerControls();
				popup.close();
			}
		}
	]);
});

var sprueche =
[
	{
		text: "Kann ich auf die Toilette? \n Ich weiß nicht, ob du kannst.",
		no: 0
	},
	{
		text: "5 + 5 = 10 \n 10 .. was? Birnen?",
		no: 0
	},
	{
		text: "Ihr müsst 5 Minuten vor dem Unterricht bereits in der Klasse sein",
		no: 0
	},
	{
		text: "Runter vom Mattenwagen!",
		no: 0
	},
	{
		text: "Ich beende den Unterricht",
		no: 0
	},
	{
		text: "Es kommt alles in der Klausur dran was wir bis jetzt besprochen haben. Ich mache keine Checkliste, ihr seid alt genug.",
		no: 0
	},
	{
		text: "Wenn ich euch in der Nacht frage muss es wie aus der Pistole geschossen kommen",
		no: 0
	},
	{
		text: "Glauben kannst du im Religonsunterricht",
		no: 0
	},
	{
		text: "Gleich setze ich euch auseinander",
		no: 0
	},
	{
		text: "Denk nochmal nach, du weißt es",
		no: 0
	},
	{
		text: "In english please",
		no: 0
	},
	{
		text: "Wenn ihr keine Fragen stellt dann kann ich euch auch nicht helfen",
		no: 0
	},
	{
		text: "So ich rede jetzt auf Deutsch damit ihr mich versteht",
		no: 0
	},
	{
		text: "Warum lacht ihr? Ich will auch mitlachen können",
		no: 0
	},
	{
		text: "Ich glaub es hackt",
		no: 0
	},
	{
		text: "Das ist unter aller Kanone",
		no: 0
	},
	{
		text: "Pschhhhhhhtttttttt",
		no: 0
	},
	{
		text: "Wenn ihr keine Fragen habt, stell ich welche",
		no: 0
	},
	{
		text: "How much is the fish?",
		no: 0
	},
	{
		text: "Menschenskinder",
		no: 0
	},
	{
		text: "In meinem Unterricht kommst du nicht zu spät! Rausgehen! Anklopfen! Und nochmal Entschuldigen!",
		no: 0
	},
	{
		text: "FALSCHE RICHTUNG!",
		no: 0
	},
	{
		text: "Du Pflaume",
		no: 0
	},
	{
		text: "Lehrer: Tut mir leid, dass ich den Unterricht störe\nAnderer Lehrer: Machen sie doch immer ",
		no: 0
	},
	{
		text: "Tip Top",
		no: 0
	},
	{
		text: "Legenden besagen, dass im Unterricht nie Französisch gesprochen wurde",
		no: 0
	},
	{
		text: "In meinem Unterricht wird nicht gegeseen",
		no: 0
	},
	{
		text: "Schadeeeeeee",
		no: 0
	},
	{
		text: "Dann ist hier Schicht im Schacht haben wir uns verstanden",
		no: 0
	},
	{
		text: "Sammel nochmal deine Gedanken",
		no: 0
	},
];

for(let i = 0; i < sprueche.length; ++i)
{
	sprueche[i].no = i + 1;
}

sprueche.sort(() => Math.random() - 0.5);
