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

    // Letter by letter animation for the home welcome message
    const textElement = document.getElementById('welcome');
    if (textElement) {
        const text = "Kon'nichiwa! I'm Tracie Cañas Tomon. Discover more about me by visiting my personal profile webpage. Enjoy your stay!";
        let index = 0;

        function showText() {
            if (index < text.length) {
                const span = document.createElement('span');
                span.textContent = text[index];
                textElement.appendChild(span);

                if (text[index] === '\n') {
                    textElement.appendChild(document.createElement('br'));
                }

                index++;
                setTimeout(showText, 50); // Adjust the speed here (in milliseconds)
            }
        }

        showText();
    }
});
