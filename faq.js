const vragen = document.querySelectorAll('.vraag');

vragen.forEach(vraag => {
    vraag.addEventListener('click', () => {
        vraag.classList.toggle("active")
        const antwoord = vraag.nextElementSibling;
        antwoord.style.display = antwoord.style.display === 'block' ? 'none' : 'block';
    });
});