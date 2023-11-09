window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("Hero").style.padding = "75px 0px 0px 0px";
  } else {
    document.getElementById("nav").style.position = "relative";
    document.getElementById("Hero").style.padding = "0px 0px 0px 0px";

  }

  if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
    document.getElementById("nav").style.boxShadow = "0px 2px 2px rgba(0,0,0,0.2)";
  } else {
    document.getElementById("nav").style.boxShadow = "none";

  }
}