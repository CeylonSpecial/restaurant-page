import Img from './tea-cup.jpg';

function homeTab(content) {
    const homeContent = document.createElement('div');
    const title = document.createElement('h1');
    const img = new Image();
    const copy = document.createElement('p');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    homeContent.classList.add('tab-style');
  
    title.textContent = "Tiffany's Tea House";

    img.src = Img;
    
    copy.classList.add('info');
    copy.textContent = `The most authentic British Tea experience on this side of the pond! 
    We offer a wide selection of premium teas, ethically sourced from 
    around the world. Join us in our lovely tea room for traditional 
    Afternoon Tea every day from 12 - 5pm.`
    
    hours.classList.add('info');
    hours.textContent = `Hours
    Monday - Sunday: 12pm - 5pm`
    
    location.classList.add('footer');
    location.textContent = `Location
    123 Royal Avenue, Alexandria, VA 22206
    `

    homeContent.appendChild(title);
    homeContent.appendChild(img);
    homeContent.appendChild(copy);
    homeContent.appendChild(hours);
    homeContent.appendChild(location);
    content.appendChild(homeContent);
}

export { homeTab }