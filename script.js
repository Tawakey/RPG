<<<<<<< Updated upstream
let income = 1;

function OnClick() {
    let x = document.getElementById('general');

    x.innerText = (parseInt(x.innerText) + income).toString();
=======
function OnClick() {
    var x = document.getElementById("myList").textContent;
    x = int(x) + 1;
>>>>>>> Stashed changes
}