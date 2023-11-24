import Picture from './restaurant.jpg'

const generatePage = () => {
  const content = document.querySelector('#content');

  const dogPic = new Image();
  dogPic.src = Picture;
  content.appendChild(dogPic);

  const heading = document.createElement('h1');
  heading.innerText = 'Welcome to this restaurant!'
  content.appendChild(heading);
}

export default generatePage;
