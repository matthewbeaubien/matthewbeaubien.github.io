
var a = document.getElementById("project1");
var b = document.getElementById("project2");
var c = document.getElementById("project3");
var d = document.getElementById("project4");
var e = document.getElementById("project5");
var f = document.getElementById("project6");
var g = document.getElementById("project7");

function display1() {
  if (a.style.display === "block") {
    a.style.display = "none"; 
  } else {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,360);

  }

}

function display2() {
  if (b.style.display === "block") {
    b.style.display = "none";
  } else {
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,300);

  }

}

function display3() {
  if (c.style.display === "block") {
    c.style.display = "none";
  } else {
    c.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,240);

  }
}

function display4() {
  if (d.style.display === "block") {
    d.style.display = "none";
  } else {
    d.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,180);

  }
}

function display5() {
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,120);
  }
}

function display6() {
  if (f.style.display === "block") {
    f.style.display = "none";
  } else {
    f.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    g.style.display = "none";
    window.scrollTo(0,60);
  }
}
function display7() {
  if (g.style.display === "block") {
    g.style.display = "none";
  } else {
    g.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    window.scrollTo(0,0);
  }
}



function overAbout() {
  document.getElementById("about").style.display = "block";
}

function outAbout() {
  document.getElementById("about").style.display = "none";
}

function overName() {
  document.getElementById("card").style.display = "block";
}

function outName() {
  document.getElementById("card").style.display = "none";
}

