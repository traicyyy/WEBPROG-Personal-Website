document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content');

    // Function to set the active tab
    const setActiveTab = (id) => {
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        const activeTab = document.querySelector(`.tab[data-tab="${id}"]`);
        if (activeTab) {
            activeTab.classList.add('active-tab');
        }
    };

    // Scroll to the section when a tab is clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetId = tab.getAttribute('data-tab');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Observe sections for visibility
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach(section => observer.observe(section));

    // Letter by letter animation
    const text = document.getElementById('about-text').innerHTML;
    const container = document.getElementById('about-text');
    container.innerHTML = '';

    text.split(/(?=\s)|(?<=\s)/g).forEach((char, index) => {
        const span = document.createElement('span');
        if (char === '.' || char === ' ') {
            span.innerHTML = char;
        } else {
            span.textContent = char;
        }
        span.style.animationDelay = `${index * 0.05}s`;
        span.classList.add('letter');
        container.appendChild(span);
    });
});
