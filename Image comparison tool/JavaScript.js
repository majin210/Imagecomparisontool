window.onload = function() {
  var slider = document.querySelector(".img-comp-slider");
  var imgOverlay = document.querySelector(".img-comp-overlay");
  var container = document.querySelector(".img-comp-container");

  slider.addEventListener("mousedown", startDragging);

  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("mousemove", drag);

  function startDragging(e) {
    e.preventDefault();
    slider.classList.add("dragging");
  }

  function drag(e) {
    if (!slider.classList.contains("dragging")) {
      return;
    }
    var rect = container.getBoundingClientRect();
    var xPos = e.pageX - rect.left;
    if (xPos < 0) xPos = 0;
    if (xPos > rect.width) xPos = rect.width;
    imgOverlay.style.width = xPos + "px";
    slider.style.left = xPos - (slider.offsetWidth / 2) + "px";
  }

  function stopDragging() {
    slider.classList.remove("dragging");
  }
};
