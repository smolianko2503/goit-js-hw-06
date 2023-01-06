const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log('Number of categories:', categories.children.length);

items.forEach(function (item, index) {
    
    const nameCategories = item.firstElementChild.textContent;
    console.log("Category:", nameCategories);
    
    const ulLi = item.lastElementChild;

    const elements = ulLi.children.length;
    console.log("Elements", elements);
})
