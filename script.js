function hideElement() {
    var x = document.getElementById("mobMenu");
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }