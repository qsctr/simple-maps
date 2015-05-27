document.addEventListener("template-bound", function () {
	template = document.querySelector("#template");
	map = document.querySelector("#map");
	mainToolbar = document.querySelector("#main-toolbar");
	allToolbars = document.querySelectorAll("core-toolbar");
	aboutIcon = document.querySelector("#about-icon");
	slider = document.querySelector("#zoom-slider");
	zoomInButton = document.querySelector("#zoom-in");
	zoomOutButton = document.querySelector("#zoom-out");
	canMiddle = document.querySelectorAll(".can-middle");
	settingsMenu = document.querySelector("#settings-menu");
	allSubheaders = document.querySelectorAll(".subheader");
	zoomButtonsCheckbox = document.querySelector("#zoom-buttons-checkbox");
	separateRowTile = document.querySelector("#separate-row-tile");
	separateRowCheckbox = document.querySelector("#separate-row-checkbox");
	initZoomDecor = document.querySelector("#init-zoom-decor");
	initZoom = document.querySelector("#initial-zoom");
	zoomError = document.querySelector("#init-zoom-error");
	themeMenuRipple = document.querySelector("#theme-menu-ripple");
	lightThemePicker = document.querySelector("#theme-picker");
	deepThemePicker = document.querySelector("html /deep/ #theme-picker");
	green = "#4CAF50";
	indigo = "#3F51B5";
	brown = "#795548";
	greenCard = document.querySelector("html /deep/ #green-card");
	indigoCard = document.querySelector("html /deep/ #indigo-card");
	brownCard = document.querySelector("html /deep/ #brown-card");
	lightAboutDialog = document.querySelector("#about-dialog");
	smallScreen = document.querySelector("#smallScreen");
	defaultUI = document.querySelector("#defaultUI");
	showZoomButtons = document.querySelector("#showZoomButtons");
	separateRow = document.querySelector("#separateRow");
	initZoomLS = document.querySelector("#initialZoom");
	
	map.fire("vars-set");
});