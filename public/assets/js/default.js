function edit() {

var charImg = document.getElementById('charImg');
var set = document.getElementById('sets');

	if (set.value == "Default") {
		charImg.src = "/assets/images/default.png";
	} else if (set.value == "Preset 1") {
		charImg.src = "/assets/images/preset1.png";
	} else if (set.value == "Preset 2") {
		charImg.src = "/assets/images/preset2.png";
	}
}
