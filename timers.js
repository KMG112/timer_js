var timer = 0
function animate(){
  timer++
  document.getElementById("watch").innerHTML = timer
}

function startTimer(){
  setInterval(animate(), 1000);

}


document.getElementById("start").addEventListener("click", startTimer)
