$(document).ready(function () {
  var totalAmount = 0; // Variable to store the total amount
  var menuItems = []; // Array to store all menu items

  // Reset the total amount before loading the menu items
  $("#total-amount").text("Total amount: $" + totalAmount.toFixed(2));

  // Load the menu items from XML file using AJAX
  $.ajax({
    type: "GET",
    url: "food menu.xml",
    dataType: "xml",
    success: function (xml) {
      $(xml)
        .find("item")
        .each(function () {
          var name = $(this).find("name").text();
          var priceText = $(this).find("price").text();
          var price = parseFloat(priceText.replace("$", ""));
          var description = $(this).find("description").text();
          var image = $(this).find("image").text();

          // Push the menu item object to the array
          menuItems.push({
            name: name,
            price: price,
            description: description,
            image: image,
          });
        });

      // Render the menu items
      renderMenuItems(menuItems);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  // Function to render the menu items
  function renderMenuItems(items) {
    $("#menu-list").empty(); // Clear the menu list

    // Iterate over the items and display them in the menu list
    items.forEach(function (item) {
      var listItem =
        "<li><h2>" +
        item.name +
        "</h2>" +
        '<img src="' +
        item.image +
        '" alt="' +
        item.name +
        '" class="menu-item-img">' +
        "<p><strong>Price:</strong> $" +
        item.price.toFixed(2) +
        "</p><p>" +
        item.description +
        '</p><button class="add-to-cart" data-price="' +
        item.price +
        '">Add to Cart</button></li>';
      $("#menu-list").append(listItem);
    });
  }

  // Rest of your code...

  // Add click event listener to the "Add to Cart" buttons
  $("#menu-list").on("click", ".add-to-cart", function () {
    var item = $(this).closest("li").clone();
    var price = parseFloat($(this).data("price")); // Get the price from data attribute
    var quantity = 1; // Default quantity

    // Create the remove button
    var removeButton = $('<button class="remove-from-cart">Remove</button>');
    removeButton.data("price", price); // Store the price in the remove button's data

    // Add click event listener to the remove button
    removeButton.click(function () {
      var removePrice = parseFloat($(this).data("price")); // Get the price from data attribute
      var removeQuantity = parseInt(item.find(".quantity-input").val(), 10); // Get the quantity of the item
      var subtotal = removePrice * removeQuantity; // Calculate the subtotal for the item
      totalAmount -= subtotal; // Deduct the subtotal from the total amount
      item.remove(); // Remove the item from the cart

      // Print the total amount
      $("#total-amount").text("Total amount: $" + totalAmount.toFixed(2));
    });

    // Append the remove button to the item
    item.append(removeButton);

    // Create the quantity input field
    var quantityInput = $(
      '<input class="quantity-input" type="number" value="1" min="1">'
    );
    quantityInput.on("input", function () {
      var newQuantity = parseInt($(this).val(), 10); // Get the new quantity
      var oldQuantity = quantity; // Store the old quantity
      quantity = newQuantity; // Update the quantity variable
      var priceChange = price * (newQuantity - oldQuantity); // Calculate the price change based on quantity difference
      totalAmount += priceChange; // Update the total amount with the price change

      // Print the total amount
      $("#total-amount").text("Total amount: $" + totalAmount.toFixed(2));
    });

    // Append the quantity input to the item
    item.append(quantityInput);

    // Append the item to the cart
    $("#cart-items").append(item);

    var subtotal = price * quantity; // Calculate the subtotal for the item
    totalAmount += subtotal; // Add the subtotal to the total amount

    // Print the total amount
    $("#total-amount").text("Total amount: $" + totalAmount.toFixed(2));
  });

  // Add click event listener to the "Checkout" button
  $("#cart-container").on("click", "#checkout-btn", function () {
    alert("Thank you for your order! Total amount: $" + totalAmount.toFixed(2));
    $("#cart-items").empty();
    totalAmount = 0; // Reset the total amount to zero
    $("#total-amount").text("Total amount: $" + totalAmount.toFixed(2)); // Update the total amount display
  });

  // Search functionality
  $("#search-input").on("input", function () {
    var searchTerm = $(this).val().toLowerCase(); // Get the search term in lowercase

    if (searchTerm === "") {
      // Clear the search input and display the original menu
      $(this).val("");
      renderMenuItems(menuItems);
    } else {
      // Filter the menu items based on the search term
      var filteredItems = menuItems.filter(function (item) {
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
        );
      });

      // Render the filtered menu items
      renderMenuItems(filteredItems);
    }
  });
});
