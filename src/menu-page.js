export function menuPage() {
    const content = document.querySelector('div');

    const nav = document.createElement('ul');
    nav.setAttribute('class', 'navbar');

    const home = document.createElement('li');
    home.textContent = 'Home';
    nav.appendChild(home);

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    nav.appendChild(contact);

    content.appendChild(nav);


    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const title = document.createElement('div');
    title.textContent = "Menu";
    title.setAttribute('class', 'title');
    main.appendChild(title);

    const info = document.createElement('div');
    info.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    info.setAttribute('class', 'info');
    main.appendChild(info);

    content.appendChild(main);
    
};