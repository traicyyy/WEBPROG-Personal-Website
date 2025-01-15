function showContent(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', function() {
    showContent('home');
});

function goToFacebook() {
    window.location.href = 'https://www.facebook.com/profile.php?id=100078488841590';
}

function showInfo(info) {
    const infoBox = document.getElementById('info');
    infoBox.innerHTML = `<p>${info}</p><button onclick="hideInfo()">Close</button>`;
    infoBox.style.display = 'block';
}

function hideInfo() {
    const infoBox = document.getElementById('info');
    infoBox.style.display = 'none';
}


