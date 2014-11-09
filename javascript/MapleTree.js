"use strict";
var leaves;
var setLeaves = false;

window.onload = function() {
	if (!setLeaves) {
		chrome.storage.sync.set({leaves: []}), function() {
			console.log("Leaves not set! Initializing to empty...");
		}
	}
	chrome.storage.sync.get(loadLeaves);
	document.getElementById("addLeaf").onclick = addNewLeaf;
}

function addNewLeaf() {
	var name = document.getElementById("leafName").value;
	document.getElementById("leafName").value = "";
	var newLeaf = new leaf([], name);
	leaves.push(newLeaf);
	chrome.storage.sync.set({leaves: leaves}, function() {
		console.log("saved " + name);
	});
	chrome.storage.sync.get(loadLeaves);

}

function loadLeaves(results) {
	setLeaves = true;
	leaves = results.leaves;
	console.log(results);
	for (var i = 0; i < results.length; i++) {

	}
}