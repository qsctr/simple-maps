document.addEventListener("vars-set", function () {
  
  var checkDefaultUI = function () {
    if (template.defaultUI) {
      map.disableDefaultUI = false;
    }
    else {
      map.disableDefaultUI = true;
    }
  };
  
  var ZBDisplayOn = function () {
    zoomInButton.style.display = "initial";
    zoomOutButton.style.display = "initial";
  };
  
  var ZBDisplayOff = function () {
    zoomInButton.style.display = "none";
    zoomOutButton.style.display = "none";
  };
  
  var separateRowOn = function () {
    mainToolbar.classList.add("medium-tall");
    var count = 0;
    while (count < canMiddle.length) {
      canMiddle[count].classList.add("middle");
      count++;
    }
  };
  
  var separateRowOff = function () {
    var count = 0;
    while (count < canMiddle.length) {
      canMiddle[count].classList.remove("middle");
      count++;
    }
    mainToolbar.classList.remove("medium-tall");
  };
  
  var checkZoomButtonsColor = function () {
    if (template.zoomLevel === 20) {
      zoomInButton.style.color = "rgba(0, 0, 0, 0.26)";
    }
    else {
      zoomInButton.style.color = "white";
    }
    if (template.zoomLevel === 0) {
      zoomOutButton.style.color = "rgba(0, 0, 0, 0.26)";
    }
    else {
      zoomOutButton.style.color = "white";
    }
  };
  
  var applyTheme = function (color) {
    var count = 0;
    while (count < allToolbars.length) {
      allToolbars[count].style.backgroundColor = color;
      count++;
    }
    count = 0;
    while (count < allSubheaders.length) {
      allSubheaders[count].style.color = color;
      count++;
    }
  };
  
  var checkTheme = function () {
    if (template.theme === "indigo") {
      applyTheme(indigo);
      greenCard.className = "";
      indigoCard.className = "white";
      brownCard.className = "";
    }
    else if (template.theme === "brown") {
      applyTheme(brown);
      greenCard.className = "";
      indigoCard.className = "";
      brownCard.className = "white";
    }
    else {
      template.theme = "green";
      applyTheme(green);
      greenCard.className = "white";
      indigoCard.className = "";
      brownCard.className = "";
    }
  };
 
  //run stuff on load
  checkZoomButtonsColor();
  checkTheme();

  //add event listeners
  defaultUI.addEventListener("core-localstorage-load", function () {
    checkDefaultUI();
  });
  
  showZoomButtons.addEventListener("core-localstorage-load", function () {
    if (showZoomButtons.value === true ||
      showZoomButtons.value === null ||
      localStorage.getItem("showZoomButtons") === null) {
      zoomButtonsCheckbox.checked = true;
      ZBDisplayOn();
    }
    else {
      zoomButtonsCheckbox.checked = false;
      ZBDisplayOff();
    }
  });
  
  separateRow.addEventListener("core-localstorage-load", function () {
    if (separateRow.value === true ||
      separateRow.value === null ||
      localStorage.getItem("separateRow") === null ||
      template.smallScreen === true) {
      separateRowCheckbox.checked = true;
      separateRowOn();
    }
    else {
      separateRowCheckbox.checked = false;
      separateRowOff();
    }
  });
  
  initZoomLS.addEventListener("core-localstorage-load", function () {
    if (template.initialZoom === null) {
      template.initialZoom = 10;
    }
    else if (template.initialZoom <= 20 && template.initialZoom >= 0) {
       //everything is ok
    }
    else {
      template.initialZoom = 10;
    }
    template.zoomLevel = template.initialZoom;
  });
  
  smallScreen.addEventListener("core-media-change", function () {
    if (template.smallScreen === true) {
      //grey out
      separateRowTile.style.color = "rgba(0, 0, 0, 0.26)";
      separateRowCheckbox.checked = true;
      separateRowOn();
      separateRowCheckbox.disabled = true;
    }
    else {
      //black in?
      separateRowTile.style.color = "rgba(0, 0, 0, 0.87)";
      separateRowCheckbox.disabled = false;
      if (localStorage.getItem("separateRow") === "false") {
        separateRowOff();
      }
    }
  });
  
  settingsMenu.addEventListener("change", function () {
    checkDefaultUI();
    
    if (zoomButtonsCheckbox.checked === true) {
      ZBDisplayOn();
    }
    else {
      ZBDisplayOff();
    }
    showZoomButtons.value = zoomButtonsCheckbox.checked;
    
    if (separateRowCheckbox.checked === true) {
      separateRowOn();
    }
    else {
      separateRowOff();
    }
    separateRow.value = separateRowCheckbox.checked;
  });
  
  themeMenuRipple.addEventListener("core-transitionend", function () {
    if (lightThemePicker !== null) {
      lightThemePicker.open();
    }
  });
  
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
  
  slider.addEventListener("core-change", function () {
    checkZoomButtonsColor();
  });
  
  zoomInButton.addEventListener("click", function () {
    slider.increment();
  });
  
  zoomOutButton.addEventListener("click", function () {
    slider.decrement();
  });
  
  initZoom.addEventListener("input", function () {
    initZoomDecor.isInvalid = !initZoom.validity.valid;
    if (initZoom.validity.valid) {
      zoomError.opened = false;
    }
    else {
      zoomError.opened = true;
    }
  });
  
  aboutIcon.addEventListener("click", function () {
    if (lightAboutDialog !== null) {
      lightAboutDialog.open();
    }
  });
});