document.addEventListener("functions-set", function () {
 
  //run stuff on load
  //===============================================================================
  checkZoomButtonsColor();
  checkTheme();

  //add event listeners
  //===============================================================================
  //default UI setting localstorage loaded
  defaultUILS.addEventListener("core-localstorage-load", function () {
    checkDefaultUI();
  });
  
  //show zoom buttons setting localstorage loaded
  showZoomButtonsLS.addEventListener("core-localstorage-load", function () {
    if (showZoomButtonsLS.value === "true" ||
      showZoomButtonsLS.value === null ||
      localStorage.getItem("showZoomButtonsLS") === null) {
      //setting on or first time visit
      showZoomButtonsControl.checked = true;
      ZBDisplayOn();
    }
    else {
      //setting off
      showZoomButtonsControl.checked = false;
      ZBDisplayOff();
    }
  });

  separateRowLS.addEventListener("core-localstorage-load", function () {
    if (separateRowLS.value === "true" ||
      separateRowLS.value === null ||
      localStorage.getItem("separateRowLS") === null ||
      template.smallScreen === true) {
      //setting on or first time visit
      separateRowControl.checked = true;
      separateRowOn();
    }
    else {
      //setting off
      separateRowControl.checked = false;
      separateRowOff();
    }
  });

  initialZoomLS.addEventListener("core-localstorage-load", function () {
    if (template.initialZoom === null) {
      //first time visit
      template.initialZoom = 10;
    }
    else if (template.initialZoom <= 20 && template.initialZoom >= 0) {
      //ok value
    }
    else {
      //invalid value, changge back to 10
      template.initialZoom = 10;
    }
    //set it
    template.zoomLevel = template.initialZoom;
  });

  smallScreenQuery.addEventListener("core-media-change", function () {
    if (template.smallScreen === true) {
      //disable option
      separateRowTile.style.color = "rgba(0, 0, 0, 0.26)";
      //force separate row
      separateRowControl.checked = true;
      separateRowOn();
      separateRowControl.disabled = true;
    }
    else {
      //enable option
      separateRowTile.style.color = "rgba(0, 0, 0, 0.87)";
      separateRowControl.disabled = false;
      //enable IF the setting was true
      if (localStorage.getItem("separateRowLS") === "false") {
        separateRowOff();
      }
    }
  });

  //any change in the settings menu
  settingsMenu.addEventListener("change", function () {
    //default UI check
    checkDefaultUI();

    //zoom buttons check
    if (showZoomButtonsControl.checked === true) {
      ZBDisplayOn();
    }
    else {
      ZBDisplayOff();
    }
    showZoomButtonsLS.value = showZoomButtonsControl.checked;

    //separate row check
    if (separateRowControl.checked === true) {
      separateRowOn();
    }
    else {
      separateRowOff();
    }
    separateRowLS.value = separateRowControl.checked;
  });

  //wait for ripple to finish, then open dialog (a bit slower, but more materialish)
  themeRipple.addEventListener("core-transitionend", function () {
    //prevent console errors: if the picker is not open, then open it
    if (lightThemeDialog !== null) {
      lightThemeDialog.open();
    }
  });

  //set theme when cards are chosen
  themeGreenCard.addEventListener("click", function () {
    template.theme = "green";
    checkTheme();
    deepThemeDialog.close();
  });
  themeIndigoCard.addEventListener("click", function () {
    template.theme = "indigo";
    checkTheme();
    deepThemeDialog.close();
  });
  themeBrownCard.addEventListener("click", function () {
    template.theme = "brown";
    checkTheme();
    deepThemeDialog.close();
  });

  //check if zoom is at min or max, then grey out zoom buttons as needed
  zoomSlider.addEventListener("core-change", function () {
    checkZoomButtonsColor();
  });

  //zoom in
  zoomInButton.addEventListener("click", function () {
    slider.increment();
  });

  //zoom out
  zoomOutButton.addEventListener("click", function () {
    slider.decrement();
  });

  //verify initial zoom and open/close error message
  initialZoomControlCore.addEventListener("input", function () {
    initialZoomControlDecor.isInvalid = !initZoom.validity.valid;
    if (initZoom.validity.valid) {
      initialZoomErrorCollapse.opened = false;
    }
    else {
      initialZoomErrorCollapse.opened = true;
    }
  });

  //open about dialog
  aboutButton.addEventListener("click", function () {
    //prevent console errors: if the dialog is not open, then open it
    if (lightAboutDialog !== null) {
      lightAboutDialog.open();
    }
  });
});