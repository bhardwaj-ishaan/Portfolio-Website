let nameClick = document.getElementById('click');


function onNameClick() {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#ff9f00';
    body.style.color = 'black';
    body.style.fontFamily = 'Times New Roman';
}

function onNameRelease() {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#04243d';
    body.style.color = 'white';
    body.style.fontFamily = 'Quicksand';
}

nameClick.addEventListener('mousedown', onNameClick);
nameClick.addEventListener('mouseup', onNameRelease);