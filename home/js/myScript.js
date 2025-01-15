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

document.getElementById('luffy').addEventListener('click', function() {
    showInfo('About Me: Hi! I am passionate about technology and love exploring new innovations. I enjoy coding and learning about different aspects of IT. My journey in tech has been exciting and full of challenges.');
});

document.getElementById('gojo').addEventListener('click', function() {
    showInfo('IT Experience: I have worked on various projects, ranging from web development to data analysis. My expertise includes programming in languages like JavaScript, Python, and PHP, as well as using frameworks and tools such as React, Django, and Docker.');
});

document.getElementById('sungjinwoo').addEventListener('click', function() {
    showInfo('Hobbies and Interests: In my free time, I enjoy reading, hiking, and playing video games. I am also a fan of anime and manga, which inspire my creativity and provide a fun escape from everyday life.');
});

document.getElementById('conan').addEventListener('click', function() {
    showInfo('Goals and Dreams: My dream is to become a successful software engineer and contribute to meaningful projects that make a difference. I aim to continually learn and grow in the tech industry while pursuing my passion for innovation.');
});

function showInfo(text) {
    var infoBox = document.getElementById('info');
    infoBox.style.display = 'block';
    infoBox.innerHTML = text;
    infoBox.style.position = 'fixed';
    infoBox.style.top = '0';
    infoBox.style.left = '250px'; // Adjust based on your sidebar width
    infoBox.style.width = 'calc(100% - 250px)'; // Adjust based on your sidebar width
    infoBox.style.height = '100%';
    infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    infoBox.style.zIndex = '1000';
    infoBox.style.padding = '20px';
    infoBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    infoBox.style.overflow = 'auto';

    infoBox.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

// Hide the info box when clicking outside of it
document.addEventListener('click', function(event) {
    var infoBox = document.getElementById('info');
    if (infoBox.style.display === 'block' && !infoBox.contains(event.target)) {
        infoBox.style.display = 'none';
    }
});
