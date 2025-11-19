const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle y close other
        faqQuestions.forEach(other => {
            const item = other.parentElement;
            const icon = other.querySelector('img');
            if (other !== question) {
                item.classList.remove('active');
                other.classList.remove('active');
                other.setAttribute('aria-expanded', 'false');
                // Change to plus
                if (icon) { icon.src = 'assets/images/icon-plus.svg'; }
            }
        });
        // Toggle actual
        const thisItem = question.parentElement;
        const thisIcon = question.querySelector('img');
        const isExpanded = question.classList.toggle('active');
        thisItem.classList.toggle('active');
        question.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        // Change icon
        if (thisIcon) thisIcon.src = isExpanded ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
    });
    question.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            question.click();
        }
    });
});