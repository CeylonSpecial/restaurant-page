function menuTab(content) {
    const dinner = document.createElement('div');
    const title = document.createElement('p');
    const menuItems = ['Liver and Onions', 'Spaghetti with Meatballs', 'Fried Chicken'];

    title.textContent = 'Dinner Menu';
    dinner.appendChild(title);
    menuItems.forEach(function(item) {
        let newItem = document.createElement('p');
        newItem.textContent = item;
        dinner.appendChild(newItem);
    })

    content.appendChild(dinner);
}

export { menuTab }