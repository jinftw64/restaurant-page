import Coke from './coke.jpeg';
import Pepsi from './pepsi.jpeg';
import DrPepper from './dr_pepper.jpeg';


const menu = () => {
  const content = document.querySelector('div#content');

  function createMenuItemDiv(foodObject) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menuItem');

    for (const key in foodObject) {
      const element = document.createElement(
        ({
          name: 'h3',
          price: 'h3',
          description: 'p',
          picture: 'img'
        })[key]
      )
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

  beverages.forEach((beverage) => content.appendChild(createMenuItemDiv(beverage)));
}

export default menu
