"use strict";
var userLeaf;
window.onload = function() {
	userLeaf = new leaf([], "Jake");
	// updating userLeaf in storage
	chrome.bookmarks.getTree(function(results) {
		userLeaf.bookmarks = results[0];
		chrome.storage.sync.set({"userLeaf": userLeaf});
		loadBookmarks();
	});

}

function loadBookmarks() {
	for (var i = 0; i < userLeaf.bookmarks.children[0].children.length; i++) {
		// getting variables set up
		var newBookmark = document.createElement("li");
		var bookmarkLink = document.createElement("a");
		var favicon = document.createElement("img");
		var name = userLeaf.bookmarks.children[0].children[i].title;
		var url = userLeaf.bookmarks.children[0].children[i].url;
		var faviconUrl = "http://www.google.com/s2/favicons?domain=" + url;
		
		// getting the new list element set up
		bookmarkLink.setAttribute("href", url);
		bookmarkLink.innerHTML = name;
		favicon.setAttribute("src", faviconUrl);
		favicon.setAttribute("alt", "favicon");
		
		// adding it to the DOM
		newBookmark.appendChild(favicon);
		newBookmark.appendChild(bookmarkLink);
		document.getElementById("bookmarks").appendChild(newBookmark);
	}
}
