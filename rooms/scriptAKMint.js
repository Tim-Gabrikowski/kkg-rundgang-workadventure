let helloWorldPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgePhysikPopup = WA.room.onEnterLayer("Physik-Trigger").subscribe(() => {
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
	WA.room.onLeaveLayer("Physik-Trigger").subscribe(() => {
		badgePhysikPopup.close();
	});

	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeChemiePopup = WA.room.onEnterLayer("Chemie-Trigger").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup(
			"badge3",
			"ein(e) Buchstabe/Zahl des Lösungswortes: 2",
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
	WA.room.onLeaveLayer("Chemie-Trigger").subscribe(() => {
		badgeChemiePopup.close();
	});
});

//Anleitung im Menü:
const menu = WA.ui.registerMenuCommand("Anleitung", {
	iframe: "../intro.html",
});
