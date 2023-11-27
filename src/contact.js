import Harry from './harry.jpeg';
import Ron from './ron.jpeg';
import Hermione from './hermione.jpeg';

const contacts = () => {
  function createContactDiv(personObject) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const elementTypes = {
      name: 'h3',
      title: 'h3',
      phone: 'p',
      email: 'p',
      picture: 'img'
    };

    for (const key in personObject) {
      const element = document.createElement(elementTypes[key]);
      if (key !== 'picture') {
        element.classList.add(key)
        element.innerText = personObject[key];
      } else {
        element.src = personObject[key];
      }
      contactDiv.appendChild(element);
    };

    return contactDiv;
  };

  const addressBook = [
    { name: 'Harry Potter', title: 'Manager', phone: 1231231234, email: 'test@test.com', picture: Harry },
    { name: 'Ron Weasley', title: 'Chef', phone: 3453453456, email: 'test2@test.com', picture: Ron },
    { name: 'Hermione Granger', title: 'Waiter', phone: 6786786789, email: 'test3@test.com', picture: Hermione },
  ];

  function renderContactsItems(items) {
    const content = document.querySelector('div#content');
    items.forEach((item) => content.appendChild(createContactDiv(item)));
  };

  renderContactsItems(addressBook);
}

export default contacts;
