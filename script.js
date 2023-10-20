function biggerCorgi(x) {
  x.style.height = "70px";
  x.style.width = "70px";
}

function normalCorgi(x) {
  x.style.height = "45px";
  x.style.width = "45px";
}

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}

function noGreeting(){
    document.getElementById("demo").innerHTML = ""
}