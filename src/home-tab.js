function homeTab(content) {
    const homeContent = document.createElement('div');
    const title = document.createElement('header');
    const copy = document.createElement('p');
    const review = document.createElement('p');

    title.textContent = 'Awesome Restaurant';
    copy.textContent = 'Fresh, locally-sourced goodness. Love your body, love your food.';
    review.textContent = '"The best food ever!" -every single customer';
    //document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/1024px-Tom%27s_Restaurant%2C_NYC.jpg')";

    homeContent.appendChild(title);
    homeContent.appendChild(copy);
    homeContent.appendChild(review);
    content.appendChild(homeContent);
}

export { homeTab }