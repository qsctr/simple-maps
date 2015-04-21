document.addEventListener("template-bound", function(){
  //set up variables and functions
  var template = document.querySelector("#template");
  var map = document.querySelector("#map");
  var slider = document.querySelector("#zoom-slider");
  var zoomInButton = document.querySelector("#zoom-in");
  var zoomOutButton = document.querySelector("#zoom-out");
  var initZoom = document.querySelector("#initial-zoom");
  var zoomError = document.querySelector("#init-zoom-error");
  var checkDefaultUI = function(){
    if(template.defaultUI){
      map.disableDefaultUI = false;
    }
    else{
      map.disableDefaultUI = true;
    }
  };
  var ZBDisplayOn = function(){
    zoomInButton.style.display = "initial";
    zoomOutButton.style.display = "initial";
  };
  var ZBDisplayOff = function(){
    zoomInButton.style.display = "none";
    zoomOutButton.style.display = "none";
  };
  var checkZoomButtonsColor = function(){
    if(template.zoomLevel === 20){
      zoomInButton.style.color = "rgba(0, 0, 0, 0.26)";
    }
    else{
      zoomInButton.style.color = "white";
    }
    if(template.zoomLevel === 0){
      zoomOutButton.style.color = "rgba(0, 0, 0, 0.26)";
    }
    else{
      zoomOutButton.style.color = "white";
    }
  };

  //run stuff on load
  checkZoomButtonsColor();

  //add event listeners
  document.querySelector("#defaultUI").addEventListener("core-localstorage-load", function(){
    checkDefaultUI();
  });
  document.querySelector("#showZoomButtons").addEventListener("core-localstorage-load", function(){
    if(document.querySelector("#showZoomButtons").value === true || 
      document.querySelector("#showZoomButtons").value === null ||
      localStorage.getItem("showZoomButtons") === null){
      document.querySelector("#zoom-buttons-checkbox").checked = true;
      ZBDisplayOn();
    }
    else{
      document.querySelector("#zoom-buttons-checkbox").checked = false;
      ZBDisplayOff();
    }
  });
  document.querySelector("#initialZoom").addEventListener("core-localstorage-load", function(){
    if(template.initialZoom === null){
      template.initialZoom = 10;
      console.log("zoom is null");
      console.log("zoom is " + template.initialZoom);
    }
    else if(template.initialZoom <= 20 && template.initialZoom >= 0){
      console.log(template.initialZoom);
      console.log(template.initialZoom !== null);
      console.log(template.initialZoom <= 20);
      console.log(template.initialZoom >= 0);
      console.log("zoom valid");
    }
    else{
      template.initialZoom = 10;
      console.log("zoom invalid");
      console.log("zoom is " + template.initalZoom);
    }
    template.zoomLevel = template.initialZoom;
    console.log("zoom is now " + template.zoomLevel);
  });
  document.querySelector("#settings-menu").addEventListener("change", function(){
    checkDefaultUI();
    if(document.querySelector("#zoom-buttons-checkbox").checked === true){
      ZBDisplayOn();
    }
    else{
      ZBDisplayOff();
    }
    document.querySelector("#showZoomButtons").value = 
    document.querySelector("#zoom-buttons-checkbox").checked;
  });
  slider.addEventListener("core-change", function(){
    checkZoomButtonsColor();
  });
  zoomInButton.addEventListener("click", function(){
    slider.increment();
  });
  zoomOutButton.addEventListener("click", function(){
    slider.decrement();
  });
  initZoom.addEventListener("input", function(){
    document.querySelector("#init-zoom-decor").isInvalid = !initZoom.validity.valid;
    if(initZoom.validity.valid){
      zoomError.opened = false;
    }
    else{
      zoomError.opened = true;
    }
  });
  document.querySelector("#about-icon").addEventListener("click", function(){
    if(document.querySelector("#about-dialog") !== null){
      document.querySelector("#about-dialog").open();
    }
  });

  //for testing
  document.querySelector("#ls-clear").addEventListener("click", function(){
    localStorage.clear();
  });
});