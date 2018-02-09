function edit() {
var charImg = document.getElementById('charImg');
var set = document.getElementById('sets');
	if (set.value == "Default") {
		charImg.src = "default.png";
	} else if (set.value == "Preset 1") {
		charImg.src = "preset1.png";
	} else if (set.value == "Preset 2") {
		charImg.src = "preset2.png";
	}
}
