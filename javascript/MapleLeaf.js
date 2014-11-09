"use strict";
var userLeaf;
window.onload = function() {
	var bookmarks = ["website1", "website2"];
	userLeaf = new leaf(bookmarks, "Jake");
	document.getElementById("hello").innerHTML = "Hello " + userLeaf.username;
	loadBookmarks();
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