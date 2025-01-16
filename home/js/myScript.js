function showContent(event, sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';

    // Remove the active class from all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Add the active class to the clicked tab
    var clickedTab = event.target;
    if (clickedTab.tagName === 'I') {
        clickedTab = clickedTab.parentElement; // Get parent button element if icon is clicked
    }
    clickedTab.classList.add('active');
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', function() {
    showContent(null, 'home'); // Trigger home section by default without an event
});

function goToFacebook() {
    window.location.href = 'https://www.facebook.com/profile.php?id=100078488841590';
}
