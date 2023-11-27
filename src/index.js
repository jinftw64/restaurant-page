import generatePage from "./home";
import menu from "./menu";
import contacts from "./contact";

console.log('Test statement');

function createNavBar() {
  const navBar = document.createElement('nav');
  const list = document.createElement('ol');
  const homeLink = document.createElement('li');
  const menuLink = document.createElement('li');
  const contactLink = document.createElement('li');

  navBar.appendChild(list);
  list.appendChild(homeLink);
  list.appendChild(menuLink);
  list.appendChild(contactLink);

  homeLink.id = 'id';
  homeLink.innerText = 'home';
  menuLink.id = 'menu';
  menuLink.innerText = 'menu';
  contactLink.id = 'contact';
  contactLink.innerText = 'contact';

  homeLink.onclick = () => {
    clearContent();
    generatePage();
  }

  menuLink.onclick = () => {
    clearContent();
    menu();
  }

  contactLink.onclick = () => {
    clearContent();
    contacts();
  }

  return navBar;
}

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function renderNavBar() {
  const nav = document.querySelector('nav');
  nav.appendChild(createNavBar());
}

renderNavBar();
generatePage();
