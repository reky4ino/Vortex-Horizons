document.addEventListener('DOMContentLoaded', () => {
    console.log("VORTEX Systems: Online");

    // 1. ЛОГИКА ФОРМЫ БРОНИРОВАНИЯ (на странице booking.html)
    const mainForm = document.getElementById('mainOrderForm');
    if(mainForm) {
        mainForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = mainForm.querySelector('.btn-submit-large');
            const originalText = btn.innerText;
            
            // Имитация отправки
            btn.innerText = "ПЕРЕДАЧА ДАННЫХ В ЦУП...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Данные успешно переданы в центр управления полетами! Ожидайте подтверждения на Email.");
                btn.innerText = originalText;
                btn.disabled = false;
                mainForm.reset();
            }, 2000);
        });
    }

    // 2. АНИМАЦИЯ КАРТОЧЕК И ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
    const fadeElements = document.querySelectorAll('.dest-card, .adv-item, .stat-box, .glass, .info-card, .wide-card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = '0.8s ease-out';
        observer.observe(el);
    });

    // 3. ПЛАВНЫЙ СКРОЛЛ ДЛЯ ССЫЛОК (якоря)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

const contactForm = document.getElementById('mainOrderForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = contactForm.querySelector('.btn-submit-large');
        const originalText = btn.innerText;
        
        // Визуальный фидбек
        btn.innerText = "ШИФРОВАНИЕ ДАННЫХ...";
        btn.disabled = true;
        btn.style.opacity = "0.7";

        const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("СИГНАЛ ПРИНЯТ!\nВа
