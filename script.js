let income = 1;

function OnClick() {
    let x = document.getElementById('general');

    x.innerText = (parseInt(x.innerText) + income).toString();
}