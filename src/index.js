import './style.css';
import './greyfloral.png';
import { homeTab } from './home-tab';
import { contactTab } from './contact-tab';
import { menuTab } from './menu-tab';

function createTabs(content) {
    const allTabs = document.createElement('div');
    allTabs.id = 'all-tabs';
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
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function darkenTabs(allTabs, selectedTab) {

    allTabs.childNodes.forEach(function(tab) {
        if (tab.textContent != selectedTab) {
            tab.classList.add('unselected');
        } else {
            tab.classList.remove('unselected');
        }
    })
}

const content = document.querySelector('#content');
const tabsContainer = document.createElement('div');
tabsContainer.id = 'tabs-container';
const allTabs = createTabs(content);
content.appendChild(tabsContainer);

homeTab(tabsContainer);
darkenTabs(allTabs, 'Home');

allTabs.addEventListener('click', (e) => {
    clearDom(tabsContainer);
    darkenTabs(allTabs, e.target.textContent);
    if (e.target.textContent === 'Menu') {
        menuTab(tabsContainer);
    } else if (e.target.textContent === 'Contact') {
        contactTab(tabsContainer);
    } else {
        homeTab(tabsContainer);
    }
})