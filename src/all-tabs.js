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

function darkenTabs(allTabs, selectedTab) {

    allTabs.childNodes.forEach(function(tab) {
        if (tab.textContent != selectedTab) {
            tab.classList.add('unselected');
        } else {
            tab.classList.remove('unselected');
        }
    })
}

export { createTabs, darkenTabs }