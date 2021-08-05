function contactTab(content) {
    const contactInfo = document.createElement('div');
    const title = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    title.textContent = 'Get In Touch!';
    phone.textContent = '555-555-5555';
    email.textContent = 'AwesomeRestaurant@AwesomeRestaurant.com';

    contactInfo.appendChild(title);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    content.appendChild(contactInfo);
}

export { contactTab }