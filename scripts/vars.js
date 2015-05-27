document.addEventListener("template-bound", function () {
	//important
	template = document.querySelector("#template");
	map = document.querySelector("#map");
	
	//toolbar(s)
	allToolbars = document.querySelectorAll("core-toolbar");
	mainToolbar = document.querySelector("#main-toolbar");
	//top row
	aboutIcon = document.querySelector("#about-icon");
	//controls
	canMiddle = document.querySelectorAll(".can-middle");
	zoomInButton = document.querySelector("#zoom-in");
	zoomOutButton = document.querySelector("#zoom-out");
	slider = document.querySelector("#zoom-slider");
	
	//settings menu
	settingsMenu = document.querySelector("#settings-menu");
	allSubheaders = document.querySelectorAll(".subheader");
	//zoom buttons
	zoomButtonsCheckbox = document.querySelector("#zoom-buttons-checkbox");
	//separate row
	separateRowTile = document.querySelector("#separate-row-tile");
	separateRowCheckbox = document.querySelector("#separate-row-checkbox");
	//initial zoom
	initZoomDecor = document.querySelector("#init-zoom-decor");
	initZoom = document.querySelector("#initial-zoom");
	zoomError = document.querySelector("#init-zoom-error");
	//theme tile
	themeMenuRipple = document.querySelector("#theme-menu-ripple");
	
	//theme picker
	lightThemePicker = document.querySelector("#theme-picker");
	deepThemePicker = document.querySelector("html /deep/ #theme-picker");
	//colors
	green = "#4CAF50";
	indigo = "#3F51B5";
	brown = "#795548";
	//cards
	greenCard = document.querySelector("html /deep/ #green-card");
	indigoCard = document.querySelector("html /deep/ #indigo-card");
	brownCard = document.querySelector("html /deep/ #brown-card");
	
	//about dialog
	lightAboutDialog = document.querySelector("#about-dialog");
	
	//non-visual elements
	//media query
	smallScreen = document.querySelector("#smallScreen");
	//local storage
	defaultUI = document.querySelector("#defaultUI");
	showZoomButtons = document.querySelector("#showZoomButtons");
	separateRow = document.querySelector("#separateRow");
	initZoomLS = document.querySelector("#initialZoom");
	
	map.fire("vars-set");
});