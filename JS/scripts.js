function changeSlide() {
    const selectedRadio = document.querySelector('#slider input[type="radio"]:checked');
    let currentSlide = parseInt(selectedRadio.id.replace('s', ''), 10);
    selectedRadio.checked = false;
    currentSlide = currentSlide % 6 + 1;
    document.getElementById(`s${currentSlide}`).checked = true;
}

setInterval(changeSlide, 3000);
