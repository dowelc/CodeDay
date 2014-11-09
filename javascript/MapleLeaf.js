"use strict";
var userLeaf;
window.onload = function() {
	var bookmarks = ["website1", "website2"];
	userLeaf = new leaf(bookmarks, "Jake");
	document.getElementById("hello").innerHTML = "Hello " + userLeaf.username;
	// loadBookmarks();

	chrome.storage.sync.set({'userLeaf': userLeaf});
	chrome.storage.sync.get('userLeaf', function(result) {
		var newBookmarks = result.userLeaf.bookmarks;
		console.log(newBookmarks.toString());
		console.log(result.userLeaf.username);
		userLeaf.bookmarks = newBookmarks;
		loadBookmarks();
	});
}

function loadBookmarks() {
	for (var i = 0; i < userLeaf.bookmarks.length; i++) {
		var newBookmark = document.createElement("li");
		var bookmarkLink = document.createElement("a");
		bookmarkLink.setAttribute("href", "https://www.google.com");
		bookmarkLink.innerHTML = userLeaf.bookmarks[i];
		newBookmark.appendChild(bookmarkLink);
		document.getElementById("bookmarks").appendChild(newBookmark);
	}
}