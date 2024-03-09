// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// const categoriesListEl = document.querySelector('#categories');
// const childrenList = categoriesListEl.children;
// console.log(`Number of categories: ${childrenList.length}`);

const categoriesArr = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesArr.length}`);

// Для кожного елемента li.item у списку ul#categories знайде
// й виведе в консоль текст заголовка елемента(тегу < h2 >)
// і кількість елементів у категорії(усіх < li >, вкладених у нього).

categoriesArr.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const elementsQty = category.querySelectorAll('li').length;
  console.log(`Elements: ${elementsQty}`);
});
