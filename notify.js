function notifySet(title,content,image,showNow) {
	notifyHide();

	// Get elements and set them as variables to make it easier
	var notifyTitle   = document.getElementById("notifyTitle");   // Get notification title
	var notifyContent = document.getElementById("notifyContent"); // Get notification content
	var notifyIcon    = document.getElementById("notifyIcon");    // Get notification icon

	// Set the data
	notifyTitle.innerHTML   = title;
	notifyContent.innerHTML = content;
	notifyIcon.setAttribute("style","background-image:url('" + image + "');");

	// If the user wants to do so,
	if (showNow == true) {
		notifyShow();
	};
}

function notifyShow() {
	var notifyBlock = document.getElementById("notifyJs");
	var notifyCloak = document.getElementById("notifyCloak");
	notifyBlock.setAttribute("class","notify-box");
	notifyCloak.setAttribute("class","notify-cloak");
}

function notifyHide() {
	var notifyBlock   = document.getElementById("notifyJs");
	var notifyCloak = document.getElementById("notifyCloak");
	notifyBlock.setAttribute("class","notify-box notify-hide");
	notifyCloak.setAttribute("class","");
}

function notifyToggle() {
	var notifyBlock   = document.getElementById("notifyJs");
	if (notifyBlock.getAttribute("class") == "notify-box notify-hide") {
		notifyShow();
	} else {
		notifyHide();
	}
}