const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); // Added as last child

// IMP : Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//-------------IMP:  Set Styles-------------
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
//console.log(message.style.color);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//IMP : Change CSS properties
document.documentElement.style.setProperty('--color-primary', 'orangered');

//--------- IMP : Attributes--------------

const logo = document.querySelector('.nav__logo');
console.log(logo.src); //absolute path
console.log(logo.getAttribute('src')); //relative path
console.log(logo.alt);
logo.setAttribute('company', 'Bankist'); // Check the element in browser

const link = document.querySelector('.btn--show-modal');
console.log(link.href);
console.log(link.getAttribute('href'));

//---------- IMP: Classes -------------
// Just few examples below
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
