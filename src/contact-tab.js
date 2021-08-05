function contactTab(content) {
    const contactInfo = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    title.textContent = 'Get In Touch!';
    title.classList.add('headings');
    phone.textContent = '555-555-5555';
    email.textContent = 'AwesomeRestaurant@AwesomeRestaurant.com';

    contactInfo.appendChild(title);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    content.appendChild(contactInfo);
}

export { contactTab }