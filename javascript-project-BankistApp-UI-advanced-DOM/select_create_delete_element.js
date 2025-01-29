// IMP : Selecting Elements

console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// IMP : Creating and inserting element

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // Added as first child of this element
header.append(message); // Added as last child
//header.append(message.cloneNode(true)); // cloneNode copies the element to display same element multiple places

//header.before(message);
//header.after(message);

// IMP : Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
