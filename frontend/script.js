var decrement = document.querySelectorAll(".decrement");
var increment = document.querySelectorAll(".increment");
var boxes = document.querySelectorAll(".box");
var deletebtn = document.querySelectorAll(".deletebtn");
var prix = document.getElementsByClassName("prix");
var nbr = document.querySelectorAll(".nbr");
var like = document.querySelectorAll(".fa-heart");
var Tpris = document.getElementById("Tprix");
var total;
//un appel de fonction pour donner le prix au début
updatetotale();
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    if (like[i].style.color === "red") {
      like[i].style.color = "rgba(128, 128, 128, 0.434)";
    } else {
      like[i].style.color = "red";
    }
  });
}
//supprimer item si l'utilisateur click sur le boutton x
for (let i = 0; i < deletebtn.length; i++) {
  deletebtn[i].addEventListener("click", function () {
    boxes[i].remove("box");
    updatetotale();
  });
}
//incremmenter le nombre d'article selectionner
for (let i = 0; i < increment.length; i++) {
  let firstprice = parseFloat(prix[i].textContent);
  increment[i].addEventListener("click", () => {
    nbr[i].textContent = parseFloat(nbr[i].textContent) + 1;
    let newPrice = firstprice * parseFloat(nbr[i].textContent);
    prix[i].textContent = newPrice.toFixed(2);
    updatetotale();
  });
}
//decremmenter le nombre d'article selectionner
for (let i = 0; i < decrement.length; i++) {
  let firstprice = parseFloat(prix[i].textContent);
  decrement[i].addEventListener("click", () => {
    if (nbr[i].textContent > 1) {
      nbr[i].textContent = parseFloat(nbr[i].textContent) - 1;
      let newPrice = firstprice * parseFloat(nbr[i].textContent);
      prix[i].textContent = newPrice.toFixed(2);
    }
    updatetotale();
  });
}
//calculer le prix total
function updatetotale() {
  total = 0;
  for (let i = 0; i < prix.length; i++) {
    total += parseFloat(prix[i].textContent);
  }
  Tpris.textContent = total.toFixed(2);
}
