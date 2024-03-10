const categoriesArr = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const elementsQty = category.querySelectorAll('li').length;
  console.log(`Elements: ${elementsQty}`);
});
