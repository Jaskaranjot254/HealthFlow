
// var swiper = new Swiper(".mySwiper", {
// //   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//   },
// });


// slider index page
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 5500,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       450: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView:2,
//         spaceBetween:20,
//       },
//     },
//   });




// award-logo


var logos = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".award-logo") .appendChild(logos);



// Doctor page


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