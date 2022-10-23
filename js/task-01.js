const items = document.querySelectorAll('.item');
console.log("Number of categories: ", items.length);
console.log('\n')
for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    console.log("Category: ", items[itemIndex].querySelector('h2').textContent);
    console.log("Elements: ", items[itemIndex].querySelectorAll('li').length);
    console.log('\n')
}