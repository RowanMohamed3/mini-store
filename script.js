
const cart = document.getElementById("cart");
const totalElement = document.getElementById("total");

let total = 0;

function addProduct(name, price) {
    const item = document.createElement("li");

    item.textContent = name + " - " + price + " EGP ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        total = total - price;
        totalElement.textContent = total;
        item.remove();
    });

    item.appendChild(deleteButton);
    cart.appendChild(item);

    total = total + price;
    totalElement.textContent = total;
}

document.getElementById("headphones").addEventListener("click", function() {
    addProduct("Headphones", 500);
});

document.getElementById("bag").addEventListener("click", function() {
    addProduct("Bag", 300);
});

document.getElementById("mouse").addEventListener("click", function() {
    addProduct("Mouse", 200);
});

