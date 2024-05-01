const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "30vh",
  duration: 1,
  delay: 1,
});

tl.to("#page1", {
  y: "0vh",
  rotate: -360,
  scale: 1,
  duration: 0.6,
});

/* JQURY LIBRARY */

/*CARD3 EFFECT*/

$(document).ready(function () {
  $(".card3").hover(function () {
    $(".card4").css({ left: "78%" });
  });
});

$(document).ready(function () {
  $(".card3").mouseleave(function () {
    $(".card4").css({ left: "58%" });
  });
});

/*CARD2 EFFECT*/

$(document).ready(function () {
  $(".card2").hover(function () {
    $(".card3").css({ left: "58%" });
    $(".card4").css({ left: "78%" });
  });
});

$(document).ready(function () {
  $(".card2").mouseleave(function () {
    $(".card3").css({ left: "39%" });
    $(".card4").css({ left: "58%" });
  });
});

/*CARD1 EFFECT*/

$(document).ready(function () {
  $(".card1").hover(function () {
    $(".card2").css({ left: "38%" });
    $(".card3").css({ left: "58%" });
    $(".card4").css({ left: "78%" });
  });
});

$(document).ready(function () {
  $(".card1").mouseleave(function () {
    $(".card2").css({ left: "19%" });
    $(".card3").css({ left: "39%" });
    $(".card4").css({ left: "58%" });
  });
});
