document.addEventListener("functions-set", function () {
 
  //run stuff on load
  //===============================================================================
  checkZoomButtonsColor();
  checkTheme();

  //add event listeners
  //===============================================================================
  //default UI setting localstorage loaded
  defaultUI.addEventListener("core-localstorage-load", function () {
    checkDefaultUI();
  });
  
  //show zoom buttons setting localstorage loaded
  showZoomButtons.addEventListener("core-localstorage-load", function () {
    if (showZoomButtons.value === true ||
      showZoomButtons.value === null ||
      localStorage.getItem("showZoomButtons") === null) {
      //setting on or first time visit
      zoomButtonsCheckbox.checked = true;
      ZBDisplayOn();
    }
    else {
      //setting off
      zoomButtonsCheckbox.checked = false;
      ZBDisplayOff();
    }
  });

  separateRow.addEventListener("core-localstorage-load", function () {
    if (separateRow.value === true ||
      separateRow.value === null ||
      localStorage.getItem("separateRow") === null ||
      template.smallScreen === true) {
      //setting on or first time visit
      separateRowCheckbox.checked = true;
      separateRowOn();
    }
    else {
      //setting off
      separateRowCheckbox.checked = false;
      separateRowOff();
    }
  });

  initZoomLS.addEventListener("core-localstorage-load", function () {
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

  smallScreen.addEventListener("core-media-change", function () {
    if (template.smallScreen === true) {
      //disable option
      separateRowTile.style.color = "rgba(0, 0, 0, 0.26)";
      //force separate row
      separateRowCheckbox.checked = true;
      separateRowOn();
      separateRowCheckbox.disabled = true;
    }
    else {
      //enable option
      separateRowTile.style.color = "rgba(0, 0, 0, 0.87)";
      separateRowCheckbox.disabled = false;
      //enable IF the setting was true
      if (localStorage.getItem("separateRow") === "false") {
        separateRowOff();
      }
    }
  });

  //any change in the settings menu
  settingsMenu.addEventListener("change", function () {
    //default UI check
    checkDefaultUI();

    //zoom buttons check
    if (zoomButtonsCheckbox.checked === true) {
      ZBDisplayOn();
    }
    else {
      ZBDisplayOff();
    }
    showZoomButtons.value = zoomButtonsCheckbox.checked;

    //separate row check
    if (separateRowCheckbox.checked === true) {
      separateRowOn();
    }
    else {
      separateRowOff();
    }
    separateRow.value = separateRowCheckbox.checked;
  });

  //wait for ripple to finish, then open dialog (a bit slower, but more effecty)
  themeMenuRipple.addEventListener("core-transitionend", function () {
    //prevent console errors: if the picker is not open, then open it
    if (lightThemePicker !== null) {
      lightThemePicker.open();
    }
  });

  //set theme when cards are chosen
  greenCard.addEventListener("click", function () {
    template.theme = "green";
    checkTheme();
    deepThemePicker.close();
  });
  indigoCard.addEventListener("click", function () {
    template.theme = "indigo";
    checkTheme();
    deepThemePicker.close();
  });
  brownCard.addEventListener("click", function () {
    template.theme = "brown";
    checkTheme();
    deepThemePicker.close();
  });

  //check if zoom is at min or max, then grey out zoom buttons as needed
  slider.addEventListener("core-change", function () {
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
  initZoom.addEventListener("input", function () {
    initZoomDecor.isInvalid = !initZoom.validity.valid;
    if (initZoom.validity.valid) {
      zoomError.opened = false;
    }
    else {
      zoomError.opened = true;
    }
  });

  //open about dialog
  aboutIcon.addEventListener("click", function () {
    //prevent console errors: if the dialog is not open, then open it
    if (lightAboutDialog !== null) {
      lightAboutDialog.open();
    }
  });
});