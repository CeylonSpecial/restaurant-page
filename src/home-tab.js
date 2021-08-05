import Img from './tea-cup.jpg';

function homeTab(content) {
    const homeContent = document.createElement('div');
    const title = document.createElement('h1');
    const img = new Image();
    const copy = document.createElement('p');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    homeContent.classList.add('tab-style');
    
    title.classList.add('headings');
    title.textContent = "Tiffany's Tea House";

    img.src = Img;
    
    copy.classList.add('info');
    copy.textContent = `We offer a wide selection of premium teas, ethically sourced from around the world.
    Join us in our lovely tea room for traditional Afternoon Tea every day and for Elevenses 
    every Saturday and Sunday.`
    
    hours.classList.add('info');
    hours.textContent = `Hours:
    Monday - Friday: 12pm - 5pm
    Saturday & Sunday: 10am - 5pm`
    
    location.classList.add('footer');
    location.textContent = `123 Royal Avenue, Alexandria, VA 22206`

    homeContent.appendChild(title);
    homeContent.appendChild(img);
    homeContent.appendChild(copy);
    homeContent.appendChild(hours);
    homeContent.appendChild(location);
    content.appendChild(homeContent);
}

export { homeTab }