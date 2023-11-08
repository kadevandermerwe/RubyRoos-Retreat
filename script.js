window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("Hero").style.padding = "100px 0px 0px 0px";
  } else {
    document.getElementById("nav").style.position = "relative";
    document.getElementById("Hero").style.padding = "0px 0px 0px 0px";

  }
}