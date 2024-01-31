const categories = document.querySelector("#categories");
const totalCategories = categories.children.length;
console.log("Number of categories: ", totalCategories);


const allCategories = document.querySelectorAll(".item h2");

allCategories.forEach(category => {
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${category.nextElementSibling.children.length}`)
})


