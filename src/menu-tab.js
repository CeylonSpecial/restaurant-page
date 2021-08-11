function menuTab(content) {
    content.appendChild(sectionOne.section);
    content.appendChild(sectionTwo.section);
}

const sectionOne = (() => {
    const title = document.createElement('h1');
    title.id = 'menu-heading';
    title.textContent = 'Afternoon Tea';

    const description = document.createElement('p');
    description.textContent = `A light, three-course meal, including the following:

    
    Your choice of tea
    One Scone - served with fresh cream, lemon curd  
    & blackcurrant preserves
    Your choice of five tea sandwiches
    Your choice of three tea pastries`;

    const section = document.createElement('div');
    section.appendChild(title);
    section.appendChild(description);

    return { section }
})();

const sectionTwo = (() => {
    const menuItems = {
        teas: {
            name: "Teas",
            selection: ["English Breakfast", "Assam", "Earl Grey", "Irish Breakfast",
            "Masala Chai", "Oolong", "Jasmine Green", "Chamomile", "Peppermint"]
        },
        sandwiches: {
            name: "Tea Sandwiches",
            selection: ["Cucumber & Cream Cheese", "Smoked Salmon & Cream Cheese", "Egg Salad",
            "Cheese & Chutney", "Prawn Salad", "Ham & Mustard", "Roasted Veggies & Cream Cheese"]
        },
        pastries: {
            name: "Tea Pastries",
            selection: ["Coconut Cake", "Egg Custard Tart", "Shortbread Tea Biscuits", "Lemon Pound Cake",
            "Strawberry Jam Cake", "Chocolate Ganache Tart"]
        }
    }

    const section = document.createElement('div');
       
    for (let item in menuItems) {
        const name = document.createElement('p');
        name.classList.add('sub-headings');
        name.textContent = menuItems[item].name;
        section.appendChild(name)
        const selection = document.createElement('p');
        menuItems[item].selection.forEach(element => {
            selection.textContent += element + '\r\n';
            section.appendChild(selection);
        });
    }

    return { section }
})();

export { menuTab }