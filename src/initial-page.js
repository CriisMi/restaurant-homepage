import Img from './diana-polekhina-i5BY6W2ttts-unsplash.jpg';

export function initialPage() {

    const main = document.querySelector('.main');
    main.setAttribute('class', 'main');    

    const container = document.createElement('div');
    container.setAttribute('class', 'container')
    main.appendChild(container);

    const img = document.createElement('img');
    img.setAttribute('class', 'home-img');
    img.src = Img;
    container.appendChild(img);

    const title = document.createElement('div');
    title.textContent = "Senneville";
    title.setAttribute('class', 'main-title');
    container.appendChild(title);



    const info = document.createElement('div');
    info.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    info.setAttribute('class', 'info');
    container.appendChild(info);

    content.appendChild(main);
    
};