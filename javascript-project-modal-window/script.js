'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//NOTE there are multiple modal buttons on the webpage so we have to use querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

//console.log(btnsOpenModal); // You will get a NodeList it is like an array but not exactly an array

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); //NOTE : .remove method will remove the class name attached with the specified element in .html
  overlay.classList.remove('hidden');

  //below lines will do the same task as above

  //modal.style.display = 'block';
  //overlay.style.display = 'block';
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
// NOTE: We should not write closeModal() like this else it will immediately call this function as soon as Javascript calls this line:
overlay.addEventListener('click', closeModal);

//************Testcase : Close the modal window when Esc is pressed**********
// CASE : Handling keypress event on the webpage
// NOTE : When any key is pressed on a keyboard, keydown event is generated, and Javascript creates an object
// and that object contains all the info about the event and we can access that event in event handler function like below
document.addEventListener('keydown', function (event) {
  console.log('A key was pressed.');
  console.log(event);
  console.log(event.key); //Key gives a name of the key that is pressed on the keyboard

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Escape key was pressed');
    closeModal();
  }
});
