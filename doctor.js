
// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filterCards function
const filterCards = e => {
    // Remove 'active' class from all buttons
    filterButtons.forEach(button => button.classList.remove("active"));
    // Add 'active' class to the clicked button
    e.target.classList.add("active");
    
    // Iterate over each filterable card
    filterableCards.forEach(card => {
        // Add 'hide' class to all cards
        card.classList.add("hide");
        
        // If the card matches the selected filter or 'all' is selected, remove 'hide' class
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

// Add click event listener to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));