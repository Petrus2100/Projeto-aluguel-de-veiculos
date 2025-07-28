const slides = document.querySelectorAll('.slider');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('on');
        if (i === index) {
            slide.classList.add('on');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

const buttons = document.querySelectorAll('.btn');
const conteudoCompleto = document.getElementById('conteudo-completo');
const carrossel = document.getElementById('pagina');
const tabContents = document.querySelectorAll('.tab-content .content');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const contentId = button.getAttribute('data-content-id');
        const contentToShow = document.getElementById(contentId);

        conteudoCompleto.classList.add('hidden');
        carrossel.classList.add('hidden');


        tabContents.forEach(content => content.classList.remove('show'));

        if (contentToShow) {
            contentToShow.classList.add('show');

            if (!contentToShow.querySelector('.back-btn')) {
                const backBtn = document.createElement('a');
                backBtn.textContent = 'Voltar';
                backBtn.classList.add('back-btn');
                backBtn.href = '#menu';

                backBtn.addEventListener('click', () => {
                    contentToShow.classList.remove('show');
                    conteudoCompleto.classList.remove('hidden');
                    carrossel.classList.remove('hidden');

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });

                contentToShow.appendChild(backBtn);
            }

            contentToShow.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


