import Coke from './coke.jpeg';
import Pepsi from './pepsi.jpeg';
import DrPepper from './dr_pepper.jpeg';


const menu = () => {
  function createMenuItemDiv(foodObject) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menuItem');

    const elementTypes = {
      name: 'h3',
      price: 'h3',
      description: 'p',
      picture: 'img'
    }

    for (const key in foodObject) {
      const element = document.createElement(elementTypes[key])
      if (key !== 'picture') {
        element.classList.add(key)
        element.innerText = foodObject[key];
      } else {
        element.src = foodObject[key];
      }
      menuItemDiv.appendChild(element)
    }

    return menuItemDiv;
  }

  const beverages = [
    { name: 'Coke', price: 2, description: 'Bottle of Coke', picture: Coke },
    { name: 'Pepsi', price: 3, description: 'Bottle of Pepsi', picture: Pepsi },
    { name: 'Dr. Pepper', price: 4, description: 'Bottle of Dr. Pepper', picture: DrPepper }
  ]

  function renderMenuItems(items) {
    const content = document.querySelector('div#content');
    items.forEach((item) => content.appendChild(createMenuItemDiv(item)));
  }

  renderMenuItems(beverages);

}

export default menu
