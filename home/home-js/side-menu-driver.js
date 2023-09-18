sideMenuDriver(body);
function sideMenuDriver(body) {
     const menuBtn = document.querySelector('.menu-icon');
     const sideMenuDriver = document.querySelector('.side-menu-diriver');
     // const body = document.body;
   
     menuBtn.addEventListener('click', (e) => {
       e.stopPropagation(); // Prevent the click event from propagating to the body
       sideMenuDriver.classList.toggle('active');
     });
   
     // Add a click event listener to the body to close the menu when clicking anywhere else
     body.addEventListener('click', () => {
       if (sideMenuDriver.classList.contains('active')) {
         sideMenuDriver.classList.remove('active');
       }
     });
   
     // Prevent clicks inside the menu from closing it
     sideMenuDriver.addEventListener('click', (e) => {
       e.stopPropagation();
     });
   }