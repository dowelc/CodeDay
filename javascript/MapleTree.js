"use strict";
var leaves;

window.onload = function() {
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
	leaves = results.leaves;
	console.log(results);
	document.getElementById("leaves").innerHTML = "";
	for (var i = 0; i < leaves.length; i++) {
		var name = leaves[i].leafName;
		var newLeaf = document.createElement("li");
		var leafLink = document.createElement("a");
		var deleteLeaf = document.createElement("a");
		deleteLeaf.innerHTML = "\t\tx";
		leafLink.innerHTML = name;
		leafLink.setAttribute("href", "MapleLeaf.html");
		newLeaf.appendChild(leafLink);
		newLeaf.appendChild(deleteLeaf);
		document.getElementById("leaves").appendChild(newLeaf);
	}
}