function menuTab(content) {
    const sectionOne = document.createElement('div');
    const title = document.createElement('h1');
    const disclaimerOne = document.createElement('p');
    //const menuItems = ['Liver and Onions', 'Spaghetti with Meatballs', 'Fried Chicken'];

    title.textContent = 'Afternoon Tea';
    title.classList.add('headings');
    disclaimerOne.textContent = '*Served from 12 - 5pm everday*';
    sectionOne.appendChild(title);
    sectionOne.appendChild(disclaimerOne);
    //menuItems.forEach(function(item) {
        //let newItem = document.createElement('p');
        //newItem.textContent = item;
        //dinner.appendChild(newItem);
    //})

    content.appendChild(sectionOne);
}

export { menuTab }