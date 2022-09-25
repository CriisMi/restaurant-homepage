export function contactPage() {
    const main = document.querySelector('.main');
    main.setAttribute('class', 'main');

    const title = document.createElement('div');
    title.textContent = "Contact";
    title.setAttribute('class', 'title');
    main.appendChild(title);


    const contact = document.createElement('div');
    contact.setAttribute('class', 'contact');
    main.appendChild(contact);

    const adress1 = document.createElement('div');
    adress1.textContent = "Adress";
    adress1.setAttribute('class', 'cont1');
    contact.appendChild(adress1);

    const adress2 = document.createElement('div');
    adress2.textContent = "23 Boulevard du Montparnasse, Paris, 75006, France";
    adress2.setAttribute('class', 'cont2');
    contact.appendChild(adress2);

    const phone1 = document.createElement('div');
    phone1.textContent = "Phone";
    phone1.setAttribute('class', 'cont1');
    contact.appendChild(phone1);

    const phone2 = document.createElement('div');
    phone2.textContent = "01 42 22 65 65";
    phone2.setAttribute('class', 'cont2');
    contact.appendChild(phone2);
};