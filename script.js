

function increment() {

    document.getElementById('demoInput').stepUp();
}
function decrement() {
    document.getElementById('demoInput').stepDown();
}

// ===================================Dropdown================
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


// =====================================addtocart ==============

function addtocart() {
    document.getElementById("img3").src = "images/icon-badge.png"; 
}