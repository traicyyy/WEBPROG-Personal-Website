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
    const clickedTab = document.querySelector(`button[onclick="showContent('${tabId}')"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

// Initialize the default tab (e.g., "home")
window.onload = function() {
    showContent('home');
};

function goToFacebook() {
    window.location.href = 'https://www.facebook.com/profile.php?id=100078488841590';
}