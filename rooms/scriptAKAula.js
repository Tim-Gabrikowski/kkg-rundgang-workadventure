let helloWorldPopup;
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

//Anleitung im Menü:
const menu = WA.ui.registerMenuCommand("Anleitung", {
	iframe: "../intro.html",
});
