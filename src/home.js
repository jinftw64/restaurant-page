import Picture from './restaurant.jpg'

const generatePage = () => {
  const content = document.querySelector('#content');

  // append restaurant picture
  const dogPic = new Image();
  dogPic.src = Picture;
  content.appendChild(dogPic);

  // append header
  const heading = document.createElement('h1');
  heading.innerText = 'Welcome to this restaurant!'
  content.appendChild(heading);

  // append description
  const description = document.createElement('p');
  description.innerText = 'Sample test goes here. This is a description of this retaurant. Welcome and enjoy your stay.';
  content.appendChild(description);
}

export default generatePage;
