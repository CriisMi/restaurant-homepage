import Img1 from './taylor-heery-8uK5DTVQ7As-unsplash.jpg';
import Img2 from './massimo-adami-qjAoZNfqLtk-unsplash.jpg';
import Img3 from './diana-polekhina-qsTJXB6zTLg-unsplash.jpg';


export function menuPage() {
    const main = document.querySelector('.main');

    const title = document.createElement('div');
    title.textContent = "Macarons";
    title.setAttribute('class', 'title');
    main.appendChild(title);

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');
    main.appendChild(menu);


    const makeItem = (imgUrl, description) => {
        const item = document.createElement('div');
        item.setAttribute('class', 'menu-item')
        const img = document.createElement('img');
        img.setAttribute('class', 'menu-img');
        img.src = imgUrl;
        item.appendChild(img);

        const descr = document.createElement('div');
        descr.setAttribute('class', 'item-descr')
        item.appendChild(descr);

        const name = document.createElement('div');
        name.setAttribute('class', 'item-name');
        name.textContent = description[0];
        descr.appendChild(name);

        const info = document.createElement('div');
        info.setAttribute('class', 'item-info');
        info.textContent = description[1];
        descr.appendChild(info);

        menu.appendChild(item);
    }
    
    
    const description1 = ['Best Seller', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum lectus sed dui imperdiet rhoncus. Phasellus id elit lobortis, malesuada orci ut, auctor ante. Sed ultrices scelerisque nisl, sit amet fringilla magna.'];
    makeItem(Img1, description1);

    const description2 = ['Chef Choice', 'Proin et enim libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ultrices luctus mauris. Sed eget ipsum orci.'];
    makeItem(Img2, description2);

    const description3 = ['Gift Pack', 'In nunc massa, iaculis id volutpat et, pulvinar gravida velit. Duis at libero lacus. Suspendisse ac lacus sem. Ut mollis, ante in ultricies gravida, tortor diam commodo ligula, vel ultricies nunc mauris sed neque.'];
    makeItem(Img3, description3);
}