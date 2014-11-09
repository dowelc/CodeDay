"use strict";

window.onload = function() {
	document.getElementById("submit").onclick = submit;
	chrome.storage.local.set({bookmarks: [	"is awesome", "is sleepy" ]
													});
	chrome.storage.local.get("user", function(results) {
		alert(results.user);
		results.user.push("is worried");
		alert(results.user);
	});
}
