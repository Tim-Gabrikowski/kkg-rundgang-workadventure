/* Eingang Popup */
let eingangsPopup = WA.room.onEnterLayer("eingang").subscribe(() => {
	WA.controls.disablePlayerControls();
	WA.ui.openPopup("popupStart", "Herzlich Willkommen!", [
		{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				popup.close();
			},
		},
	]);
});

/* Intro */
const menu = WA.ui.registerMenuCommand("Anleitung", {
	iframe: "../intro.html",
});
const map = WA.ui.registerMenuCommand("Karte", {
	iframe: "../map.html",
});

/* Welcome on Stage */
WA.room.onEnterLayer("stageTrigger").subscribe(() => {
	WA.chat.sendChatMessage(`Welcome On Stage, ${WA.player.name}! `, "GSSM");
});

/* Easter Egg: Tim's Stuhl */
let EasterEggStuhl = WA.room
	.onEnterLayer("easterEggs/Stuhl-EasterEgg")
	.subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("meinStuhl", `Tim: Das ist mein Platz!`, [
			{
				label: "Close",
				className: "primary",
				callback: (popup) => {
					WA.controls.restorePlayerControls();
					popup.close();
				},
			},
		]);
	});

/* Easter Egg: Lehrersprüche */
let indexOfSpruch = 0;

function pickSpruch() {
	let spruch = sprueche[indexOfSpruch];
	if (++indexOfSpruch >= sprueche.length) {
		sprueche.sort(() => Math.random() - 0.5);
		indexOfSpruch = 0;
	}

	return `Lehrer-Spruch #${spruch.no}:\n${spruch.text}`;
}

let EasterEggSprueche = WA.room
	.onEnterLayer("easterEggs/Physik-Trigger")
	.subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("sprueche", `${pickSpruch()}`, [
			{
				label: "Close",
				className: "primary",
				callback: (popup) => {
					WA.controls.restorePlayerControls();
					popup.close();
				},
			},
		]);
	});

var sprueche = [];

var req = new XMLHttpRequest();
req.addEventListener("load", function () {
	sprueche = JSON.parse(this.responseText);
	for (let i = 0; i < sprueche.length; ++i) {
		sprueche[i].no = i + 1;
	}

	sprueche.sort(() => Math.random() - 0.5);
});

req.open(
	"GET",
	"https://tim-gabrikowski.github.io/kkg-rundgang-workadventure/rooms/sprueche.json"
);
req.send();
