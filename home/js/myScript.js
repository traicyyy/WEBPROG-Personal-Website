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

    let delay = 0;

    text.split(/(<[^>]+>|[\s\S])/g).forEach((char) => {
        if (char.match(/<[^>]+>/)) {
            // If it's an HTML tag, append it directly without animation
            container.innerHTML += char;
        } else {
            // Otherwise, create a span for each character
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = char;
            }
            span.style.animationDelay = `${delay * 0.05}s`;
            span.classList.add('letter');
            container.appendChild(span);
            delay++;
        }
    });
});
