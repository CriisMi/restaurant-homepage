export function navBar() {
    const content = document.querySelector('div');

    const nav = document.createElement('ul');
    nav.setAttribute('class', 'navbar');

    const home = document.createElement('li');
    home.textContent = 'Home';
    home.setAttribute('class', 'home');
    nav.appendChild(home);

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.setAttribute('class', 'menu');
    nav.appendChild(menu);

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.setAttribute('class', 'contact');
    nav.appendChild(contact);

    content.appendChild(nav);


    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    content.appendChild(main);
};