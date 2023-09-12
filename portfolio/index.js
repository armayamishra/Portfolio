var myskills = document.getElementsByClassName("myskills");
var portcontents = document.getElementsByClassName("portcontents");
function opentab(tabname){
  for(myskill of myskills){
    myskill.classList.remove("active-link");
  }
  for(portcontent of portcontents){
    portcontent.classList.remove("active-content");
  }
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-content");
}
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
  });
ScrollReveal().reveal('.port-header, .portheading', {origin: 'top'});
ScrollReveal().reveal('.port-header h1, .portcolumn', {origin: 'left'});