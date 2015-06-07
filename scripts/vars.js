document.addEventListener("template-bound", function () {
	//template
	template = document.querySelector("#template");
	
	//toolbars
	allToolbars = document.querySelectorAll("core-toolbar");
	
	//main toolbar
	mainToolbar = document.querySelector("#main-toolbar");
	//controls
	canMiddle = document.querySelectorAll(".can-middle");
	zoomInButton = document.querySelector("#zoom-in-button");
	zoomOutButton = document.querySelector("#zoom-out-button");
	zoomSlider = document.querySelector("#zoom-slider");
	//other buttons
	aboutButton = document.querySelector("#about-button");
	
	//map
	map = document.querySelector("#map");
	
	//settings menu
	settingsMenu = document.querySelector("#settings-menu");
	//all subheaders
	allSubheaders = document.querySelectorAll(".subheader");
	//controls subheader
	controlsSubheaderTile = document.querySelector("#controls-subheader-tile");
	controlsSubheaderText = document.querySelector("#controls-subheader-text");
	//default UI
	defaultUITile = document.querySelector("#defaultUI-tile");
	defaultUIText = document.querySelector("#defaultUI-text");
	defaultUIControl = document.querySelector("defaultUI-control");
	//show zoom buttons
	showZoomButtonsTile = document.querySelector("#show-zoom-buttons-tile");
	showZoomButtonsText = document.querySelector("#show-zoom-buttons-text");
	showZoomButtonsControl = document.querySelector("#show-zoom-buttons-control");
	//separate row
	separateRowTile = document.querySelector("#separate-row-tile");
	separateRowText = document.querySelector("#separate-row-text");
	separateRowControl = document.querySelector("#separate-row-control");
	//zoom subheader
	zoomSubheaderTile = document.querySelector("#zoom-subheader-tile");
	zoomSubheaderText = document.querySelector("#zoom-subheader-text");
	//map zoom
	mapZoomTile = document.querySelector("#map-zoom-tile");
	mapZoomText = document.querySelector("#map-zoom-text");
	mapZoomControl = document.querySelector("#map-zoom-control");
	//initial zoom
	initialZoomTile = document.querySelector("#initial-zoom-tile");
	initialZoomText = document.querySelector("#initial-zoom-text");
	initialZoomControlDecor = document.querySelector("#initial-zoom-control-decor");
	initialZoomControlCore = document.querySelector("#initial-zoom-control-core");
	//initial zoom error
	initialZoomErrorCollapse = document.querySelector("#initial-zoom-error-collapse");
	initialZoomErrorText = document.querySelector("#initial-zoom-error-text");
	//theme subheader
	themeSubheaderTile = document.querySelector("#theme-subheader-tile");
	themeSubheaderText = document.querySelector("#theme-subheader-text");
	//theme
	themeTile = document.querySelector("#theme-tile");
	themeText = document.querySelector("#theme-text");
	themeRipple = document.querySelector("#theme-ripple");
	
	//theme dialog
	lightThemeDialog = document.querySelector("#theme-dialog");
	deepThemeDialog = document.querySelector("html /deep/ #theme-dialog");
	//colors
	green = "#4CAF50";
	indigo = "#3F51B5";
	brown = "#795548";
	//cards
	themeGreenCard = document.querySelector("html /deep/ #theme-green-card");
	themeIndigoCard = document.querySelector("html /deep/ #theme-indigo-card");
	themeBrownCard = document.querySelector("html /deep/ #theme-brown-card");
	
	//about dialog
	lightAboutDialog = document.querySelector("#about-dialog");
	deepAboutDialog = document.querySelector("html /deep/ #theme-dialog");
	
	//non-visual elements
	//media query
	smallScreenQuery = document.querySelector("#small-screen-query");
	defaultUILS = document.querySelector("#defaultUI-LS");
	showZoomButtonsLS = document.querySelector("#show-zoom-buttons-LS");
	separateRowLS = document.querySelector("#separate-row-LS");
	mapZoomLS = document.querySelector("#map-zoom-LS");
	initialZoomLS = document.querySelector("#initial-zoom-LS");
	themeLS = document.querySelector("#theme-LS");
	
	map.fire("vars-set");
});