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
    showInfo('About Me: I am Tracie Cañas Tomon. Currently in my second year of pursuing a Bachelor of Science in Information Technology, with a specialization in Mobile and Internet Technology. People call me Trace, Tres or Trai. Some of my relatives call me Budang, like the Buddha, because I looked like the Buddha when I was born. Any shade of blue is my fave color. I like keeping things neat and tidy. Depending on my mood, I can be a bit of an introvert or an extrovert. I am committed to becoming a skilled IT professional, driven by my passion for technology and continuous learning.');
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
}
