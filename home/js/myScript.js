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
        const sentences = text.split('. '); // Split the text into sentences
        textElement.textContent = ''; // Clear the initial text

        let sentenceIndex = 0;
        let charIndex = 0;

        function showText() {
            if (sentenceIndex < sentences.length) {
                const sentence = sentences[sentenceIndex] + (sentenceIndex < sentences.length - 1 ? '.' : '');
                const span = document.createElement('span');

                if (charIndex < sentence.length) {
                    if (sentence.includes('Tracie Cañas Tomon') && sentence.indexOf('Tracie Cañas Tomon') <= charIndex) {
                        span.innerHTML = sentence.slice(0, charIndex + 1).replace('Tracie Cañas Tomon', '<strong>Tracie Cañas Tomon</strong>');
                    } else {
                        span.textContent = sentence.slice(0, charIndex + 1);
                    }

                    textElement.appendChild(span);
                    textElement.appendChild(document.createElement('br'));
                    charIndex++;
                    setTimeout(showText, 50); // Adjust the speed here (in milliseconds)
                } else {
                    charIndex = 0;
                    sentenceIndex++;
                    setTimeout(showText, 500); // Pause before showing the next sentence
                }
            }
        }

        showText();
    }
});
