"use strict";

window.onload = function() {
	var bookmarks = ["website1", "website2"];
	var userLeaf = new leaf(bookmarks, "Jake");
	document.getElementById("hello").innerHTML = "Hello " + userLeaf.username;
}