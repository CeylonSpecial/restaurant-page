import './style.css';
import { homeTab } from './home-tab';
import { contactTab } from './contact-tab';
import { menuTab } from './menu-tab';

function createTabs(content) {
    const allTabs = document.createElement('div');
    allTabs.classList.add('all-tabs');
    const tabList = ['Home', 'Menu', 'Contact'];

    tabList.forEach(function(tab) {
        let newTab = document.createElement('button');
        newTab.textContent = tab;
        allTabs.appendChild(newTab);
    })

    content.appendChild(allTabs);
    return allTabs;
}

function clearDom(parent) {

    for (const child of parent.children) {
        if (child.className != 'all-tabs') {
            parent.removeChild(child);
        }
    }
}

const content = document.querySelector('#content');
const allTabs = createTabs(content);

allTabs.addEventListener('click', (e) => {
    clearDom(content);
    if (e.target.textContent === 'Menu') {
        menuTab(content);
    } else if (e.target.textContent === 'Contact') {
        contactTab(content);
    } else {
        homeTab(content);
    }
})