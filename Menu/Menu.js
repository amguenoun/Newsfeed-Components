/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const header = document.querySelector('.header');

function menuCreator(item) {
  //Creating Elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  //Assigning Classes
  menu.classList.add('menu');
  menu.classList.add('menu--close');
  menu.classList.add('menu--start');

  //Creating Layout
  header.appendChild(menu);
  menu.appendChild(list);

  //Creating List Items
  for (let el of item) {
    let listItem = document.createElement('li');
    listItem.textContent = el;
    list.appendChild(listItem);
  }

  //Create a menuBtn click event
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    menu.classList.toggle('menu--close');
    menu.classList.remove('menu--start');
  });
}

menuCreator(menuItems);

