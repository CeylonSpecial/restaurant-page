import Img from './tea-cup.jpg';

function homeTab(content) {
    const title = document.createElement('h1');
    title.textContent = "Tiffany's Tea House";

    const img = new Image();
    img.src = Img;

    const copy = document.createElement('p');
    copy.classList.add('info');
    copy.textContent = `The most authentic British Tea experience on this side of the pond! 
    We offer a wide selection of premium teas, ethically sourced from 
    around the world. Join us in our lovely tea room for traditional 
    Afternoon Tea every day from 12 - 5pm.`
    
    const hours = document.createElement('div');
    hours.classList.add('info');
    hours.textContent = `Hours
    Monday - Sunday: 12pm - 5pm`

    const location = document.createElement('div');
    location.classList.add('footer');
    location.textContent = `Location
    123 Royal Avenue, Alexandria, VA 22206
    `
    
    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(copy);
    content.appendChild(hours);
    content.appendChild(location);
}

export { homeTab }