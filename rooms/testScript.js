WA.chat.sendChatMessage(
	"Hallo, ich bin GSSM. Das steht für Generic Server Script Moderator.\n Ich begleite dich auf dem Server.",
	"GSSM"
);

WA.room.onEnterLayer("stageTrigger").subscribe(() => {
	WA.chat.sendChatMessage(`Welcome On Stage, ${WA.player.name}! `, "GSSM");
});
