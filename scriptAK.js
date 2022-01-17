let helloWorldPopup;
WA.onInit().then(() => {
	// Popup öffenen, wenn man die Schule betritt...
	/*eingangsPopup = WA.room.onEnterLayer("eingang").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("popupStart", 'Herzlich Willkommen! ... ', [{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
				popup.close();
			}
		}]);
	});

	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("eingang").subscribe(() => {
		eingangsPopup.close();
	});*/
	
	
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeEingangPopup = WA.room.onEnterLayer("badgeEingang").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("badge1", 'ein(e) Buchstabe/Zahl des Lösungswortes: 2', [{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				// Schliesse popup, wenn 'schliessen' Button gedrückt wird"
				popup.close();
			}
		}]);
	});

	// Schließe Popup, wenn man map verlässt.
	WA.room.onLeaveLayer("badgeEingang").subscribe(() => {
		badgeEingangPopup.close();
	});
});