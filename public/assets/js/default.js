function edit() {

var charImg = document.getElementById('charImg');
var set = document.getElementById('sets');
var setNum = set.options[set.selectedIndex].value;
switch (setNum)
{
	case 1:
        charImg.src = "/assets/images/preset1.png";
        break;
    case 2:
        charImg.src = "/assets/images/preset2.png";
        break;
    default:
        charImg.src = "/assets/images/default.png";
        break;
}
}
