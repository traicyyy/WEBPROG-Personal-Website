document.addEventListener('DOMContentLoaded', function() {
    // Create the navigation bar
    const navBar = document.createElement('nav');
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'space-between';
    navBar.style.padding = '10px';
    navBar.style.backgroundColor = '#fff';

    // Create the homepage tab on the left side
    const homeTab = document.createElement('div');
    homeTab.textContent = 'Traicyyy';
    homeTab.style.cursor = 'pointer';
    homeTab.style.fontWeight = 'bold';
    homeTab.classList.add('active-tab');
    navBar.appendChild(homeTab);

    // Create a container for the other tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabsContainer');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.gap = '15px';

    // List of other tab names
    const tabNames = ['About Me', 'Education & Achievements', 'IT Experience', 'Hobbies & Interests', 'Goals & Dreams', 'Photo Gallery', 'Resources'];

    // Create and append each tab to the container
    tabNames.forEach(name => {
        const tab = document.createElement('div');
        tab.textContent = name;
        tab.style.cursor = 'pointer';
        tab.classList.add('tab');
        tab.addEventListener('click', function() {
            document.querySelectorAll('nav div').forEach(div => div.classList.remove('active-tab'));
            tab.classList.add('active-tab');
        });
        tabsContainer.appendChild(tab);
    });

    // Append the tabs container to the navigation bar
    navBar.appendChild(tabsContainer);

    // Append the navigation bar to the body
    document.body.appendChild(navBar);
});
