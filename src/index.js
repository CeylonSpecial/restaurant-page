import './style.css';
import './greyfloral.png';
import { createTabs, darkenTabs} from './all-tabs';
import { homeTab } from './home-tab';
import { contactTab } from './contact-tab';
import { menuTab } from './menu-tab';

function clearDom(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function pageStartUp() {
    const content = document.querySelector('#content');
    const allTabs = createTabs(content);

    const contContainer = document.createElement('div');
    contContainer.id = 'cont-container';
    content.appendChild(contContainer);

    homeTab(contContainer);
    darkenTabs(allTabs, 'Home');

    return [contContainer, allTabs];
}

const [contContainer, allTabs] = pageStartUp();

allTabs.addEventListener('click', (e) => {
    clearDom(contContainer);
    darkenTabs(allTabs, e.target.textContent);
    if (e.target.textContent === 'Menu') {
        menuTab(contContainer);
    } else if (e.target.textContent === 'Contact') {
        contactTab(contContainer);
    } else {
        homeTab(contContainer);
    }
})