document.addEventListener("template-bound", function () {
  
  //set up variables and functions
  var template = document.querySelector("#template");
  var map = document.querySelector("#map");
  var mainToolbar = document.querySelector("#main-toolbar");
  var allToolbars = document.querySelectorAll("core-toolbar");
  var slider = document.querySelector("#zoom-slider");
  var zoomInButton = document.querySelector("#zoom-in");
  var zoomOutButton = document.querySelector("#zoom-out");
  var canMiddle = document.querySelectorAll(".can-middle");
  var allSubheaders = document.querySelectorAll(".subheader");
  var separateRowTile = document.querySelector("#separate-row-tile");
  var separateRowCheckbox = document.querySelector("#separate-row-checkbox");
  var initZoom = document.querySelector("#initial-zoom");
  var zoomError = document.querySelector("#init-zoom-error");
  var deepThemePicker = document.querySelector("html /deep/ #theme-picker");
  var green = "#4CAF50";
  var indigo = "#3F51B5";
  var brown = "#795548";
  var greenCard = document.querySelector("html /deep/ #green-card");
  var indigoCard = document.querySelector("html /deep/ #indigo-card");
  var brownCard = document.querySelector("html /deep/ #brown-card");
  var separateRow = document.querySelector("#separateRow");
  var showZoomButtons = document.querySelector("#showZoomButtons");
  
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
  document.querySelector("#defaultUI").addEventListener("core-localstorage-load", function () {
    checkDefaultUI();
  });
  
  document.querySelector("#showZoomButtons").addEventListener("core-localstorage-load", function () {
    if (document.querySelector("#showZoomButtons").value === true ||
      document.querySelector("#showZoomButtons").value === null ||
      localStorage.getItem("showZoomButtons") === null) {
      document.querySelector("#zoom-buttons-checkbox").checked = true;
      ZBDisplayOn();
    }
    else {
      document.querySelector("#zoom-buttons-checkbox").checked = false;
      ZBDisplayOff();
    }
  });
  
  document.querySelector("#separateRow").addEventListener("core-localstorage-load", function () {
    if (document.querySelector("#separateRow").value === true ||
      document.querySelector("#separateRow").value === null ||
      localStorage.getItem("separateRow") === null ||
      template.smallScreen === true) {
      document.querySelector("#separate-row-checkbox").checked = true;
      separateRowOn();
    }
    else {
      document.querySelector("#separate-row-checkbox").checked = false;
      separateRowOff();
    }
  });
  
  document.querySelector("#initialZoom").addEventListener("core-localstorage-load", function () {
    if (template.initialZoom === null) {
      template.initialZoom = 10;
    }
    else if (template.initialZoom <= 20 && template.initialZoom >= 0) {
       //this is a comment
    }
    else {
      template.initialZoom = 10;
    }
    template.zoomLevel = template.initialZoom;
  });
  
  document.querySelector("#smallScreen").addEventListener("core-media-change", function () {
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
  
  document.querySelector("#settings-menu").addEventListener("change", function () {
    checkDefaultUI();
    
    if (document.querySelector("#zoom-buttons-checkbox").checked === true) {
      ZBDisplayOn();
    }
    else {
      ZBDisplayOff();
    }
    showZoomButtons.value = document.querySelector("#zoom-buttons-checkbox").checked;
    
    if (document.querySelector("#separate-row-checkbox").checked === true) {
      separateRowOn();
    }
    else {
      separateRowOff();
    }
    separateRow.value = document.querySelector("#separate-row-checkbox").checked;
  });
  
  document.querySelector("#theme-menu-ripple").addEventListener("core-transitionend", function () {
    if (document.querySelector("#theme-picker") !== null) {
      document.querySelector("#theme-picker").open();
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
    document.querySelector("#init-zoom-decor").isInvalid = !initZoom.validity.valid;
    if (initZoom.validity.valid) {
      zoomError.opened = false;
    }
    else {
      zoomError.opened = true;
    }
  });
  
  document.querySelector("#about-icon").addEventListener("click", function () {
    if (document.querySelector("#about-dialog") !== null) {
      document.querySelector("#about-dialog").open();
    }
  });
});