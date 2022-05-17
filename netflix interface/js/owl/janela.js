modal = document.getElementById("modalMenu");
btn = document.getElementById("btnModal");
span = document.getElementsByClassName("fecha")[0];
const body = document.querySelector("body");

btn.onclick = function() {
  modal.style.display = "block";

  modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

span.onclick = function() {
  modal.style.display = "none";

  modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {       
        body.style.overflow = "hidden";
    } else {       
        body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {        
        body.style.overflow = "hidden";
    } else {       
        body.style.overflow = "auto";
    }
  }
}

function sinopse() {
  var sinopse = document.getElementById("outResposta");
  if (sinopse.style.display === "block") {
    sinopse.style.display = "none";
  } else {
    sinopse.style.display = "block";
  }
}
