"use strict";
var userLeaf;
window.onload = function() {
	userLeaf = new leaf(["website1", "website2"], "Jake");
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
		var name = userLeaf.bookmarks.children[0].children[i].title;
		var url = userLeaf.bookmarks.children[0].children[i].url;
		
		// getting the new list element set up
		bookmarkLink.setAttribute("href", url);
		console.log(userLeaf.bookmarks.children[0].children[i].title);
		bookmarkLink.innerHTML = name;
		
		// adding it to the DOM
		newBookmark.appendChild(bookmarkLink);
		document.getElementById("bookmarks").appendChild(newBookmark);
	}
}

function printstuff() {
	console.log(userLeaf.bookmarks.children[0].children[2].title);
}