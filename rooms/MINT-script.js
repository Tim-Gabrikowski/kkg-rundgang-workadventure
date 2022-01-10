//hide Gang:
WA.room.hideLayer("Gang");

//Chemie "Dach":
WA.room.onEnterLayer("Trigger-Chemie").subscribe(() => {
	WA.room.hideLayer("Chemie");
	WA.room.showLayer("Gang");
});
WA.room.onLeaveLayer("Trigger-Chemie").subscribe(() => {
	WA.room.showLayer("Chemie");
	WA.room.hideLayer("Gang");
});

//Bio "Dach":
WA.room.onEnterLayer("Trigger-Bio").subscribe(() => {
	WA.room.hideLayer("Bio");
	WA.room.showLayer("Gang");
});
WA.room.onLeaveLayer("Trigger-Bio").subscribe(() => {
	WA.room.showLayer("Bio");
	WA.room.hideLayer("Gang");
});

//Chemie2 "Dach":
WA.room.onEnterLayer("Trigger-Chemie2").subscribe(() => {
	WA.room.hideLayer("Chemie2");
	WA.room.showLayer("Gang");
});
WA.room.onLeaveLayer("Trigger-Chemie2").subscribe(() => {
	WA.room.showLayer("Chemie2");
	WA.room.hideLayer("Gang");
});
