document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active classes from tabs and contents
            tabs.forEach(t => t.classList.remove('active-tab'));
            contents.forEach(c => c.classList.remove('active-content'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active-tab');
            const targetContent = document.getElementById(tab.getAttribute('data-tab'));
            if (targetContent) {
                targetContent.classList.add('active-content');
            }
        });
    });
});
