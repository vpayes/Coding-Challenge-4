// Task 1: Create an Inventory Array of Product Objects 

// Sample Data for Inventory Initialization 
const inventory = [
    {name: `Laptop`, price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

// Task 2: Create a Function to Display Product Details
function displayProductDetails(product){
    const status = product.quality <= product.lowStockLevel ? "Low Stock":"In Stock";
    return `${product.name} is ${status}` 
}

console.log(display.inventory[0]);

// Task 3: Create a Function to Update Product Stock After Sales 
function updateStock(product, unitsSold) {
    if (unitsSold > product.quantity)
    const status = product.quantity <= product.lowStockLevel ? "low stock" : "out of stock";
    if (product.quantity === 0) {
        console.log(`${product.name}`is ${status});
    }
}

// Task 4: Create a Function to Check Low Stock Products
function checkLowStock (inventory){
    inventory.forEach(inventory => {
        if (inventory.quantity <= inventory.lowStockLevel)
            return console.log(`Low stock level: ${inventory}`)
    })
}

// Task 5: Create a FUnction to Calculate Total Inventory Value
function calculateInventoryValue (inventory) {
    return inventory.reduce((total, totalValue)=> {
        return totalValue + (inventory.quantity * inventory.price)},0);
    };
    const inventoryTotalValue = calculateInventoryValue(inventory);
    console.log(`Total iventory value is $${inventoryTotalValue}`);

// Task 6: Create a Function to Process a Sale
function processSale(productName, unitsSold){
    const product = inventory.find(item => item.name === productName);
    return product ? updateStock: 'Product is not in the inventory';
}

