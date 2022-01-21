/* Badges */
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
	var req = new XMLHttpRequest();
	req.addEventListener("load", function()
	{
		popup(this.responseText, idx);
	});

	req.open("GET", "https://antoninformatik.net/badges/get/?name=" + WA.player.name);
	req.send();
}

/* Badge Eingang */
let badgeEingangPopup = WA.room.onEnterLayer("badgeEingang").subscribe(() => { badge(0); });

/* Badge Aula */
let badgeAulaPopup = WA.room.onEnterLayer("badgeAula").subscribe(() => { badge(1); });

/* Badge Physik */
let physikBadgePopup = WA.room.onEnterLayer("easterEggs/badgePhysik").subscribe(() => { badge(2); });

/* Badge Chemie */
let chemieBadgePopup = WA.room.onEnterLayer("easterEggs/badgeChemie").subscribe(() => { badge(3); });

/* Badge Bibliothek */
let badgeBibliothekPopup = WA.room.onEnterLayer("badgeBibliothek").subscribe(() => { badge(4); });

/* Badge Informatik */
let badgeInformatikPopup = WA.room.onEnterLayer("badgeInformatik").subscribe(() => { badge(5); });

/* Badge Klassenraum */
let badgeKlassenraumPopup = WA.room.onEnterLayer("badgeKlassenraum").subscribe(() => { badge(6); });

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

var sprueche = [];

var req = new XMLHttpRequest();
req.addEventListener("load", function()
{
	sprueche = JSON.parse(this.responseText);
	for(let i = 0; i < sprueche.length; ++i)
	{
		sprueche[i].no = i + 1;
	}
	
	sprueche.sort(() => Math.random() - 0.5);
});

req.open("GET", "https://tim-gabrikowski.github.io/kkg-rundgang-workadventure/rooms/sprueche.json");
req.send();
