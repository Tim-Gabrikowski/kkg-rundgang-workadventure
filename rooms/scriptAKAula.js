let helloWorldPopup;
WA.onInit().then(() => {
	
	
	
	// Popup öffenen, wenn man den Badge in der Aula findet ...
	badgeAulaPopup = WA.room.onEnterLayer("Aula-Trigger").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("badge4", 'ein(e) Buchstabe/Zahl des Lösungswortes: T', [{
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
	WA.room.onLeaveLayer("Aula-Trigger").subscribe(() => {
		badgeAulaPopup.close();
	});
	
	
	
});