// Get references to the main menu items
const menuItems = document.querySelectorAll('.dropDwonMenuWrapper span');

// Get a reference to the .bottom-header-wrapper-container
const bottomHeaderContainer = document.querySelector('.bottom-header-wrapper-container');

// Add event listeners for mouseenter and mouseleave on each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', () => {
    // Hide the bottom header container
    bottomHeaderContainer.style.display = 'none';
  });

  menuItem.addEventListener('mouseleave', () => {
   
    bottomHeaderContainer.style.display = 'block';
  });
});
