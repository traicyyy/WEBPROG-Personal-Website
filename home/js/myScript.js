document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.navbar a');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(targetId).classList.add('active');
        });
    });

    // Show the home tab by default
    document.getElementById('home').classList.add('active');
});
