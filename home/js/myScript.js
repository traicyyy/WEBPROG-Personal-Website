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
    const text = document.getElementById('animated-text').innerHTML;
    const container = document.getElementById('animated-text');
    container.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        if (char === '.') {
            container.appendChild(document.createElement('br'));
        }
        span.innerHTML = char;
        span.style.animationDelay = `${index * 0.1}s`;
        span.classList.add('letter');
        container.appendChild(span);
    });
});
