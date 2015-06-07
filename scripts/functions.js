document.addEventListener("vars-set", function () {
  checkDefaultUI = function () {
    if (template.defaultUI) {
      map.disableDefaultUI = false;
    }
    else {
      map.disableDefaultUI = true;
    }
  };

  ZBDisplayOn = function () {
    zoomInButton.style.display = "initial";
    zoomOutButton.style.display = "initial";
  };

  ZBDisplayOff = function () {
    zoomInButton.style.display = "none";
    zoomOutButton.style.display = "none";
  };

  separateRowOn = function () {
    mainToolbar.classList.add("medium-tall");
    count = 0;
    while (count < canMiddle.length) {
      canMiddle[count].classList.add("middle");
      count++;
    }
  };

  separateRowOff = function () {
    var count = 0;
    while (count < canMiddle.length) {
      canMiddle[count].classList.remove("middle");
      count++;
    }
    mainToolbar.classList.remove("medium-tall");
  };

  checkZoomButtonsColor = function () {
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

  applyTheme = function (color) {
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

  checkTheme = function () {
    if (template.theme === "indigo") {
      applyTheme(indigo);
      themeGreenCard.className = "";
      themeIndigoCard.className = "white";
      themeBrownCard.className = "";
    }
    else if (template.theme === "brown") {
      applyTheme(brown);
      themeGreenCard.className = "";
      themeIndigoCard.className = "";
      themeBrownCard.className = "white";
    }
    else {
      template.theme = "green";
      applyTheme(green);
      themeGreenCard.className = "white";
      themeIndigoCard.className = "";
      themeBrownCard.className = "";
    }
  };

  map.fire("functions-set");
});