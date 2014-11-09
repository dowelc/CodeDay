"use strict";

window.onload = function() {
	document.getElementById("addLeaf").onclick = addNewLeaf;
}

function addNewLeaf() {
	var name = document.getElementById("leafName").value;
	var newLeaf = new leaf([], name);
}