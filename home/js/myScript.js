// Function to show the selected content and hide others
function showContent(tabId) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove the 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected content section
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Add the 'active' class to the clicked tab
    const clickedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

// Initialize the default tab
window.onload = function () {
    const defaultTab = document.querySelector('.tab[data-default="true"]');
    if (defaultTab) {
        const defaultTabId = defaultTab.getAttribute('data-tab');
        showContent(defaultTabId);
    }
};

// Attach event listeners to tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        showContent(tabId);
    });
});

// Function to navigate to Facebook
function goToFacebook() {
    try {
        window.location.href = 'https://www.facebook.com/profile.php?id=100078488841590';
    } catch (error) {
        console.error('Failed to navigate to Facebook:', error);
    }
}

// Function to display flashcard content
function showInfo(content) {
    const infoBox = document.getElementById('info');
    if (infoBox) {
        infoBox.innerHTML = `
            <div class="info-content">${content}</div>
            <button onclick="hideInfo()">Close</button>
        `;
        infoBox.style.display = 'block';
    }
}

// Function to hide the info box
function hideInfo() {
    const infoBox = document.getElementById('info');
    if (infoBox) {
        infoBox.style.display = 'none';
    }
}

// Attach event listeners to flashcards
document.querySelectorAll('.flashcard').forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        const content = flashcard.getAttribute('data-content');
        showInfo(content);
    });
});
