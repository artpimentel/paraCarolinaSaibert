document.addEventListener("DOMContentLoaded", function () {
    function changeSlide(sliderId) {
        const slider = document.getElementById(sliderId);
        const selectedRadio = slider.querySelector('input[type="radio"]:checked');
        
        if (!selectedRadio) return;
        
        let currentSlide = parseInt(selectedRadio.id.match(/\d+/g)[0], 10);
        let sliderNumber = sliderId.replace('slider', '');
    
        selectedRadio.checked = false;
        currentSlide = currentSlide % 6 + 1;
        
        document.getElementById(`s${currentSlide}-${sliderNumber}`).checked = true;
    }
    
    document.querySelectorAll('.slider').forEach(slider => {
        const sliderId = slider.id;
        setInterval(() => changeSlide(sliderId), 3000);
    });

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));






// Seleciona todas as seções que precisam ser observadas
let sections = document.querySelectorAll('section');

// Cria um IntersectionObserver para cada seção
let observerBtn = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Busca o botão correspondente dentro da section visível
        let button = entry.target.querySelector('.dBtn');

        if (button) { // Garante que a seção possui um botão associado
            if (entry.isIntersecting) {
                button.classList.add('active'); // Ativa o botão da seção visível
            } else {
                button.classList.remove('active'); // Remove a ativação quando sai da tela
            }
        }
    });
}, {
    threshold: 0.5  // Define quando a seção está visível (50%)
});

// Observa todas as seções que possuem um botão dentro
sections.forEach(section => observerBtn.observe(section));

});